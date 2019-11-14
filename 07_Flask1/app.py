from flask import Flask, request, Response
from flask.json import jsonify
import requests

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello Class!'

@app.route('/xkcd/<cnum>')
def xkcdproxy(cnum):
    x = requests.get(f'http://xkcd.com/{cnum}/info.0.json')
    return jsonify(x.json())

@app.route('/proxy')
def proxy():
    x = requests.get(request.args['url'])
    resp = Response(x.text)
    resp.headers['Content-Type'] = 'application/json'
    return resp


if __name__ == '__main__':
    app.run()
