# -*- coding: utf-8 -*-
"""
@author: Paster
"""
from time import time
import hashlib
import json
from uuid import uuid4

# Class of blockchain
class Blockchain(object):
    def __init__(self):
        self.current_transaction = []
        self.chain = []
        self.new_block(previous_hash='1', proof=100)
        
    def new_transaction(self, sender, receiver, money):
        self.current_transaction.append({
            'sender': sender,
            'receiver': receiver,
            'money': money,
        })
    
        return self.last_block['index'] + 1
    
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
        
    @property
    def last_block(self):
        return self.chain[-1]
    
    @staticmethod
    def hash(block):
        block_string = json.dumps(block, sort_keys=True).encode()
        return hashlib.sha256(block_string).hexdigest()
    
    def proof_of_work(self, last_block):
        last_proof = last_block['proof']
        last_hash = self.hash(last_block)

        proof = 0
        while self.valid_proof(last_proof, proof, last_hash) is False:
            proof += 1

        return proof
    
    @staticmethod
    def valid_proof(last_proof, proof, last_hash):
        guess = f'{last_proof}{proof}{last_hash}'.encode()
        guess_hash = hashlib.sha256(guess).hexdigest()
        return guess_hash[:4] == "0000"
    
    
# Give you a Unique ID
myAddress = str(uuid4()).replace('-', '')
print("My unique ID : "+myAddress)

# Constructor
blockchain = Blockchain()
# Mine : Create a block
last_block = blockchain.last_block
proof = blockchain.proof_of_work(last_block)   
# Reward
blockchain.new_transaction('0', myAddress, 1)    

previous_hash = blockchain.hash(last_block)
block = blockchain.new_block(proof, previous_hash)
print(block)