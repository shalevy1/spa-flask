from flask import Flask, render_template, jsonify
from flask_socketio import SocketIO #https://blog.miguelgrinberg.com/post/easy-websockets-with-flask-and-gevent/page/12
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_mail import Mail
import os
import requests
import boto3

##gunicorn==19.9.0
##web: gunicorn run (py file):app (flask name)
app = Flask(__name__,
        static_folder = "dist/static",
        instance_relative_config=True,
        template_folder = "dist"
        )

# print(app.template_folder)  --> PRINT dist
try:
    import config
    app.config.from_object('config.BaseConfig')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    AWS_ACCESS_KEY_ID = config.BaseConfig.AWS_ACCESS_KEY_ID
    AWS_SECRET_ACCESS_KEY = config.BaseConfig.AWS_SECRET_ACCESS_KEY
    MAIL_PASSWORD = config.BaseConfig.MAIL_PASSWORD,
    DEBUG = True
    print('DEV_MODE')
except:
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL') ## CRUCIAL SETTING
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
    app.config['DEBUG'] = False
    AWS_SECRET_ACCESS_KEY =  os.environ.get('AWS_SECRET_ACCESS_KEY')
    AWS_ACCESS_KEY_ID =  os.environ.get('AWS_ACCESS_KEY_ID')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    DEBUG = False


s3_resource = boto3.resource('s3',
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key= AWS_SECRET_ACCESS_KEY)

s3_client = boto3.client('s3',
         aws_access_key_id=AWS_ACCESS_KEY_ID,
         aws_secret_access_key= AWS_SECRET_ACCESS_KEY)


db = SQLAlchemy(app)
bcrypt = Bcrypt()

socketio = SocketIO(app, cors_allowed_origins="*", manage_session=False)

## see documentation
## every api call with the prefix /api/ will be accepted cross platfrom
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

## https://pythonhosted.org/Flask-Mail/
app.config.update(dict(
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = 587,
    MAIL_USE_TLS = True,
    MAIL_USERNAME = 'chrisflask0212@gmail.com',
    MAIL_PASSWORD = MAIL_PASSWORD,
    MAIL_SUPPRESS_SEND = False,
    MAIL_DEBUG = True,
    TESTING = False
))

mail = Mail(app)


from routes import *
from sockets import *


if __name__ == '__main__':
    socketio.run(app)
    #app.run()
