import csv
with open('raw_data.csv',encoding='Big5')as f:
    for row in csv.reader(f):
        print(row)