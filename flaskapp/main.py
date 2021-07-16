#!/usr/bin/env python 
import requests, json
from flask import Flask, request, make_response
try:
  import googleclouddebugger
  googleclouddebugger.enable(breakpoint_enable_canary=False)
except ImportError:
  pass
SCRIPT_ID = 'AKfycby4oKf1S-Gi1K4eZN-g5aBJgVChCBxBvWnRU4RdGEmOxqWVdPqrSYYJtdIWHy_8VVILRw'
# SCRIPT_URL = f'https://script.googleapis.com/v1/scripts/{SCRIPT_ID}:run' # API version, needs a post with object containing func name + params
SCRIPT_URL = f'https://script.google.com/a/macros/google.com/s/{SCRIPT_ID}/exec' # Webhook version
app = Flask(__name__, static_folder="build", static_url_path="/")

@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route('/api/generate', methods=['POST'])
def generate_document():
    """Proxy endpoint to receive the document data and pass it 
    to Appscript"""
    data = request.get_json()
    token = request.headers.get('Authorization')
    r = requests.post(SCRIPT_URL, data=json.dumps(data), headers={'Authorization': token})
    resp_data = {'ok': None, 'msg': None}
    try:
        r.raise_for_status()
        resp_data['ok'] = True 
        resp_data['msg'] = r.json().get('url')
    except requests.exceptions.HTTPError as e:
        resp_data['ok'] = False 
        resp_data['msg'] = str(e)
    resp = make_response(resp_data)
    resp.headers["Access-Control-Allow-Origin"] = "*"
    return resp


if __name__ == '__main__':
    app.run(host='127.0.0.1', port='5000', debug=True)
