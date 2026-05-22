from __future__ import annotations

from pathlib import Path

from flask import Blueprint, send_from_directory, current_app


bp = Blueprint("pages", __name__)


@bp.get("/")
def index():
    root = Path(current_app.config["PROJECT_ROOT"])
    return send_from_directory(root, "autos.html")


@bp.get("/favicon.ico")
def favicon():
    # Many browsers request /favicon.ico implicitly; serve the project logo.
    root = Path(current_app.config["PROJECT_ROOT"])
    return send_from_directory(root, "Logo.png")


@bp.get("/<path:path>")
def static_files(path: str):
    root = Path(current_app.config["PROJECT_ROOT"])
    return send_from_directory(root, path)
