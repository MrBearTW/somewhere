from selenium import webdriver
from selenium.webdriver.support import ui as UI
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By as BY
import os.path
import time

def main():
    if not os.path.exists('chromedriver.exe'):
        print('chromedriver not found')
        return
    print('chromedriver found')

    options = webdriver.ChromeOptions()
    options.add_argument('--disable-infobars')
    #options.add_argument('--kiosk https://youtu.be/Kre0Yo5Fgtc')

    browser = webdriver.Chrome(chrome_options=options)
    browser.get('https://www.google.com/')
    search_field = UI.WebDriverWait(browser, 10).until(
        # () => Tuple
        # [] => List
        # {} => Dict
        EC.presence_of_element_located((BY.CSS_SELECTOR, 'input#lst-ib'))
    )

    # search_field.send_keys('柯')
    # time.sleep(1)
    # search_field.send_keys('文')
    # time.sleep(1)
    # search_field.send_keys('哲')
    # time.sleep(1)
    # search_field.send_keys('\n')
    # time.sleep(5)
    # #browser.quit()

    search_field.send_keys('超爽的')
    search_field.send_keys('\n')
    search_results = UI.WebDriverWait(browser, 10).until(
        EC.presence_of_all_elements_located((BY.CSS_SELECTOR, 'div.g'))
    )
    for search_result in search_results:
        result_title = search_result.find_element_by_css_selector('h3.r')
        if result_title is not None:
            print(result_title.text)

if __name__ == '__main__':
    main()