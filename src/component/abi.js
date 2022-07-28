import serojs from 'serojs'
import seropp from 'sero-pp'
import BigNumber from 'bignumber.js'
import {Toast} from 'antd-mobile'
import { JsonRpc } from "./jsonrpc";
const rpc = new JsonRpc();
const config = {
    contractAddress: "35d3KGerTEqsieSARXwz4QEsiWCeTABPR4ySkA1tnrPW3Ws2VruKGmr6cZX8KHzKqZ66Af35g5sEPPke4bZXsT9d",
    name: "KINGC",
    github: "https://github.com/nftclub13/kingc",
    author: "KINGC",
    url: document.location.href,
	logo: document.location.protocol + '//' + document.location.host + '/kingc/logo.jpeg',
    barColor:"#a1dcf5",
    navColor:"#a1dcf5",
    barMode:"dark",
    navMode:"light"
}

const abiJSON = [
    {
     "constant": false,
     "inputs": [
      {
       "name": "code",
       "type": "string"
      }
     ],
     "name": "invest",
     "outputs": [],
     "payable": true,
     "stateMutability": "payable",
     "type": "function"
    },
    {
     "constant": false,
     "inputs": [],
     "name": "triggerStaticProfit",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "constant": false,
     "inputs": [],
     "name": "withdraw",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "constant": false,
     "inputs": [],
     "name": "harvest",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "constant": true,
     "inputs": [],
     "name": "manager",
     "outputs": [
      {
       "name": "",
       "type": "address"
      }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
    },
    {
     "constant": false,
     "inputs": [],
     "name": "recharge",
     "outputs": [],
     "payable": true,
     "stateMutability": "payable",
     "type": "function"
    },
    {
     "constant": false,
     "inputs": [
      {
       "name": "addr",
       "type": "address"
      }
     ],
     "name": "registerNode",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "constant": false,
     "inputs": [
      {
       "name": "reinvestValue",
       "type": "uint256"
      }
     ],
     "name": "reinvest",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "constant": true,
     "inputs": [],
     "name": "owner",
     "outputs": [
      {
       "name": "",
       "type": "address"
      }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
    },
    {
     "constant": true,
     "inputs": [
      {
       "name": "code",
       "type": "string"
      }
     ],
     "name": "details",
     "outputs": [
      {
       "name": "json",
       "type": "string"
      }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
    },
    {
     "constant": true,
     "inputs": [],
     "name": "balanceOfKING",
     "outputs": [
      {
       "name": "",
       "type": "uint256"
      }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
    },
    {
     "constant": false,
     "inputs": [
      {
       "name": "newManager",
       "type": "address"
      }
     ],
     "name": "setManager",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "constant": false,
     "inputs": [
      {
       "name": "newOwner",
       "type": "address"
      }
     ],
     "name": "transferOwnership",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
    },
    {
     "inputs": [
      {
       "name": "_codeServiceAddr",
       "type": "address"
      }
     ],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "constructor"
    },
    {
     "anonymous": false,
     "inputs": [
      {
       "indexed": true,
       "name": "previousOwner",
       "type": "address"
      },
      {
       "indexed": true,
       "name": "newOwner",
       "type": "address"
      }
     ],
     "name": "OwnershipTransferred",
     "type": "event"
    }
];

const caddress = config.contractAddress;
const contract = serojs.callContract(abiJSON, caddress);

class Abi {

    constructor() {
        let self = this;
        self.OnInit = new Promise(
            (resolve, reject) => {
                seropp.init(config, function (rest) {
                    if (rest === 'success') {
                        console.log("init success");
                        return resolve()
                    } else {
                        return reject(rest)
                    }
                })
            }
        )
    }

    accountDetails(pk, callback) {
        let self = this;
        seropp.getAccountDetail(pk, function (item) {
            if ("[object Map]" === item.Balance.toString()) {
                callback({pk: item.PK, mainPKr: item.MainPKr, name: item.Name, balance: item.Balance.get("SERO")})
            } else {
                callback({pk: item.PK, mainPKr: item.MainPKr, name: item.Name, balance: item.Balance["SERO"]})
            }
        });
    }

    accountList(callback) {
        seropp.getAccountList(function (data) {
            let accounts = [];
            data.forEach(function (item, index) {
                if ("[object Map]" === item.Balance.toString()) {
                    accounts.push({
                        pk: item.PK,
                        mainPKr: item.MainPKr,
                        name: item.Name,
                        balance: item.Balance.get("KINGCOIN")
                    })
                } else {
                    accounts.push({pk: item.PK, mainPKr: item.MainPKr, name: item.Name, balance: item.Balance["KINGCOIN"]})
                }
            });
            callback(accounts)
        });
    }

    details(mainPkr, code, callback) {
        this.callMethod('details', mainPkr, [code], function (json) {
            if (!json || json === "0x0") {
                callback({
                    code: "",
                    parentCode: "",
                    value: 0,
                    returnValue: 0,
                    totalAynamicReward: 0,
                    canWithdraw: 0,
                    dynamicReward: 0,
                    staticReward: 0,
                    staticTimestamp: 0,
                    achievements: [],
                    childsCode: [],
                    harvest:0,
                })
            } else {
                json = json.replace("\"parentCode\":\"\"\"\",", "");
                callback(JSON.parse(json));
            }
        });
    }
    getFullAddress(pkrs, callback) {
		seropp.getInfo(function (info) {
			rpc.seroRpc(info.rpc, "sero_getFullAddress", [pkrs], function (rets) {
				callback(rets);
			});
		});
	}

    getShortAddress(mianPKr, callback) {
		seropp.getInfo(function (info) {
			rpc.seroRpc(info.rpc, "sero_getShortAddress", [mianPKr], function (rets) {
				callback(rets);
			});
		});
	}

    getBalanceOfKinG(mainPkr, callback){
        this.callMethod('balanceOfKING',mainPkr,[],function(res){
            callback(res)
        })  
    }

    isManager(mainPKr, callback){
        let self=this
        self.callMethod('manager',mainPKr,[],function(ret){
            
            self.getFullAddress([ret], function (rets) {
				if (callback) {
                    // console.log(rets.result[ret], mainPKr);
					callback(rets.result[ret] == mainPKr);
				}
			})
        })
    }

    harvest(from, mainPKr, callback) {
        this.executeMethod('harvest', from, mainPKr, [], 0, "SERO", callback);
    } 

    recharge(from, mainPKr, amount, callback) {
        this.executeMethod('recharge', from, mainPKr, [], amount, "KINGC", callback);
    }

    triggerStaticProfit(from, mainPKr, callback) {
        this.executeMethod('triggerStaticProfit', from, mainPKr, [], 0,"KINGC", callback);
    }

    reinvest(from, mainPKr, value, callback) {
        this.executeMethod('reinvest', from, mainPKr, [value], 0,"KINGC", callback);
    }

    invest(from, mainPKr, value, code, callback) {
        this.executeMethod('invest', from, mainPKr, [code], value,"KINGC", callback);
    }

    withdraw(from, mainPKr, callback) {
        this.executeMethod('withdraw', from, mainPKr, [], 0,"KINGC", callback);
    }

    callMethod(_method, from, _args, callback) {
        let that = this;
        let packData = contract.packData(_method, _args);
        let callParams = {
            from: from,
            to: caddress,
            data: packData
        }

        seropp.call(callParams, function (callData) {
            if (callData !== "0x") {
                let res = contract.unPackData(_method, callData);
                if (callback) {
                    callback(res);
                }
            } else {
                callback("0x0");
            }
        });
    }

    executeMethod(_method, from, mainPKr, args, value, cy, callback) {
        let that = this;

        let packData = contract.packData(_method, args);
        let executeData = {
            from: from,
            to: caddress,
            value: "0x" + value.toString(16),
            data: packData,
            gasPrice: "0x" + new BigNumber("1000000000").toString(16),
            cy: cy,
        };
        let estimateParam = {
            from: mainPKr,
            to: caddress,
            value: "0x" + value.toString(16),
            data: packData,
            gasPrice: "0x" + new BigNumber("1000000000").toString(16),
            cy: cy,
        }
        seropp.estimateGas(estimateParam, function (gas, err) {
            if (err) {
                const e = typeof err =="string"?err:err.message;
                Toast.fail(e)
            } else {
                let gasNum = new BigNumber(gas);
                executeData["gas"] = "0x" + new BigNumber(gasNum.multipliedBy(2).toFixed(0)).toString(16);

                seropp.executeContract(executeData, function (res) {
                    if (callback) {
                        callback(res)
                    }
                })
            }
        });
    }
}

const abi = new Abi();
export default abi;
