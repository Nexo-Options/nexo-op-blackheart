[
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "details",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint80",
        "name": "_roundIndex",
        "type": "uint80"
      }
    ],
    "name": "fetchRoundInfo",
    "outputs": [
      {
        "internalType": "uint80",
        "name": "roundIndex",
        "type": "uint80"
      },
      {
        "internalType": "int256",
        "name": "value",
        "type": "int256"
      },
      {
        "internalType": "uint256",
        "name": "initiatedAt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "refreshedAt",
        "type": "uint256"
      },
      {
        "internalType": "uint80",
        "name": "resolvedInRound",
        "type": "uint80"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "latestRoundInfo",
    "outputs": [
      {
        "internalType": "uint80",
        "name": "roundIndex",
        "type": "uint80"
      },
      {
        "internalType": "int256",
        "name": "value",
        "type": "int256"
      },
      {
        "internalType": "uint256",
        "name": "initiatedAt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "refreshedAt",
        "type": "uint256"
      },
      {
        "internalType": "uint80",
        "name": "resolvedInRound",
        "type": "uint80"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "releaseVersion",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
