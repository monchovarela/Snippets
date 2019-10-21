import threading
import webview
import base64
import json
import os

DEBUG = False

# import database
from vendor.database import database


if(os.path.isfile("./storage/database.db") == False):
    database().create()


def stringToBase64(s):
    return base64.b64encode(s.encode('utf-8'))

def base64ToString(b):
    return base64.b64decode(b).decode('utf-8')


window = {}

class Api:


    # debug info
    def debug(self,content):
        if(DEBUG):
            print('============ Debug Python ============')
            print(content)
            print('======================================')
        else:
            return False


    # get all snippets
    def init(self,params):

        self.debug({
            'current_url': window.get_current_url()
        })

        data = database().get_all()
        output = []
        for item in data:
            arr = {
                'uid': item[0],
                'title': item[1],
                'description': item[2],
                'syntax': item[3],
            }
            output.append(arr)
        return output;


    # get snippet by uid
    def get_snippet(self,uid):
        data = database().get_by_uid(uid)
        response = {
            'uid': data[0],
            'title': data[1],
            'syntax': data[2],
            'description': data[3],
            'content': data[4],
            'date': data[5]
        }
        return {'data': response}

    # update snippet
    def put_snippet(self,params):
        params = json.loads(params)
        database().update(params['uid'],params['content'])
        return {'status': True}


    # delete snippet
    def del_snippet(self,params):
        if(params == 1):
            return {'status':False}
        else:
            database().delele_uid(params)
            return {'status': True}


    # create snippet
    def set_snippet(self,params):
        database().set(params['title'],params['syntax'],params['description'])
        return {'status': True}

    # filter snippets
    def filter_snippet(self,params):
        data = database().find_by_title(params)
        output = []
        for item in data:
            arr = {
                'uid': item[0],
                'title': item[1],
                'description': item[2],
                'syntax': item[3],
            }
            output.append(arr)
        return output;




if __name__ == '__main__':

    api = Api()

    window = webview.create_window(
        'Snippets app',
        'assets/index.html',
        js_api=api,
        width=800,
        height=500,
        resizable=False,
        #min_size=(500, 400),
        text_select=True
    )

    if(DEBUG):
        webview.start(http_server=True,gui='cef',debug=True)
    else:
        webview.start(debug=False)
