const { ethers } = require('ethers');

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://polygon-mainnet.infura.io/v3/e9dd05d61b7b44f29658158337322ca6');

  const walletPrivateKey = 'd42571c7434b4c9c7517849e125ab7283772fe3e4234105edf4434ba15d427b1';

  const gnosisSafeABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "AddedOwner",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "approvedHash",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ApproveHash",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "handler",
          "type": "address"
        }
      ],
      "name": "ChangedFallbackHandler",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "guard",
          "type": "address"
        }
      ],
      "name": "ChangedGuard",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "threshold",
          "type": "uint256"
        }
      ],
      "name": "ChangedThreshold",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "module",
          "type": "address"
        }
      ],
      "name": "DisabledModule",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "module",
          "type": "address"
        }
      ],
      "name": "EnabledModule",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "payment",
          "type": "uint256"
        }
      ],
      "name": "ExecutionFailure",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "module",
          "type": "address"
        }
      ],
      "name": "ExecutionFromModuleFailure",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "module",
          "type": "address"
        }
      ],
      "name": "ExecutionFromModuleSuccess",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "payment",
          "type": "uint256"
        }
      ],
      "name": "ExecutionSuccess",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "RemovedOwner",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "SafeReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "owners",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "threshold",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "initializer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "fallbackHandler",
          "type": "address"
        }
      ],
      "name": "SafeSetup",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "msgHash",
          "type": "bytes32"
        }
      ],
      "name": "SignMsg",
      "type": "event"
    },
    {
      "stateMutability": "nonpayable",
      "type": "fallback"
    },
    {
      "inputs": [],
      "name": "VERSION",
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
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_threshold",
          "type": "uint256"
        }
      ],
      "name": "addOwnerWithThreshold",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "hashToApprove",
          "type": "bytes32"
        }
      ],
      "name": "approveHash",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "approvedHashes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_threshold",
          "type": "uint256"
        }
      ],
      "name": "changeThreshold",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "dataHash",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "signatures",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "requiredSignatures",
          "type": "uint256"
        }
      ],
      "name": "checkNSignatures",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "dataHash",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "signatures",
          "type": "bytes"
        }
      ],
      "name": "checkSignatures",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "prevModule",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "module",
          "type": "address"
        }
      ],
      "name": "disableModule",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "domainSeparator",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "module",
          "type": "address"
        }
      ],
      "name": "enableModule",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "enum Enum.Operation",
          "name": "operation",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "safeTxGas",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "baseGas",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "gasPrice",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "gasToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "refundReceiver",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_nonce",
          "type": "uint256"
        }
      ],
      "name": "encodeTransactionData",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "enum Enum.Operation",
          "name": "operation",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "safeTxGas",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "baseGas",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "gasPrice",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "gasToken",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "refundReceiver",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "signatures",
          "type": "bytes"
        }
      ],
      "name": "execTransaction",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "enum Enum.Operation",
          "name": "operation",
          "type": "uint8"
        }
      ],
      "name": "execTransactionFromModule",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "enum Enum.Operation",
          "name": "operation",
          "type": "uint8"
        }
      ],
      "name": "execTransactionFromModuleReturnData",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        },
        {
          "internalType": "bytes",
          "name": "returnData",
          "type": "bytes"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getChainId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "start",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "pageSize",
          "type": "uint256"
        }
      ],
      "name": "getModulesPaginated",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "array",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "next",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOwners",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "offset",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "length",
          "type": "uint256"
        }
      ],
      "name": "getStorageAt",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getThreshold",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "enum Enum.Operation",
          "name": "operation",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "safeTxGas",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "baseGas",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "gasPrice",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "gasToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "refundReceiver",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_nonce",
          "type": "uint256"
        }
      ],
      "name": "getTransactionHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "module",
          "type": "address"
        }
      ],
      "name": "isModuleEnabled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "isOwner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nonce",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "prevOwner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_threshold",
          "type": "uint256"
        }
      ],
      "name": "removeOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "handler",
          "type": "address"
        }
      ],
      "name": "setFallbackHandler",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "guard",
          "type": "address"
        }
      ],
      "name": "setGuard",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_owners",
          "type": "address[]"
        },
        {
          "internalType": "uint256",
          "name": "_threshold",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "fallbackHandler",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "paymentToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "payment",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "paymentReceiver",
          "type": "address"
        }
      ],
      "name": "setup",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "signedMessages",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "targetContract",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "calldataPayload",
          "type": "bytes"
        }
      ],
      "name": "simulateAndRevert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "prevOwner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "oldOwner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "swapOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ];

  const wallet = new ethers.Wallet(walletPrivateKey, provider);

  async function deployGnosisSafe() {
    const gnosisSafeBytecode = '0x608060405234801561001057600080fd5b506001600481905550615c1b80620000296000396000f3fe6080604052600436106101d15760003560e01c8063affed0e0116100f7578063e19a9dd911610095578063f08a032311610064578063f08a03231461156b578063f698da25146115bc578063f8dc5dd9146115e7578063ffa1ad741461166257610226565b8063e19a9dd9146112bf578063e318b52b14611310578063e75235b8146113a1578063e86637db146113cc57610226565b8063cc2f8452116100d1578063cc2f84521461100c578063d4d9bdcd146110d9578063d8d11f7814611114578063e009cfde1461124e57610226565b8063affed0e014610d89578063b4faba0914610db4578063b63e800d14610e9c57610226565b80635624b25b1161016f5780636a7612021161013e5780636a761202146109895780637d83297414610b45578063934f3a1114610bb4578063a0e67e2b14610d1d57610226565b80635624b25b146107f05780635ae6bd37146108ae578063610b5925146108fd578063694e80c31461094e57610226565b80632f54bf6e116101ab5780632f54bf6e146104c85780633408e4701461052f578063468721a71461055a5780635229073f1461066f57610226565b80630d582f131461029357806312fb68e0146102ee5780632d9ad53d1461046157610226565b36610226573373ffffffffffffffffffffffffffffffffffffffff167f3d0ce9bfc3ed7d6862dbb28b2dea94561fe714a1b4d019aa8af39730d1ad7c3d346040518082815260200191505060405180910390a2005b34801561023257600080fd5b5060007f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d560001b905080548061026757600080f35b36600080373360601b365260008060143601600080855af13d6000803e8061028e573d6000fd5b3d6000f35b34801561029f57600080fd5b506102ec600480360360408110156102b657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506116f2565b005b3480156102fa57600080fd5b5061045f6004803603608081101561031157600080fd5b81019080803590602001909291908035906020019064010000000081111561033857600080fd5b82018360208201111561034a57600080fd5b8035906020019184600183028401116401000000008311171561036c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156103cf57600080fd5b8201836020820111156103e157600080fd5b8035906020019184600183028401116401000000008311171561040357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190505050611ad8565b005b34801561046d57600080fd5b506104b06004803603602081101561048457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506123d6565b60405180821515815260200191505060405180910390f35b3480156104d457600080fd5b50610517600480360360208110156104eb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506124a8565b60405180821515815260200191505060405180910390f35b34801561053b57600080fd5b5061054461257a565b6040518082815260200191505060405180910390f35b34801561056657600080fd5b506106576004803603608081101561057d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156105c457600080fd5b8201836020820111156105d657600080fd5b803590602001918460018302840111640100000000831117156105f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803560ff169060200190929190505050612587565b60405180821515815260200191505060405180910390f35b34801561067b57600080fd5b5061076c6004803603608081101561069257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156106d957600080fd5b8201836020820111156106eb57600080fd5b8035906020019184600183028401116401000000008311171561070d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803560ff16906020019092919050505061278d565b60405180831515815260200180602001828103825283818151815260200191508051906020019080838360005b838110156107b4578082015181840152602081019050610799565b50505050905090810190601f1680156107e15780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b3480156107fc57600080fd5b506108336004803603604081101561081357600080fd5b8101908080359060200190929190803590602001909291905050506127c3565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610873578082015181840152602081019050610858565b50505050905090810190601f1680156108a05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156108ba57600080fd5b506108e7600480360360208110156108d157600080fd5b810190808035906020019092919050505061284a565b6040518082815260200191505060405180910390f35b34801561090957600080fd5b5061094c6004803603602081101561092057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612862565b005b34801561095a57600080fd5b506109876004803603602081101561097157600080fd5b8101908080359060200190929190505050612bea565b005b610b2d60048036036101408110156109a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156109e757600080fd5b8201836020820111156109f957600080fd5b80359060200191846001830284011164010000000083111715610a1b57600080fd5b9091929391929390803560ff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190640100000000811115610aa757600080fd5b820183602082011115610ab957600080fd5b80359060200191846001830284011164010000000083111715610adb57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612d24565b60405180821515815260200191505060405180910390f35b348015610b5157600080fd5b50610b9e60048036036040811015610b6857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050613253565b6040518082815260200191505060405180910390f35b348015610bc057600080fd5b50610d1b60048036036060811015610bd757600080fd5b810190808035906020019092919080359060200190640100000000811115610bfe57600080fd5b820183602082011115610c1057600080fd5b80359060200191846001830284011164010000000083111715610c3257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190640100000000811115610c9557600080fd5b820183602082011115610ca757600080fd5b80359060200191846001830284011164010000000083111715610cc957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050613278565b005b348015610d2957600080fd5b50610d32613307565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610d75578082015181840152602081019050610d5a565b505050509050019250505060405180910390f35b348015610d9557600080fd5b50610d9e6134b0565b6040518082815260200191505060405180910390f35b348015610dc057600080fd5b50610e9a60048036036040811015610dd757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190640100000000811115610e1457600080fd5b820183602082011115610e2657600080fd5b80359060200191846001830284011164010000000083111715610e4857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506134b6565b005b348015610ea857600080fd5b5061100a6004803603610100811015610ec057600080fd5b8101908080359060200190640100000000811115610edd57600080fd5b820183602082011115610eef57600080fd5b80359060200191846020830284011164010000000083111715610f1157600080fd5b909192939192939080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190640100000000811115610f5c57600080fd5b820183602082011115610f6e57600080fd5b80359060200191846001830284011164010000000083111715610f9057600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506134d8565b005b34801561101857600080fd5b506110656004803603604081101561102f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050613696565b60405180806020018373ffffffffffffffffffffffffffffffffffffffff168152602001828103825284818151815260200191508051906020019060200280838360005b838110156110c45780820151818401526020810190506110a9565b50505050905001935050505060405180910390f35b3480156110e557600080fd5b50611112600480360360208110156110fc57600080fd5b81019080803590602001909291905050506139f9565b005b34801561112057600080fd5b50611238600480360361014081101561113857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561117f57600080fd5b82018360208201111561119157600080fd5b803590602001918460018302840111640100000000831117156111b357600080fd5b9091929391929390803560ff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050613b98565b6040518082815260200191505060405180910390f35b34801561125a57600080fd5b506112bd6004803603604081101561127157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613bc5565b005b3480156112cb57600080fd5b5061130e600480360360208110156112e257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613f4c565b005b34801561131c57600080fd5b5061139f6004803603606081101561133357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050614138565b005b3480156113ad57600080fd5b506113b6614796565b6040518082815260200191505060405180910390f35b3480156113d857600080fd5b506114f060048036036101408110156113f057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561143757600080fd5b82018360208201111561144957600080fd5b8035906020019184600183028401116401000000008311171561146b57600080fd5b9091929391929390803560ff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506147a0565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611530578082015181840152602081019050611515565b50505050905090810190601f16801561155d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561157757600080fd5b506115ba6004803603602081101561158e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050614948565b005b3480156115c857600080fd5b506115d161499f565b6040518082815260200191505060405180910390f35b3480156115f357600080fd5b506116606004803603606081101561160a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050614a1d565b005b34801561166e57600080fd5b50611677614e46565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156116b757808201518184015260208101905061169c565b50505050905090810190601f1680156116e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6116fa614e7f565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580156117645750600173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b801561179c57503073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b61180e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303300000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461190f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303400000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60026000600173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160026000600173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506003600081548092919060010191905055508173ffffffffffffffffffffffffffffffffffffffff167f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea2660405160405180910390a28060045414611ad457611ad381612bea565b5b5050565b611aec604182614f2290919063ffffffff16565b82511015611b62576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330323000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000808060008060005b868110156123ca57611b7e8882614f5c565b80945081955082965050505060008460ff1614156120035789898051906020012014611c12576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330323700000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b8260001c9450611c2c604188614f2290919063ffffffff16565b8260001c1015611ca4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330323100000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b8751611cbd60208460001c614f8b90919063ffffffff16565b1115611d31576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330323200000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60006020838a01015190508851611d6782611d5960208760001c614f8b90919063ffffffff16565b614f8b90919063ffffffff16565b1115611ddb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330323300000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60606020848b010190506320c13b0b60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168773ffffffffffffffffffffffffffffffffffffffff166320c13b0b8d846040518363ffffffff1660e01b8152600401808060200180602001838103835285818151815260200191508051906020019080838360005b83811015611e7d578082015181840152602081019050611e62565b50505050905090810190601f168015611eaa5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015611ee3578082015181840152602081019050611ec8565b50505050905090810190601f168015611f105780820380516001836020036101000a031916815260200191505b5094505050505060206040518083038186803b158015611f2f57600080fd5b505afa158015611f43573d6000803e3d6000fd5b505050506040513d6020811015611f5957600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611ffc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330323400000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b5050612248565b60018460ff161415612117578260001c94508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806120a057506000600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008c81526020019081526020016000205414155b612112576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330323500000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b612247565b601e8460ff1611156121df5760018a60405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018281526020019150506040516020818303038152906040528051906020012060048603858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156121ce573d6000803e3d6000fd5b505050602060405103519450612246565b60018a85858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612239573d6000803e3d6000fd5b5050506020604051035194505b5b5b8573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1611801561230f5750600073ffffffffffffffffffffffffffffffffffffffff16600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b80156123485750600173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b6123ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330323600000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b8495508080600101915050611b6c565b50505050505050505050565b60008173ffffffffffffffffffffffffffffffffffffffff16600173ffffffffffffffffffffffffffffffffffffffff16141580156124a15750600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b9050919050565b6000600173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580156125735750600073ffffffffffffffffffffffffffffffffffffffff16600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b9050919050565b6000804690508091505090565b6000600173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141580156126525750600073ffffffffffffffffffffffffffffffffffffffff16600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b6126c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475331303400000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6126f1858585857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff614faa565b90508015612741573373ffffffffffffffffffffffffffffffffffffffff167f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb860405160405180910390a2612785565b3373ffffffffffffffffffffffffffffffffffffffff167facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd37560405160405180910390a25b949350505050565b6000606061279d86868686612587565b915060405160203d0181016040523d81523d6000602083013e8091505094509492505050565b606060006020830267ffffffffffffffff811180156127e157600080fd5b506040519080825280601f01601f1916602001820160405280156128145781602001600182028036833780820191505090505b50905060005b8381101561283f5780850154806020830260208501015250808060010191505061281a565b508091505092915050565b60076020528060005260406000206000915090505481565b61286a614e7f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156128d45750600173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b612946576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475331303100000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612a47576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475331303200000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60016000600173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060016000600173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f844060405160405180910390a250565b612bf2614e7f565b600354811115612c6a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303100000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6001811015612ce1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303200000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b806004819055507f610f7ff2b304ae8903c3de74c60c6ab1f7d6226b3f52c5161905bb5ad4039c936004546040518082815260200191505060405180910390a150565b6000806000612d3e8e8e8e8e8e8e8e8e8e8e6005546147a0565b905060056000815480929190600101919050555080805190602001209150612d67828286613278565b506000612d72614ff6565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612f58578073ffffffffffffffffffffffffffffffffffffffff166375f0bb528f8f8f8f8f8f8f8f8f8f8f336040518d63ffffffff1660e01b8152600401808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c8152602001806020018a6001811115612e1557fe5b81526020018981526020018881526020018781526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001806020018473ffffffffffffffffffffffffffffffffffffffff16815260200183810383528d8d82818152602001925080828437600081840152601f19601f820116905080830192505050838103825285818151815260200191508051906020019080838360005b83811015612ee7578082015181840152602081019050612ecc565b50505050905090810190601f168015612f145780820380516001836020036101000a031916815260200191505b509e505050505050505050505050505050600060405180830381600087803b158015612f3f57600080fd5b505af1158015612f53573d6000803e3d6000fd5b505050505b6101f4612f7f6109c48b01603f60408d0281612f7057fe5b0461502790919063ffffffff16565b015a1015612ff5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330313000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60005a905061305e8f8f8f8f8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508e60008d14613053578e613059565b6109c45a035b614faa565b93506130735a8261504190919063ffffffff16565b90508380613082575060008a14155b8061308e575060008814155b613100576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330313300000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60008089111561311a57613117828b8b8b8b615061565b90505b841561315d57837f442e715f626346e8c54381002da614f62bee8d27386535b2521ec8540898556e826040518082815260200191505060405180910390a2613196565b837f23428b18acfb3ea64b08dc0c1d296ea9c09702c09083ca5272e64d115b687d23826040518082815260200191505060405180910390a25b5050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614613242578073ffffffffffffffffffffffffffffffffffffffff16639327136883856040518363ffffffff1660e01b815260040180838152602001821515815260200192505050600060405180830381600087803b15801561322957600080fd5b505af115801561323d573d6000803e3d6000fd5b505050505b50509b9a5050505050505050505050565b6008602052816000526040600020602052806000526040600020600091509150505481565b60006004549050600081116132f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330303100000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b61330184848484611ad8565b50505050565b6060600060035467ffffffffffffffff8111801561332457600080fd5b506040519080825280602002602001820160405280156133535781602001602082028036833780820191505090505b50905060008060026000600173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505b600173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146134a757808383815181106133fe57fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081806001019250506133bd565b82935050505090565b60055481565b600080825160208401855af4806000523d6020523d600060403e60403d016000fd5b6135238a8a80806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505089615267565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146135615761356084615767565b5b6135af8787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050615838565b60008211156135c9576135c782600060018685615061565b505b3373ffffffffffffffffffffffffffffffffffffffff167f141df868a6331af528e38c83b7aa03edc19be66e37ae67f9285bf4f8e3c6a1a88b8b8b8b8960405180806020018581526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281038252878782818152602001925060200280828437600081840152601f19601f820116905080830192505050965050505050505060405180910390a250505050505050505050565b60606000600173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806136da57506136d9846123d6565b5b61374c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475331303500000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600083116137c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475331303600000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b8267ffffffffffffffff811180156137d957600080fd5b506040519080825280602002602001820160405280156138085781602001602082028036833780820191505090505b5091506000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580156138da5750600173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b80156138e557508381105b156139a057818382815181106138f757fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691508080600101915050613870565b600173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146139ee578260018203815181106139e357fe5b602002602001015191505b808352509250929050565b600073ffffffffffffffffffffffffffffffffffffffff16600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415613afb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330333000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000838152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff16817ff2a0eb156472d1440255b0d7c1e19cc07115d1051fe605b0dce69acfec884d9c60405160405180910390a350565b6000613bad8c8c8c8c8c8c8c8c8c8c8c6147a0565b8051906020012090509b9a5050505050505050505050565b613bcd614e7f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015613c375750600173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b613ca9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475331303100000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614613da9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475331303300000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff167faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace405427660405160405180910390a25050565b613f54614e7f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146140c6578073ffffffffffffffffffffffffffffffffffffffff166301ffc9a77fe6d7a83a000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060206040518083038186803b15801561401857600080fd5b505afa15801561402c573d6000803e3d6000fd5b505050506040513d602081101561404257600080fd5b81019080805190602001909291905050506140c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475333303000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b5b60007f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c860001b90508181558173ffffffffffffffffffffffffffffffffffffffff167f1151116914515bc0891ff9047a6cb32cf902546f83066499bcf8ba33d2353fa260405160405180910390a25050565b614140614e7f565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156141aa5750600173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156141e257503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b614254576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303300000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614614355576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303400000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580156143bf5750600173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b614431576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303300000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff16600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614614531576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303500000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff167ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf60405160405180910390a28073ffffffffffffffffffffffffffffffffffffffff167f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea2660405160405180910390a2505050565b6000600454905090565b606060007fbb8310d486368db6bd6f849402fdd73ad53d316b5a4b2644ad6efe0f941286d860001b8d8d8d8d60405180838380828437808301925050509250505060405180910390208c8c8c8c8c8c8c604051602001808c81526020018b73ffffffffffffffffffffffffffffffffffffffff1681526020018a815260200189815260200188600181111561483157fe5b81526020018781526020018681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019b505050505050505050505050604051602081830303815290604052805190602001209050601960f81b600160f81b6148bd61499f565b8360405160200180857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101847effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018381526020018281526020019450505050506040516020818303038152906040529150509b9a5050505050505050505050565b614950614e7f565b61495981615767565b8073ffffffffffffffffffffffffffffffffffffffff167f5ac6c46c93c8d0e53714ba3b53db3e7c046da994313d7ed0d192028bc7c228b060405160405180910390a250565b60007f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a7946921860001b6149cd61257a565b30604051602001808481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405160208183030381529060405280519060200120905090565b614a25614e7f565b806001600354031015614aa0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303100000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614158015614b0a5750600173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b614b7c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303300000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff16600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614614c7c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303500000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360008154809291906001900391905055508173ffffffffffffffffffffffffffffffffffffffff167ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf60405160405180910390a28060045414614e4157614e4081612bea565b5b505050565b6040518060400160405280600581526020017f312e342e3100000000000000000000000000000000000000000000000000000081525081565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614614f20576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330333100000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b565b600080831415614f355760009050614f56565b6000828402905082848281614f4657fe5b0414614f5157600080fd5b809150505b92915050565b60008060008360410260208101860151925060408101860151915060ff60418201870151169350509250925092565b600080828401905083811015614fa057600080fd5b8091505092915050565b6000600180811115614fb857fe5b836001811115614fc457fe5b1415614fdd576000808551602087018986f49050614fed565b600080855160208701888a87f190505b95945050505050565b6000807f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c860001b9050805491505090565b6000818310156150375781615039565b825b905092915050565b60008282111561505057600080fd5b600082840390508091505092915050565b600080600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461509e57826150a0565b325b9050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156151b85761510a3a86106150e7573a6150e9565b855b6150fc888a614f8b90919063ffffffff16565b614f2290919063ffffffff16565b91508073ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f193505050506151b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330313100000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b61525d565b6151dd856151cf888a614f8b90919063ffffffff16565b614f2290919063ffffffff16565b91506151ea848284615b0e565b61525c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330313200000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b5b5095945050505050565b6000600454146152df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b8151811115615356576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303100000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60018110156153cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303200000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60006001905060005b83518110156156d35760008482815181106153ed57fe5b60200260200101519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156154615750600173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561549957503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156154d157508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b615543576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303300000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614615644576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475332303400000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508092505080806001019150506153d6565b506001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550825160038190555081600481905550505050565b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415615809576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475334303000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b60007f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d560001b90508181555050565b600073ffffffffffffffffffffffffffffffffffffffff1660016000600173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461593a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475331303000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6001806000600173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614615b0a576159f682615bd2565b615a68576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330303200000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b615a978260008360017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff614faa565b615b09576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260058152602001807f475330303000000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b5b5050565b60008063a9059cbb8484604051602401808373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050602060008251602084016000896127105a03f13d60008114615bb55760208114615bbd5760009350615bc8565b819350615bc8565b600051158215171593505b5050509392505050565b600080823b90506000811191505091905056fea264697066735822122057398fa72884cf9a6cb78aab2fb58a6b927f0e9d97d75b015daaee0959a153bf64736f6c63430007060033';

    const owners = ['0x615345db68BF675f001999d4fdB76c9Ad671b47D', '0x6FdF98c1dB9dC558887721c3c93bcCe1900A231c'];
    const confirmations = 2;

    const gnosisSafeFactory = new ethers.ContractFactory(gnosisSafeABI, gnosisSafeBytecode, wallet);
    const gnosisSafe = await gnosisSafeFactory.deploy();

    await gnosisSafe.deployed();
    console.log('Gnosis Safe deployed at:', gnosisSafe.address);

    return gnosisSafe;
  }

  async function executeTransaction(gnosisSafe, to, value, data) {
    const gasPrice = ethers.utils.parseUnits('200', 'gwei');
    
    const safeTx = await gnosisSafe.execTransaction(to, value, data, {
      gasLimit: 10000000,
      gasPrice: gasPrice,
      value: ethers.utils.parseEther('0'),
    });

    console.log('Transaction executed. SafeTxHash:', safeTx.hash);
  }

  try {
    const gnosisSafe = await deployGnosisSafe();
    const recipientAddress = '0x94Af574A6D2DE997bC223e538A8145AB3668D872';
    const transactionValue = ethers.utils.parseEther('0.2');

        const toAddress = '0x94Af574A6D2DE997bC223e538A8145AB3668D872';
        const amount = ethers.utils.parseEther('0.2');
        const functionArguments = ethers.utils.defaultAbiCoder.encode(['address', 'uint256'], [toAddress, amount]);
    
        const functionSignature = ethers.utils.id('transfer(address,uint256)');
        const transactionData = functionSignature + functionArguments.slice(2);

    await executeTransaction(gnosisSafe, recipientAddress, transactionValue, transactionData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});