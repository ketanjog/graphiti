import json
from web3.middleware import geth_poa_middleware
from web3 import Web3
import asyncio
import addresses as ADD

def wrap_transact(connection, function) -> None:
    
    tx = function.buildTransaction({
    'gasPrice': connection.eth.gasPrice,
    'nonce': connection.eth.getTransactionCount(ADD.myAddress, 'latest'),
    'from': ADD.myAddress
})


    tx_signed = connection.eth.account.signTransaction(tx, ADD.myKey)
    tx_hash = connection.eth.sendRawTransaction(tx_signed.rawTransaction)
    tx_rcpt = connection.eth.waitForTransactionReceipt(tx_hash)


