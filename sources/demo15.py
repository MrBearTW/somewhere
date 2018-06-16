import requests
import pyquery

def main():
    response = requests.get('https://www.iii.org.tw/')
    d = pyquery.PyQuery(response.text)
    p = d('div#nav-all-content-pc')
    print(p.text())

if __name__ == '__main__':
    main()