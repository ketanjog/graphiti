# graphiti network 🎨

## Code:
Phaaestus Node:
./phaestus.py and /phaestus/runUpscale.sh (GAN is set up elsewhere)

Client:
phaestus/dummy_client.py -> demo purposes
/graphiti-frontend

Contracts:
blockchain/contracts/

Deprecated Contracts (Currently unused):
graphiti-client/contracts/


![sample](sample.png)

## What it does
Graphiti offers cost efficient and decentralized GPU computation services. Anyone with a computer who doesn’t use it literally every second of the day can join the Graphiti Network to become a Phaestus Node. Phaestus nodes offer their idle computational power to the network to earn Cryptocurrency (currently L2 Eth from Arbitrum). Clients submit compute requests at a certain amount of currency to the Graphiti network via a smart contract. Valid requests are broadcasted and snatched up by the Phaestus nodes, who produce the result and return it to the smart contract. Then an exchange takes place, where the held currency is deposited into the Phaestus node address, and the computed result is offered back to the client.

## Workings:

We realized that the idea of doing computations off-chain for speed and cost effectiveness was the motivation behind rollups. We decided to build on Arbitrum to reduce costs and increase speed (as compared to running on Ethereum). 

Hardhat compiles and deploys the solidity smart contract infrastructure via Infura onto the Rinkeby testnet. We integrate it with Metamask.

The Client uploads an image. This image is hosted on a file-hosting service (currently cloudinary, will be something like IPFS later), and its url is sent as part of the request to the smart contract.

Phaestus listens to emits by the contract and claims the image job. It fetches the image and runs a Generative Adversarial Network (only available service right now) to create an upscaled image. It uploads this image to cloudinary and returns the image url to the smart contract. 

The client is periodically checking for changes in its job status. It reads from the blockchain when it detects an update, and fetches the new url. It downloads the image and serves it to the client.

## What's next for Graphiti
We had more ideas than we could execute in these past three days (as is true for any good hackathon experience :) ) So here is a brief roadmap of our journey ahead!

Handle traffic on Image Upscaling Requests
Integrate both Client and Phaestus with Metamask
Break up image computation across Phaestus nodes
Implement probabilistic verification for image upscaling
Build incentive mechanism for attractive pricing
Build incentive mechanism for faster verification
Introduce more GPU based services (generative art)
Work in the HRC721 standard to tokenize produced artwork
Generalize to GPU compute as a commodity in the graphics space
Generalization to ML computation (not just art?)
Build FHE methodologies to protect computations as they are parallelised
Zkp (?) as a verification mechanism for completing tasks
Generalize to any compute




