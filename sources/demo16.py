import requests
import bs4

def main():
    response = requests.get('https://www.iii.org.tw/')
    d = bs4.BeautifulSoup(response.text, 'html.parser')
    p = d.find(id='nav-all-content-pc')
    print(p.get_text())

if __name__ == '__main__':
    main()