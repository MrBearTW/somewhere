import json

def main():
    users = [{
        'name': 'john',
        'age': 25
    }, {
        'name': 'marry',
        'age': 32
    }]
    user = {
        'name': 'Simon',
        'age': 27
    }
    str_users = json.dumps(users)
    str_user = json.dumps(user)
    print(type(str_users))
    print(str_user)

if __name__ == '__main__':
    main()