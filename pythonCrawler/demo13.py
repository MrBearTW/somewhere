import re

def main():
    match = re.search(r'^(?P<country>\+\d+)-(?P<phone>\d+)$', '+886-987654321')
    print(match.group(0))
    print(match.group('country'))
    print(match.group('phone'))

if __name__ == '__main__':
    main()