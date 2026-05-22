from __future__ import annotations

import os
from pathlib import Path

from dotenv import load_dotenv
from flask import Flask

from .extensions import init_extensions
from .bootstrap import ensure_db_bootstrap
from .blueprints.auth import bp as auth_bp
from .blueprints.cars import bp as cars_bp
from .blueprints.reviews import bp as reviews_bp
from .blueprints.pages import bp as pages_bp


def create_app():
    project_root = Path(__file__).resolve().parents[1]
    load_dotenv(project_root / ".env")

    app = Flask(__name__)
    app.config["PROJECT_ROOT"] = str(project_root)
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "sqlite:///autoheadz.db")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "change-me")

    init_extensions(app)

    app.register_blueprint(auth_bp)
    app.register_blueprint(cars_bp)
    app.register_blueprint(reviews_bp)
    app.register_blueprint(pages_bp)

    ensure_db_bootstrap(app)
    return app


if __name__ == "__main__":
    app = create_app()
    port = int(os.getenv("PORT", "8080"))
    app.run(host="0.0.0.0", port=port, debug=True)
