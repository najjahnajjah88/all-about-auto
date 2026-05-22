from __future__ import annotations

import json

from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from ..extensions import db
from ..models import Car, User


bp = Blueprint("cars", __name__, url_prefix="/api/cars")


def _require_admin():
    uid = int(get_jwt_identity())
    user = User.query.get(uid)
    if not user or user.role != "admin":
        return None, (jsonify({"error": "admin only"}), 403)
    return user, None


def _car_to_dict(car: Car):
    return {
        "id": car.id,
        "name": car.name,
        "brand": car.brand,
        "image": car.image_url,
        "link": car.link,
        "specs": json.loads(car.specs_json or "{}"),
    }


@bp.get("")
def list_cars():
    # Simple list for now; frontend handles rich filtering.
    cars = Car.query.order_by(Car.brand.asc(), Car.name.asc()).all()
    return jsonify([_car_to_dict(c) for c in cars])


@bp.get("/<int:car_id>")
def get_car(car_id: int):
    car = Car.query.get_or_404(car_id)
    return jsonify(_car_to_dict(car))


@bp.post("")
@jwt_required()
def create_car():
    _, err = _require_admin()
    if err:
        return err

    data = request.get_json(silent=True) or {}
    name = (data.get("name") or "").strip()
    brand = (data.get("brand") or "").strip()
    image = (data.get("image") or "").strip()
    link = (data.get("link") or "").strip() or None
    specs = data.get("specs") or {}

    if not name or not brand or not image:
        return jsonify({"error": "name, brand, image are required"}), 400
    if not isinstance(specs, dict):
        return jsonify({"error": "specs must be an object"}), 400

    car = Car(name=name, brand=brand, image_url=image, link=link, specs_json=json.dumps(specs, ensure_ascii=False))
    db.session.add(car)
    db.session.commit()
    return jsonify(_car_to_dict(car)), 201


@bp.put("/<int:car_id>")
@jwt_required()
def update_car(car_id: int):
    _, err = _require_admin()
    if err:
        return err

    car = Car.query.get_or_404(car_id)
    data = request.get_json(silent=True) or {}

    if "name" in data:
        car.name = (data.get("name") or "").strip() or car.name
    if "brand" in data:
        car.brand = (data.get("brand") or "").strip() or car.brand
    if "image" in data:
        car.image_url = (data.get("image") or "").strip() or car.image_url
    if "link" in data:
        link = (data.get("link") or "").strip()
        car.link = link or None
    if "specs" in data:
        specs = data.get("specs")
        if not isinstance(specs, dict):
            return jsonify({"error": "specs must be an object"}), 400
        car.specs_json = json.dumps(specs, ensure_ascii=False)

    db.session.commit()
    return jsonify(_car_to_dict(car))


@bp.delete("/<int:car_id>")
@jwt_required()
def delete_car(car_id: int):
    _, err = _require_admin()
    if err:
        return err

    car = Car.query.get_or_404(car_id)
    db.session.delete(car)
    db.session.commit()
    return jsonify({"ok": True})
