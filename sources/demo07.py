import xml.etree.ElementTree as ET

def main():
    tree = ET.parse('demo07.xml')
    root = tree.getroot()
    print(root)
    for node in root:
        print(node)

if __name__ == '__main__':
    main()