from os import urandom
from flask import Flask,request,session,render_template


app=Flask(__name__)
app.config.update(SECRET_KEY=urandom(24),
                    KKBOX_CLIENT='',
                    KKBOX_CLIENT_SECRET='',
                    TOKEN_FILE='./token.pkl')
@app.route('/',methods=['GET'])
def index():
    question = request.args.get('question')
    #d.setdefault('my_list',list()).append(mailbox, flags, date_time, message)
    history=session.setdefault('history',list())
    if question:
        token = utils.get_token(app.config[''])
    else:
        return render_template('index.html',
                                search_history=history,
                                
                                )