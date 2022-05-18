from time import sleep
def print_items2(list):
    for item in list:
        sleep(1)
        print(item, end=' ')

a = [2, 4, 6, 8, 10]
print_items2(a)