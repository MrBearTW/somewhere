# -*- coding: utf-8 -*-
"""
@author: Paster
"""
from time import time

# Class of blockchain
class Blockchain(object):
    def __init__(self):
        self.current_transaction = []
        self.chain = []
        
    def new_transaction(self, sender, receiver, money):
        self.current_transaction.append({
            'sender': sender,
            'receiver': receiver,
            'money': money,
        })
    
    def new_block(self, proof, previous_hash):
        block = {
            'index': len(self.chain) + 1,
            'time': time(),
            'transaction': self.current_transaction,
            'proof': proof,
            'previous_hash': previous_hash
        }

        self.current_transaction = []
        self.chain.append(block)
        return block
        
    def last_block(self):
        return self.chain[-1]
    
# Constructor
blockchain = Blockchain()
# Start a transaction
blockchain.new_transaction('Send', 'Recive', '666')
# Mine : Create a block
proof = 0
previous_hash = 0
block = blockchain.new_block(proof, previous_hash)
print(block)