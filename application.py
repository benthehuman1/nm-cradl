from flask import Flask, request, send_from_directory
import numpy as np
# EB looks for an 'application' callable by default.
application = Flask(__name__)

@application.route('/')
def index():
    with open('index.html', 'r') as f:
        return f.read()

@application.route('/chartExample')
def handle_chart_example():
    slope = float(request.args.get('slope'))
    values = np.arange(20) * slope
    return {
        "values" : list(values)
    }

# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = True
    application.run()