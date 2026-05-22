from __future__ import annotations

from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from ..extensions import db
from ..models import Review, User, Car


bp = Blueprint("reviews", __name__, url_prefix="/api/reviews")


def _review_to_dict(r: Review):
    return {
        "id": r.id,
        "car_id": r.car_id,
        "user": {"id": r.user.id, "name": r.user.name},
        "rating": r.rating,
        "comment": r.comment,
        "created_at": r.created_at.isoformat() + "Z",
    }


@bp.get("")
def list_reviews():
    car_id = request.args.get("car_id", type=int)
    q = Review.query
    if car_id:
        q = q.filter(Review.car_id == car_id)
    reviews = q.order_by(Review.created_at.desc()).limit(200).all()
    return jsonify([_review_to_dict(r) for r in reviews])


@bp.post("")
@jwt_required()
def create_review():
    uid = int(get_jwt_identity())
    user = User.query.get(uid)
    if not user:
        return jsonify({"error": "user not found"}), 404

    data = request.get_json(silent=True) or {}
    car_id = data.get("car_id")
    rating = data.get("rating")
    comment = (data.get("comment") or "").strip()

    try:
        car_id = int(car_id)
    except Exception:
        return jsonify({"error": "car_id is required"}), 400

    if not Car.query.get(car_id):
        return jsonify({"error": "car not found"}), 404

    try:
        rating = int(rating)
    except Exception:
        rating = 0
    if rating < 1 or rating > 5:
        return jsonify({"error": "rating must be 1-5"}), 400
    if not comment:
        return jsonify({"error": "comment is required"}), 400

    r = Review(user_id=user.id, car_id=car_id, rating=rating, comment=comment)
    db.session.add(r)
    db.session.commit()
    db.session.refresh(r)
    return jsonify(_review_to_dict(r)), 201


@bp.delete("/<int:review_id>")
@jwt_required()
def delete_review(review_id: int):
    uid = int(get_jwt_identity())
    user = User.query.get(uid)
    if not user:
        return jsonify({"error": "user not found"}), 404

    r = Review.query.get_or_404(review_id)
    if r.user_id != user.id and user.role != "admin":
        return jsonify({"error": "not allowed"}), 403

    db.session.delete(r)
    db.session.commit()
    return jsonify({"ok": True})
