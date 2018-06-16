import re

def main():
    txt = 'Each month, over 50 million developers come to Stack Overflow to learn, share their knowledge, and build their careers.'
    match = re.search(r'\w+n\w+', txt)
    print(match.group(0))
    finds = re.findall(r'\w+n\w+', txt)
    print(finds)
    parts = re.split(r'\w+n\w+', txt)
    print(parts)
    parts = re.sub(r'\w+n\w+', '-----', txt)
    print(parts)

if __name__ == '__main__':
    main()