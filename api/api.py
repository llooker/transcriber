import re
import requests, json, os
from flask import Flask, request
from datetime import datetime as dt
SCRIPT_URL = 'https://script.google.com/a/macros/google.com/s/AKfycbx3cAgcUKu5154cjUdx1wsEJDSfIy-0OoozpdZYcqfijuTSVL2CKWw3ecKkFphRz3Ithw/exec'

app = Flask(__name__)
app.debug = True

@app.route('/api/generate', methods=['POST'])
def generate_document():
    """Proxy endpoint to receive the document data and pass it 
    to Appscript"""
    data = request.get_json()
    token = request.headers.get('Authorization')
    r = requests.post(SCRIPT_URL, data=json.dumps(data), headers={'Authorization': token})
    r.raise_for_status()
    return {"doc": r.json().get('url')}
