import json

## INSECURE! Fix this later
myAddress = "0x0Fdff1090fdE5412beFac39Dd402d443B8570CFe"
myKey = "8515ae646f520611c26cd8d3e77064ea8e4928f968110c67f40a6f8bc4cd7b14"

#gFactory_address = "0x32Df06e963675d7635Cf446d2526f14Dd099FAcD"
gFactory_address = "0x19B708EDa605a213558df8631B521180CE546F84"
gFactory_ABI = json.loads('[ { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "string", "name": "_serviceType", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "_graphitiId", "type": "uint256" } ], "name": "graphitiAvailable", "type": "event" }, { "inputs": [ { "internalType": "string", "name": "_serviceType", "type": "string" }, { "internalType": "string", "name": "_url", "type": "string" } ], "name": "createGraphiti", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getUrl", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "graphitiToOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "graphitiToPhaestus", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "graphitis", "outputs": [ { "internalType": "string", "name": "serviceType", "type": "string" }, { "internalType": "string", "name": "status", "type": "string" }, { "internalType": "string", "name": "url", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_graphitiId", "type": "uint256" }, { "internalType": "string", "name": "_newUrl", "type": "string" } ], "name": "returnUpscale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "viewGraphitis", "outputs": [ { "components": [ { "internalType": "string", "name": "serviceType", "type": "string" }, { "internalType": "string", "name": "status", "type": "string" }, { "internalType": "string", "name": "url", "type": "string" } ], "internalType": "struct GraphitiFactory.Graphiti[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" } ]')

pFactory_address = "0x3bDEed818135ebA9AC8E17A98a37196F9195c8cb"
pFactory_ABI = json.loads('[ { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "string", "name": "_serviceType", "type": "string" }, { "indexed": false, "internalType": "uint256", "name": "_graphitiId", "type": "uint256" } ], "name": "graphitiAvailable", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "_nodeId", "type": "uint256" }, { "internalType": "uint256", "name": "_graphitiId", "type": "uint256" } ], "name": "claimJob", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "_serviceType", "type": "string" }, { "internalType": "string", "name": "_url", "type": "string" } ], "name": "createGraphiti", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "string", "name": "_serviceType", "type": "string" } ], "name": "createNode", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_owner", "type": "address" } ], "name": "getMyNodeId", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_graphitiId", "type": "uint256" } ], "name": "getUrl", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "graphitiToOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "graphitiToPhaestus", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "graphitis", "outputs": [ { "internalType": "string", "name": "serviceType", "type": "string" }, { "internalType": "string", "name": "status", "type": "string" }, { "internalType": "string", "name": "url", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "phaestusNodes", "outputs": [ { "internalType": "address", "name": "nodeOwnerAddress", "type": "address" }, { "internalType": "string", "name": "serviceType", "type": "string" }, { "internalType": "uint256", "name": "jobsCompleted", "type": "uint256" }, { "internalType": "uint256", "name": "jobsFailed", "type": "uint256" }, { "internalType": "string", "name": "status", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_nodeId", "type": "uint256" } ], "name": "updateStatusActive", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "viewGraphitis", "outputs": [ { "components": [ { "internalType": "string", "name": "serviceType", "type": "string" }, { "internalType": "string", "name": "status", "type": "string" }, { "internalType": "string", "name": "url", "type": "string" } ], "internalType": "struct GraphitiFactory.Graphiti[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" } ]')

gGetter_address = "0x32Df06e963675d7635Cf446d2526f14Dd099FAcD"
gGetter_ABI = json.loads('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_serviceType","type":"string"},{"indexed":false,"internalType":"uint256","name":"_graphitiId","type":"uint256"}],"name":"graphitiAvailable","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"graphitiToOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"graphitiToPhaestus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"graphitis","outputs":[{"internalType":"string","name":"serviceType","type":"string"},{"internalType":"string","name":"status","type":"string"}],"stateMutability":"view","type":"function"}]')

nodeId = 1
