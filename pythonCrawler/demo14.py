import requests

def main():
    response = requests.get('https://www.google.com.tw/')
    print(response.status_code)
    print(response.headers)
    print(response.text)
    print(response.content)

if __name__ == '__main__':
    main()