
from selenium import webdriver

from selenium.webdriver.support import ui as UI

from selenium.webdriver.support import expected_conditions as EC

from selenium.webdriver.common.by import By as BY

import urllib.parse as UP

import os.path

import time


def main():

    if not os.path.exists('chromedriver.exe'):

        print('chromedriver not found')

        return

    print('chromedriver found')


    options = webdriver.ChromeOptions()
   # 移除被自動化軟體控制中的訊息列

    options.add_argument('--disable-infobars')

    # # --kiosk 僅 Windows 可用

    # options.add_argument('--kiosk https://www.youtube.com')


    browser = webdriver.Chrome(chrome_options=options)

    browser.get('https://www.google.com/')


    # 等待搜尋欄位出現在網頁上，最多等待 10 秒

    search_field = UI.WebDriverWait(browser, 10).until(

        # () => Tuple

        # [] => List

        # {} => Dict

        EC.presence_of_element_located((BY.CSS_SELECTOR, 'input#lst-ib'))

    )

    # 搜尋蔡英文三個字

    search_field.send_keys('蔡英文')

    search_field.send_keys('\n')

    # 取出所有搜尋紀錄

    search_results = UI.WebDriverWait(browser, 10).until(

        EC.presence_of_all_elements_located((BY.CSS_SELECTOR, 'div.g'))

    )

    for search_result in search_results:

        # 取出搜尋紀錄的標題

        result_title = search_result.find_element_by_css_selector('h3.r')

        # 有些搜尋紀錄是廣告或者地圖等，不一定會有標題，所以要先判斷標題是否存在

        if result_title is not None:

            print(result_title.text)

        result_link = result_title.find_element_by_css_selector('a')

        if result_link is not None:

            print(UP.unquote(result_link.get_attribute('href')))


    time.sleep(60)

    browser.quit()


if __name__ == '__main__':

    main()