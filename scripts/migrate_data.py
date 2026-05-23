"""One-time script: migrate SQLite data to PostgreSQL."""
from __future__ import annotations

import sys
from pathlib import Path

# Add project root to path
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from sqlalchemy import create_engine, text
from sqlalchemy.orm import Session

from backend.models import User, Car, Review


def main():
    sqlite_path = Path(__file__).resolve().parents[1] / "instance" / "autoheadz.db"
    if not sqlite_path.exists():
        print("No SQLite database found at", sqlite_path)
        return

    pg_url = "postgresql+psycopg://postgres:Najjah%40123@localhost:5432/carshowroom"
    sqlite_url = f"sqlite:///{sqlite_path}"

    pg_engine = create_engine(pg_url)
    sqlite_engine = create_engine(sqlite_url)

    with Session(sqlite_engine) as src:
        users = src.query(User).all()
        cars = src.query(Car).all()
        reviews = src.query(Review).all()

    with Session(pg_engine) as dst:
        # Check if already migrated
        if dst.query(User).count() > 0:
            print("PostgreSQL already has data — skipping migration.")
            return

        # Migrate users (FK dependency order: users first)
        for u in users:
            dst.merge(u)
        dst.commit()
        print(f"Migrated {len(users)} users")

        # Migrate cars
        for c in cars:
            dst.merge(c)
        dst.commit()
        print(f"Migrated {len(cars)} cars")

        # Migrate reviews
        for r in reviews:
            dst.merge(r)
        dst.commit()
        print(f"Migrated {len(reviews)} reviews")

        # Reset sequences so new inserts don't conflict
        dst.execute(text("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))"))
        dst.execute(text("SELECT setval('cars_id_seq', (SELECT MAX(id) FROM cars))"))
        dst.execute(text("SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews))"))
        dst.commit()
        print("Sequences updated")

    print("Data migration complete!")


if __name__ == "__main__":
    main()
