# -*- coding: utf-8 -*-
"""
@author: Paster
"""
from hashlib import sha256
x = 5
y = 0
while sha256(f'{x*y}'.encode()).hexdigest()[-1] != "0":
    y += 1
    print(f'hash({x}*{y}) = ' + str(sha256(f'{x*y}'.encode()).hexdigest()))
print(f'The solution is y = {y}')