from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from flask_cors import CORS


db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()


def init_extensions(app):
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    # Same-origin by default since we serve frontend and API together.
    # Enable CORS only if you later split frontend/backend.
    CORS(app, resources={r"/api/*": {"origins": "*"}})
