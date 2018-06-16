import urllib.parse as UP

def main():
    url = 'http://24h.pchome.com.tw/prod/DSAB03-A9008LS5F?q=/S/DSAB03'
    res = UP.urlparse(url)
    print(res)
    res = res._replace(query='q=/S/DKCA18')
    url = UP.urlunparse(res)
    print(url)
    res = res._replace(netloc='store.pchome.com.tw')
    url = UP.urlunparse(res)
    print(url)

if __name__ == '__main__':
    main()