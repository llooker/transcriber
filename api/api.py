import requests, json
from flask import Flask, request
from datetime import datetime as dt

app = Flask(__name__)


@app.route('/api/generate', methods=['POST'])
def generate_document(*args, **kwargs):
    """Proxy endpoint to receive the document data and pass it 
    to Appscript"""
    # user_identifier = request.args.get('id')
    # user_data = config[user_identifier]
    # user = user_data['external_user_id']
    # r = requests.post( f"{config['lookerHost']}:19999/api/3.1/login/{internal_id}?associative=false",
    #     headers={'Authorization': f'token {cur_token}'}, verify=False
    # )
    return {'args': json.dumps(*args), 'kwargs': json.dumps(**kwargs)}
