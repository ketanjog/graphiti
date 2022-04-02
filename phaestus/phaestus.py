import json
from web3 import Web3
import asyncio
import addresses as ADD
import wrappers as Wrap

#### --- Enter your infura url here --- ####
infura_url = "https://rinkeby.infura.io/v3/748ad11fcda7473dacdafd5fa572a5ba"

# Establish connection to the blockchain node
web3 = Web3(Web3.HTTPProvider(infura_url))


gfactory = web3.eth.contract(address=ADD.gFactory_address, abi=ADD.gFactory_ABI)
pfactory = web3.eth.contract(address=ADD.pFactory_address, abi=ADD.pFactory_ABI)
gGetter = web3.eth.contract(address=ADD.gGetter_address, abi=ADD.gGetter_ABI)



# The Upscaling Code Goes Here:
def upscale():
    return "Fuck you, and fuck your horse"

# define function to handle jobAvailable event
def handle_event(event):
    event = json.loads(Web3.toJSON(event))["args"]
    if event["_serviceType"] == "upscale":
        print("Attempting to claim image: " + str(event["_graphitiId"]))
        
        # function = pfactory.functions.claimJob(ADD.nodeId, event["_graphitiId"])
        #  Wrap.wrap_transact(web3, function)
        # url = function.call()
        url = gfactory.functions.getUrl().call()
        print(url)
        # When there is more than one node, we need a CHECK here to see if 
        # the Wrap function was successful

        new_url = upscale()

        function = gfactory.functions.returnUpscale(event["_graphitiId"], new_url)
        Wrap.wrap_transact(web3, function)
        # url = function.call()
        print("Image Upscale Successful!")


       

    # Add upscaling functionality here.


async def log_loop(event_filter, poll_interval):
    while True:
        for graphitiAvailable in event_filter.get_new_entries():
            handle_event(graphitiAvailable)
        await asyncio.sleep(poll_interval)

def main():
    event_filter = gfactory.events.graphitiAvailable.createFilter(fromBlock='latest')

    loop = asyncio.get_event_loop()
    try:
        loop.run_until_complete(
            asyncio.gather(
                log_loop(event_filter, 2)))
    finally:
        loop.close()


if __name__ == "__main__":
    main()

