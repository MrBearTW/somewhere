import urllib.parse as UP

def main():
    val = '資策會'
    # 瀏覽器 -> 伺服器
    quote_val = UP.quote(val)
    print(quote_val)
    # 伺服器收下之後解開資料
    val = UP.unquote(quote_val)
    print(val)

if __name__ == '__main__':
    main()