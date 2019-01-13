#flask stuff
from flask import Flask, redirect, url_for, session, request, jsonify
from flask_restful import reqparse
import requests
import json
import os

app = Flask(__name__)
app.debug = True

@app.route('/getToken', methods=['GET'])
def getToken():
    """
    Gets token for auth
    """
    try:
        #try to get token to use
        a = os.popen("curl -X 'POST' -H 'Authorization: Basic MmEzM2ZkNzA5ZTVlNDNhYjhlZjQzY2U1ZGQ5MDZiOGQ6MTVmZWYxYTk5MTViNDBjODgwOWRlOTE2NzRjMmI2ZTQ=' -d grant_type=client_credentials https://accounts.spotify.com/api/token").read()
        a = json.loads(a)


    except:
        #Raise error if can't get
        raise ExceptionHandler('ERROR', status_code=401)
    return jsonify({"auth_token":a["access_token"]})


#required to run
if __name__ == '__main__':
    with app.app_context():
        cache.clear()
    app.run(debug=True)
    
