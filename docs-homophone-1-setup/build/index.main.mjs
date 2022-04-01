// Automatically generated with Reach 0.1.9 (c449a2f7)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (c449a2f7)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Aleese(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Aleese expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Aleese expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v61], secs: v63, time: v62, didSend: v27, from: v60 } = txn1;
  ;
  const v66 = stdlib.protect(ctc0, await interact.guessWord(), {
    at: './index.rsh:33:57:application',
    fs: ['at ./index.rsh:32:16:application call to [unknown function] (defined at: ./index.rsh:32:20:function exp)'],
    msg: 'guessWord',
    who: 'Aleese'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v61, v66],
    evt_cnt: 1,
    funcNum: 1,
    lct: v62,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:12:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v68], secs: v70, time: v69, didSend: v36, from: v67 } = txn2;
      
      ;
      let v71;
      const v72 = stdlib.gt(v61, v68);
      if (v72) {
        const v73 = stdlib.sub(v61, v68);
        v71 = v73;
        }
      else {
        const v74 = stdlib.sub(v68, v61);
        v71 = v74;
        }
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v68], secs: v70, time: v69, didSend: v36, from: v67 } = txn2;
  ;
  let v71;
  const v72 = stdlib.gt(v61, v68);
  if (v72) {
    const v73 = stdlib.sub(v61, v68);
    v71 = v73;
    }
  else {
    const v74 = stdlib.sub(v68, v61);
    v71 = v74;
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v71), {
    at: './index.rsh:41:28:application',
    fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:30:function exp)'],
    msg: 'seeOutcome',
    who: 'Aleese'
    });
  
  return;
  
  
  
  
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v59 = stdlib.protect(ctc0, await interact.pickWord(), {
    at: './index.rsh:27:55:application',
    fs: ['at ./index.rsh:26:15:application call to [unknown function] (defined at: ./index.rsh:26:19:function exp)'],
    msg: 'pickWord',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v59],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:29:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v61], secs: v63, time: v62, didSend: v27, from: v60 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v61], secs: v63, time: v62, didSend: v27, from: v60 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v68], secs: v70, time: v69, didSend: v36, from: v67 } = txn2;
  ;
  let v71;
  const v72 = stdlib.gt(v61, v68);
  if (v72) {
    const v73 = stdlib.sub(v61, v68);
    v71 = v73;
    }
  else {
    const v74 = stdlib.sub(v68, v61);
    v71 = v74;
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v71), {
    at: './index.rsh:41:28:application',
    fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:30:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA5ShkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAACcjEkQjNAESRDQESSISTDQCEhFESTUFFzX/gATVFRkUNP8WULBCAEBIIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwgaCNBogAcDT/FoABAEsBVwAIZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 8,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
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
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
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
    "name": "_reachCurrentTime",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516106a83803806106a88339810160408190526100229161018d565b6000805543600355604080518251815260208084015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a1610074341560076100cb565b60408051602080820183526000808352848201515180845260019182905543909155835191820152909101604051602081830303815290604052600290805190602001906100c39291906100f4565b505050610266565b816100f05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546101009061022b565b90600052602060002090601f0160209004810192826101225760008555610168565b82601f1061013b57805160ff1916838001178555610168565b82800160010185558215610168579182015b8281111561016857825182559160200191906001019061014d565b50610174929150610178565b5090565b5b808211156101745760008155600101610179565b60008183036040808212156101a157600080fd5b80518082016001600160401b0380821183831017156101d057634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101e957600080fd5b83519450602085019150848210818311171561021557634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061023f57607f821691505b6020821081141561026057634e487b7160e01b600052602260045260246000fd5b50919050565b610433806102756000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b610047610090366004610303565b6100b8565b3480156100a157600080fd5b506100aa6101eb565b60405161006492919061031b565b6100c86001600054146009610288565b6100e2813515806100db57506001548235145b600a610288565b6000808055600280546100f490610378565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610378565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103ad565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16101d134156008610288565b600080805560018190556101e7906002906102ad565b5050565b60006060600054600280805461020090610378565b80601f016020809104026020016040519081016040528092919081815260200182805461022c90610378565b80156102795780601f1061024e57610100808354040283529160200191610279565b820191906000526020600020905b81548152906001019060200180831161025c57829003601f168201915b50505050509050915091509091565b816101e75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b990610378565b6000825580601f106102c9575050565b601f0160209004906000526020600020908101906102e791906102ea565b50565b5b808211156102ff57600081556001016102eb565b5090565b60006040828403121561031557600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561034f57858101830151858201606001528201610333565b81811115610361576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061038c57607f821691505b6020821081141561031557634e487b7160e01b600052602260045260246000fd5b6000602082840312156103bf57600080fd5b6040516020810181811067ffffffffffffffff821117156103f057634e487b7160e01b600052604160045260246000fd5b604052915182525091905056fea26469706673582212204123e9815112acbec5b83362a44c1c3b9bf658ac8114ca4c347879be7e1db2c364736f6c634300080c0033`,
  BytecodeLen: 1704,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:30:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:38:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Aleese": Aleese,
  "Alice": Alice
  };
export const _APIs = {
  };
