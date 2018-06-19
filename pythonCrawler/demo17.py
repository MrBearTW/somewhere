import requests
import bs4

def main():
    response = requests.get('https://www.iii.org.tw/')
    d = bs4.BeautifulSoup(response.text, 'html.parser')
    p = d.select('#nav-all-content-pc')
    print(p[0].get_text())
    p = d.select_one('#nav-all-content-pc')
    print(p.get_text())

if __name__ == '__main__':
    main()