import re
import requests
import js2py

def main():
    response = requests.get('https://www.iii.org.tw/')
    finds = re.findall(r'\<script\>.+?\</script\>', response.text, re.DOTALL)
    for find in finds:
        if 'swiper' in find:
            print(find)
            match = re.search(r'\{.+\}', find, re.DOTALL)
            print(match.group(0))
            pyobj = js2py.eval_js('var o = %s; o' % match.group(0))
            print(pyobj)

if __name__ == '__main__':
    main()