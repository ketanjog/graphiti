import json
from web3.middleware import geth_poa_middleware
from web3 import Web3
import asyncio
import addresses as ADD
import wrappers as Wrap
from time import time, sleep

url = "your mom is mine"

print("Sending url: " + str(url))

#### --- Enter your infura url here --- ####
infura_url = "https://rinkeby.infura.io/v3/748ad11fcda7473dacdafd5fa572a5ba"

# Establish connection to the blockchain node
web3 = Web3(Web3.HTTPProvider(infura_url))
web3.middleware_onion.inject(geth_poa_middleware, layer=0)

# web3.eth.accounts.wallet.add(ADD.myKey)


gfactory = web3.eth.contract(address=ADD.gFactory_address, abi=ADD.gFactory_ABI)
Pfactory = web3.eth.contract(address=ADD.pFactory_address, abi=ADD.pFactory_ABI)
gGetter = web3.eth.contract(address=ADD.gGetter_address, abi=ADD.gGetter_ABI)

function = gfactory.functions.createGraphiti("upscale", url)


Wrap.wrap_transact(web3, function)

# print(gfactory.functions.viewGraphitis().call())

unfetched = True
while unfetched:
    newUrl = gfactory.functions.getUrl().call()
    if newUrl == url:
        sleep(5)
    else:
        unfetched = False
        print("New url at: " + str(newUrl))
