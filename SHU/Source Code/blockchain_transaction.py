# -*- coding: utf-8 -*-
"""@author: Paster
"""
# Class of blockchain
class Blockchain(object):
    def __init__(self):
        self.current_transaction = []
        
    def new_transaction(self, sender, receiver, money):
        self.current_transaction.append({
            'sender': sender,
            'receiver': receiver,
            'money': money,
        })
    
# Constructor
blockchain = Blockchain()
# Run
blockchain.new_transaction('Send', 'Recive', '666')
# Test
print(blockchain.current_transaction)
