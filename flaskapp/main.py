#!/usr/bin/env python 
from json.decoder import JSONDecodeError
import requests, json
from flask import Flask, request, make_response
try:
  import googleclouddebugger
  googleclouddebugger.enable(breakpoint_enable_canary=False)
except ImportError:
  pass
# SCRIPT_ID = 'AKfycbwFmbVXqB_uze9ewdQuwm6kkhqZ2zvksp1vICRTvrJKdt_gHFSpbo67ZfQWHLpoLQDcmA' # Original version
# SCRIPT_ID = 'AKfycbwaYP3gYW3GzKPNEMDF_QnrhBB_Ux6YS43yy0TUAYwaWow9EEx16bMoUKNFmb8J5uLEGQ' # Single user deployment
SCRIPT_ID = 'AKfycbyrzNIMqI8MMPIUk9iNCDhs78XQ7aNp28IbibY8wRxHOQ9Ec20' # Newest v (redeployed)
SCRIPT_URL = f'https://script.google.com/a/macros/google.com/s/{SCRIPT_ID}/exec' # Webhook version
app = Flask(__name__, static_folder="build", static_url_path="/")

@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route('/api/generate', methods=['POST'])
def generate_document():
    """Proxy endpoint to receive the document data and pass it 
    to Appscript"""
    resp_data = {'ok': None, 'data': None, 'error': {}}
    try:
        data = request.get_json()
    except Exception as e:
        resp_data['error'] = {'source':'parsing JS content', 'details': str(e)}
    token = request.headers.get('Authorization')
    try:
        r = requests.post(SCRIPT_URL, data=json.dumps(data), headers={'Authorization': token})
    except Exception as e:
        resp_data['error'] = {'source':'Attempting post to App script', 'details': str(e)}
    try:
        r.raise_for_status()
        resp_data['ok'] = True 
        resp_data['data'] = r.json().get('url')
    except requests.exceptions.HTTPError as e:
        resp_data['ok'] = False 
        resp_data['error'] = {'source':'Error from App Script', 'details': str(e)}
    except JSONDecodeError as e:
        resp_data['ok'] = False 
        resp_data['error'] = {'source':'Unexpected App Script response', 'details': {'python': str(e), 'appscript': r.text}}
    resp = make_response(resp_data)
    resp.headers["Access-Control-Allow-Origin"] = "*"
    return resp


if __name__ == '__main__':
    app.run(host='127.0.0.1', port='5000', debug=True)
