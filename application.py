from flask import Flask, request, send_from_directory
import numpy as np
# EB looks for an 'application' callable by default.
application = Flask(__name__)

@application.route('/')
def index():
    with open('index.html', 'r') as f:
        return f.read()

@application.route('/compare')
def index2():
    with open('compare.html', 'r') as f:
        return f.read()

# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = True
    application.run()