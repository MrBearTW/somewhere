import re

def main():
    finds = re.findall(r'[0-9]+', 'N123456789 is not 123456789')
    print(finds)
    finds = re.findall(r'[A-Z]*[0-9]+', 'N123456789 is not 123456789')
    print(finds)
    finds = re.findall(r'[A-Z][0-9]+?', 'N123456789 is not 123456789')
    print(finds)
    finds = re.findall(r'[A-Z]\d+?', 'N123456789 is not 123456789')
    print(finds)
    finds = re.findall(r'\w+', 'N123456789 is not 123456789')
    print(finds)
    finds = re.findall(r'\w+\s', 'N123456789 is not 123456789')
    print(finds)

if __name__ == '__main__':
    main()