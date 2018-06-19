
import requests

import json


def main():

    response = requests.get('https://tw.quote.finance.yahoo.net/quote/q?type=tick&perd=1m&mkt=10&sym=2451&callback=XXX&_=1529131767347')

    text = response.text[4:-2]

    jsonBody = json.loads(text)

    # print(jsonBody['id'])

    # print(jsonBody['perd'])

    # print(jsonBody['type'])

    ticks = [85.99, 86.72, 83.42]

    ticks = [str(tick) for tick in ticks]

    print('\n'.join(ticks))


if __name__ == '__main__':

    main()