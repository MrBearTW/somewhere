from os import urandom, path
import pickle
from flask import Flask, session, request, render_template
from kkbox_developer_sdk.auth_flow import KKBOXOAuth
from kkbox_developer_sdk.api import KKBOXAPI

app = Flask(__name__)

app.config.update(SECRET_KEY=urandom(24),
                  KKBOX_CLIENT_ID='Your client ID',
                  KKBOX_CLIENT_SECRET='Your client secret',
                  TOKEN_FILE='./token.pkl')


def get_token(token_file, client_id, client_secret):
    """Helper function for getting the token.
    If the specified file exists, try to load it with pickle.
    Else use the given client ID and Secret to request the token.
    """
    if path.exists(token_file):
        with open(token_file, 'rb') as f:
            return pickle.load(f)
    else:
        auth = KKBOXOAuth(client_id, client_secret)
        token = auth.fetch_access_token_by_client_credentials()
        with open(token_file, 'wb') as f:
            pickle.dump(token, f)
        return token


def search_playlists(token, keyword):
    """Search playlists using the given keyword.
    This function returns a list of playlist object directly.
    """
    kkboxapi = KKBOXAPI(token)
    data = kkboxapi.search_fetcher.search(
            keyword,
            types=['playlist'],
            terr='TW')
    return data['playlists']['data']


@app.route('/', methods=['GET'])
def index():
    history = session.setdefault('history', list())
    question = request.args.get('question')
    if question:
        token = get_token(app.config['TOKEN_FILE'],
                          app.config['KKBOX_CLIENT_ID'],
                          app.config['KKBOX_CLIENT_SECRET'])
        results = search_playlists(token, question)
        record = {'q': question,
                  'title': results[0]['title'] if results else None, # server會爆炸
                  'id': results[0]['id'] if results else None}
        history.append(record)
        # Manually set to True since list.append won't be a update.
        session.modified = True
        return render_template('index.html',
                               search_history=history,
                               playlist_id=record['id'])
    else:
        return render_template('index.html',
                               search_history=history)


if __name__ == '__main__':
    app.run(debug=True)