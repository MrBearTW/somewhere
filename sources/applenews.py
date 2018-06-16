import requests
import pyquery
import time

def crawl_page(url):


    print(title.text())

    content = d('div.ndArticle_margin p')

    lines = content.text().split('\n')

    empty = 0  # 紀錄最後一次空行出現的行號

    lineno = 0 # 行號

    for line in lines:

        lineno = lineno + 1

        if line == '':

            empty = lineno

    lines = lines[:empty] # 從第一行保留到最後一次出現空行的內容

    text = '\n'.join(lines).strip()

    print(text)

    print('')


def main():

    response = requests.get('https://tw.appledaily.com/new/realtime')

    d = pyquery.PyQuery(response.text)

    posts = d('li.rtddt')

    for post in posts.items():

        a = post('a')

        link = a.attr('href')

        crawl_page(link)

        time.sleep(1)


if __name__ == '__main__':

    main()