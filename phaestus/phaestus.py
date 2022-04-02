import json
from web3 import Web3
import asyncio
import addresses as ADD

#### --- Enter your infura url here --- ####
infura_url = "https://rinkeby.infura.io/v3/748ad11fcda7473dacdafd5fa572a5ba"

# Establish connection to the blockchain node
web3 = Web3(Web3.HTTPProvider(infura_url))


gfactory = web3.eth.contract(address=ADD.gFactory_address, abi=ADD.gFactory_ABI)
Pfactory = web3.eth.contract(address=ADD.pFactory_address, abi=ADD.pFactory_ABI)
gGetter = web3.eth.contract(address=ADD.gGetter_address, abi=ADD.gGetter_ABI)


# define function to handle jobAvailable event
def handle_event(event):
    print(Web3.toJSON(event))
    gGetter.functions.fetchGraphiti(event[1])


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

