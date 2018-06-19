
import requests

import pyquery

import json


def main():

    cookie = 'sb=NXzRWkswP1rIZvlApBjQKtxW; datr=NnzRWmJfvMkecWuoKRyZHd_S; ; c_user=761761551; xs=21%3Aqyv2xicrow-9Og%3A2%3A1528169914%3A14635%3A11280; pl=y; fr=0hJumreVqGEeqvLOA.AWWBw5AhPOAPHp8lFLJtkuDSxSg.Ba0Xw1.o3.Fse.0.0.BbJLow.AWVMJb-J; wd=1600x150; presence=EDvF3EtimeF1529134702EuserFA2761761551A2EstateFDutF1529134702182CEchFDp_5f761761551F2CC; act=1529134703522%2F0'

    cookies = {}

    cookieParts = cookie.split('; ')

    for cookiePart in cookieParts:

        cookiePair = cookiePart.split('=')

        if len(cookiePair) != 2:

            continue

        cookies[cookiePair[0]] = cookiePair[1]

    response = requests.get('https://www.facebook.com/pages_reaction_units/more/?page_id=46251501064&cursor=%7B%22card_id%22%3A%22page_composer_card%22%2C%22has_next_page%22%3Atrue%7D&surface=www_pages_home&unit_count=8&referrer&fd_referrer_ui_component=search_entity_card&fd_referrer_ui_surface=search&dpr=1&__user=761761551&__a=1&__dyn=5V4cjLx2ByKEjgDxiWJGi9FxqeCwKyaF3ozGFQAjFGA6EvxuES2N6xvyEybGqK6qxeqaxu9wwxyFUKbnyogyEnGi4FpeuUuF3e2e5WDokzUhyKdyU8rh4jUXVubx26pV8Gicx2q1yByECVoyaDxa4oO3-5Lx-jx2i10GfCCgWrxjyoG69Q4UlDCzopAxOdyFE-5o-q4rG-m4ooAnyrzRG6q8IHGfjg8laUy2uibKqify4cBJ2oS1fx3yUymf-KeAKq2SiEWbx7zEyma-KaDU8fF1mmiQhxdwzAx2cjgCmUhDzEjVEjyoG2mu2u6UO2KbghgGV9-p6KiaxObw&__req=t&__be=1&__pc=PHASED%3ADEFAULT&__rev=4016461&__spin_r=4016461&__spin_b=trunk&__spin_t=1529134696', cookies=cookies)

    payload = response.text[9:]

    jsonBody = json.loads(payload)

    html = jsonBody['domops'][0][3]['__html']

    d = pyquery.PyQuery(html)

    posts = d('div.userContent')

    for post in posts.items():

        print(post.text())

        print('')


if __name__ == '__main__':

    main()