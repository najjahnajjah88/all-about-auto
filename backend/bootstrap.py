from __future__ import annotations

import json
import os
import re
from pathlib import Path

import sqlalchemy as sa

from .extensions import db
from .models import User, Car


def _extract_cars_data_from_js(js_text: str):
    # cars-data.js contains: const CARS_DATA = [ ... ];
    m = re.search(r"const\s+CARS_DATA\s*=\s*(\[.*\])\s*;\s*$", js_text, re.DOTALL)
    if not m:
        raise ValueError("Could not find CARS_DATA array in cars-data.js")
    arr_text = m.group(1)
    return json.loads(arr_text)


def ensure_db_bootstrap(app) -> None:
    """Seed admin and import cars if empty.

    Tables are created by Flask-Migrate (see migrations/).
    """
    with app.app_context():
        # If tables don't exist yet (e.g. before first migration), skip seeding.
        inspector = sa.inspect(db.engine)
        if not inspector.has_table("users") or not inspector.has_table("cars"):
            return

        # Seed admin if missing.
        admin_email = os.getenv("ADMIN_EMAIL", "").strip().lower()
        admin_password = os.getenv("ADMIN_PASSWORD", "")
        if admin_email and admin_password:
            existing_admin = User.query.filter_by(email=admin_email).first()
            if not existing_admin:
                existing_admin = User(name="Admin", email=admin_email, role="admin")
                db.session.add(existing_admin)

            # Always ensure the configured admin has admin role and the current password.
            existing_admin.role = "admin"
            existing_admin.set_password(admin_password)
            db.session.commit()

        # Import cars once if table empty.
        if Car.query.count() == 0:
            root = Path(app.config["PROJECT_ROOT"])
            js_path = root / "cars-data.js"
            if js_path.exists():
                cars = _extract_cars_data_from_js(js_path.read_text(encoding="utf-8"))
                for c in cars:
                    car = Car(
                        name=c.get("name", "").strip(),
                        brand=c.get("brand", "").strip(),
                        image_url=c.get("image", "").strip(),
                        link=(c.get("link") or "").strip() or None,
                        specs_json=json.dumps(c.get("specs") or {}, ensure_ascii=False),
                    )
                    if not car.name or not car.brand or not car.image_url:
                        continue
                    db.session.add(car)
                db.session.commit()
