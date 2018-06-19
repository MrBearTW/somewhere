import json

def main():
    str_users = '[{"name": "john", "age": 25}, {"name": "marry", "age": 32}]'
    str_user = '{"name": "Simon", "age": 27}'
    users = json.loads(str_users)
    user = json.loads(str_user)
    print(type(users))
    print(user['name'])

if __name__ == '__main__':
    main()