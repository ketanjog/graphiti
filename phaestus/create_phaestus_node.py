### --- ONLY RUN THIS ONCE DURING SETUP --- ###

import json
from web3.middleware import geth_poa_middleware
from web3 import Web3
import asyncio
import addresses as ADD
import wrappers as Wrap

#### --- Enter your infura url here --- ####
infura_url = "https://rinkeby.infura.io/v3/748ad11fcda7473dacdafd5fa572a5ba"

# Establish connection to the blockchain node
web3 = Web3(Web3.HTTPProvider(infura_url))
web3.middleware_onion.inject(geth_poa_middleware, layer=0)

# Connect to all smart contracts
gfactory = web3.eth.contract(address=ADD.gFactory_address, abi=ADD.gFactory_ABI)
Pfactory = web3.eth.contract(address=ADD.pFactory_address, abi=ADD.pFactory_ABI)
gGetter = web3.eth.contract(address=ADD.gGetter_address, abi=ADD.gGetter_ABI)


# initialise node data onto the smart contract
nodeId = Pfactory.functions.createNode(ADD.myAddress, "upscale").call()

function = Pfactory.functions.createNode(ADD.myAddress, "upscale")

Wrap.wrap_transact(web3, function)

f = open("addresses.py", "a")
f.write("nodeId = " + str(nodeId))
f.close()

print("Your node has successfully registered on the graphiti smart contract!")

