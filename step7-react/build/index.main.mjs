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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc1],
      3: [ctc0, ctc1, ctc2, ctc1, ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1]
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
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v220, v221, v222], secs: v224, time: v223, didSend: v41, from: v219 } = txn1;
  ;
  const v233 = stdlib.add(v223, v222);
  stdlib.protect(ctc2, await interact.acceptWager(v220), {
    at: './index.rsh:60:29:application',
    fs: ['at ./index.rsh:59:16:application call to [unknown function] (defined at: ./index.rsh:59:20:function exp)'],
    msg: 'acceptWager',
    who: 'Aleese'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v219, v220, v221, v222, v233],
    evt_cnt: 0,
    funcNum: 1,
    lct: v223,
    onlyIf: true,
    out_tys: [],
    pay: [v220, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v239, time: v238, didSend: v50, from: v237 } = txn2;
      
      const v241 = stdlib.add(v220, v220);
      sim_r.txns.push({
        amt: v220,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v248 = stdlib.add(v238, v222);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v233],
    tys: [ctc4, ctc0, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v219, v220, v221, v222, v233],
      evt_cnt: 0,
      funcNum: 2,
      lct: v223,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v340, time: v339, didSend: v185, from: v338 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v220,
          kind: 'from',
          to: v219,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc1, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v340, time: v339, didSend: v185, from: v338 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:41:35:application',
      fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:64:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Aleese'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v239, time: v238, didSend: v50, from: v237 } = txn2;
    const v241 = stdlib.add(v220, v220);
    ;
    const v248 = stdlib.add(v238, v222);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc0, ctc0],
      timeoutAt: ['time', v248],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v219, v220, v221, v222, v237, v241, v248],
        evt_cnt: 0,
        funcNum: 4,
        lct: v238,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v322, time: v321, didSend: v154, from: v320 } = txn4;
          
          ;
          const v323 = stdlib.addressEq(v237, v320);
          const v324 = stdlib.addressEq(v219, v320);
          const v325 = v323 ? true : v324;
          ;
          sim_r.txns.push({
            amt: v241,
            kind: 'from',
            to: v237,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc1, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v322, time: v321, didSend: v154, from: v320 } = txn4;
      ;
      const v323 = stdlib.addressEq(v237, v320);
      const v324 = stdlib.addressEq(v219, v320);
      const v325 = v323 ? true : v324;
      stdlib.assert(v325, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:73:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Aleese'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:41:35:application',
        fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:73:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Aleese'
        });
      
      return;
      
      }
    else {
      const {data: [v253, v254], secs: v256, time: v255, didSend: v60, from: v252 } = txn3;
      ;
      const v257 = stdlib.addressEq(v219, v252);
      stdlib.assert(v257, {
        at: './index.rsh:72:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Aleese'
        });
      const v258 = stdlib.digest(ctc3, [v253, v254]);
      const v259 = stdlib.digestEq(v221, v258);
      stdlib.assert(v259, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:74:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Aleese'
        });
      const v266 = stdlib.add(v255, v222);
      stdlib.protect(ctc2, await interact.seeWord(v254), {
        at: './index.rsh:78:25:application',
        fs: ['at ./index.rsh:77:16:application call to [unknown function] (defined at: ./index.rsh:77:20:function exp)'],
        msg: 'seeWord',
        who: 'Aleese'
        });
      const v270 = stdlib.protect(ctc0, await interact.guessWord(), {
        at: './index.rsh:79:57:application',
        fs: ['at ./index.rsh:77:16:application call to [unknown function] (defined at: ./index.rsh:77:20:function exp)'],
        msg: 'guessWord',
        who: 'Aleese'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v219, v220, v237, v241, v254, v266, v270],
        evt_cnt: 1,
        funcNum: 5,
        lct: v255,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:82:12:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v272], secs: v274, time: v273, didSend: v74, from: v271 } = txn4;
          
          ;
          const v275 = stdlib.addressEq(v237, v271);
          ;
          let v276;
          const v277 = stdlib.gt(v254, v272);
          if (v277) {
            const v278 = stdlib.sub(v254, v272);
            v276 = v278;
            }
          else {
            const v279 = stdlib.sub(v272, v254);
            v276 = v279;
            }
          const v280 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
          const v281 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
          const v282 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v283 = v280 ? v281 : v282;
          const v284 = v283[stdlib.checkedBigNumberify('./index.rsh:86:32:array', stdlib.UInt_max, 0)];
          const v285 = v283[stdlib.checkedBigNumberify('./index.rsh:86:32:array', stdlib.UInt_max, 1)];
          const v286 = stdlib.mul(v284, v220);
          sim_r.txns.push({
            amt: v286,
            kind: 'from',
            to: v219,
            tok: undefined /* Nothing */
            });
          const v291 = stdlib.mul(v285, v220);
          sim_r.txns.push({
            amt: v291,
            kind: 'from',
            to: v237,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v266],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v219, v220, v237, v241, v254, v266],
          evt_cnt: 0,
          funcNum: 6,
          lct: v255,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v304, time: v303, didSend: v120, from: v302 } = txn5;
            
            ;
            const v305 = stdlib.addressEq(v237, v302);
            const v306 = stdlib.addressEq(v219, v302);
            const v307 = v305 ? true : v306;
            ;
            sim_r.txns.push({
              amt: v241,
              kind: 'from',
              to: v219,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v304, time: v303, didSend: v120, from: v302 } = txn5;
        ;
        const v305 = stdlib.addressEq(v237, v302);
        const v306 = stdlib.addressEq(v219, v302);
        const v307 = v305 ? true : v306;
        stdlib.assert(v307, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:83:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Aleese'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:41:35:application',
          fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:83:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Aleese'
          });
        
        return;
        
        }
      else {
        const {data: [v272], secs: v274, time: v273, didSend: v74, from: v271 } = txn4;
        ;
        const v275 = stdlib.addressEq(v237, v271);
        stdlib.assert(v275, {
          at: './index.rsh:82:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Aleese'
          });
        let v276;
        const v277 = stdlib.gt(v254, v272);
        if (v277) {
          const v278 = stdlib.sub(v254, v272);
          v276 = v278;
          }
        else {
          const v279 = stdlib.sub(v272, v254);
          v276 = v279;
          }
        const v280 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v281 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
        const v282 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v283 = v280 ? v281 : v282;
        const v284 = v283[stdlib.checkedBigNumberify('./index.rsh:86:32:array', stdlib.UInt_max, 0)];
        const v285 = v283[stdlib.checkedBigNumberify('./index.rsh:86:32:array', stdlib.UInt_max, 1)];
        const v286 = stdlib.mul(v284, v220);
        ;
        const v291 = stdlib.mul(v285, v220);
        ;
        stdlib.protect(ctc2, await interact.seeOutcome(v276), {
          at: './index.rsh:94:28:application',
          fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:30:function exp)'],
          msg: 'seeOutcome',
          who: 'Aleese'
          });
        
        return;
        }
      
      }
    
    }
  
  
  
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v210 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v211 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v214 = stdlib.gt(v211, stdlib.checkedBigNumberify('./index.rsh:47:24:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v214, {
    at: './index.rsh:47:15:application',
    fs: ['at ./index.rsh:45:15:application call to [unknown function] (defined at: ./index.rsh:45:19:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v215 = stdlib.protect(ctc0, await interact.pickWord(), {
    at: './index.rsh:48:45:application',
    fs: ['at ./index.rsh:45:15:application call to [unknown function] (defined at: ./index.rsh:45:19:function exp)'],
    msg: 'pickWord',
    who: 'Alice'
    });
  const v216 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:53:31:application',
    fs: ['at ./index.rsh:50:58:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:45:15:application call to [unknown function] (defined at: ./index.rsh:45:19:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v217 = stdlib.digest(ctc1, [v216, v215]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v211, v217, v210],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:54:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc0],
    pay: [v211, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v220, v221, v222], secs: v224, time: v223, didSend: v41, from: v219 } = txn1;
      
      sim_r.txns.push({
        amt: v220,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v233 = stdlib.add(v223, v222);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v220, v221, v222], secs: v224, time: v223, didSend: v41, from: v219 } = txn1;
  ;
  const v233 = stdlib.add(v223, v222);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v233],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v219, v220, v221, v222, v233],
      evt_cnt: 0,
      funcNum: 2,
      lct: v223,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v340, time: v339, didSend: v185, from: v338 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v220,
          kind: 'from',
          to: v219,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v340, time: v339, didSend: v185, from: v338 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:41:35:application',
      fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:64:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v239, time: v238, didSend: v50, from: v237 } = txn2;
    const v241 = stdlib.add(v220, v220);
    ;
    const v248 = stdlib.add(v238, v222);
    const txn3 = await (ctc.sendrecv({
      args: [v219, v220, v221, v222, v237, v241, v248, v216, v215],
      evt_cnt: 2,
      funcNum: 3,
      lct: v238,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:72:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v253, v254], secs: v256, time: v255, didSend: v60, from: v252 } = txn3;
        
        ;
        const v257 = stdlib.addressEq(v219, v252);
        ;
        const v258 = stdlib.digest(ctc1, [v253, v254]);
        const v259 = stdlib.digestEq(v221, v258);
        ;
        const v266 = stdlib.add(v255, v222);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v248],
      tys: [ctc4, ctc0, ctc2, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v219, v220, v221, v222, v237, v241, v248],
        evt_cnt: 0,
        funcNum: 4,
        lct: v238,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v322, time: v321, didSend: v154, from: v320 } = txn4;
          
          ;
          const v323 = stdlib.addressEq(v237, v320);
          const v324 = stdlib.addressEq(v219, v320);
          const v325 = v323 ? true : v324;
          ;
          sim_r.txns.push({
            amt: v241,
            kind: 'from',
            to: v237,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc2, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v322, time: v321, didSend: v154, from: v320 } = txn4;
      ;
      const v323 = stdlib.addressEq(v237, v320);
      const v324 = stdlib.addressEq(v219, v320);
      const v325 = v323 ? true : v324;
      stdlib.assert(v325, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:73:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:41:35:application',
        fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:73:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v253, v254], secs: v256, time: v255, didSend: v60, from: v252 } = txn3;
      ;
      const v257 = stdlib.addressEq(v219, v252);
      stdlib.assert(v257, {
        at: './index.rsh:72:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v258 = stdlib.digest(ctc1, [v253, v254]);
      const v259 = stdlib.digestEq(v221, v258);
      stdlib.assert(v259, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:74:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v266 = stdlib.add(v255, v222);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: ['time', v266],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v219, v220, v237, v241, v254, v266],
          evt_cnt: 0,
          funcNum: 6,
          lct: v255,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v304, time: v303, didSend: v120, from: v302 } = txn5;
            
            ;
            const v305 = stdlib.addressEq(v237, v302);
            const v306 = stdlib.addressEq(v219, v302);
            const v307 = v305 ? true : v306;
            ;
            sim_r.txns.push({
              amt: v241,
              kind: 'from',
              to: v219,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v304, time: v303, didSend: v120, from: v302 } = txn5;
        ;
        const v305 = stdlib.addressEq(v237, v302);
        const v306 = stdlib.addressEq(v219, v302);
        const v307 = v305 ? true : v306;
        stdlib.assert(v307, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:83:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:41:35:application',
          fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:83:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v272], secs: v274, time: v273, didSend: v74, from: v271 } = txn4;
        ;
        const v275 = stdlib.addressEq(v237, v271);
        stdlib.assert(v275, {
          at: './index.rsh:82:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        let v276;
        const v277 = stdlib.gt(v254, v272);
        if (v277) {
          const v278 = stdlib.sub(v254, v272);
          v276 = v278;
          }
        else {
          const v279 = stdlib.sub(v272, v254);
          v276 = v279;
          }
        const v280 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v281 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
        const v282 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v283 = v280 ? v281 : v282;
        const v284 = v283[stdlib.checkedBigNumberify('./index.rsh:86:32:array', stdlib.UInt_max, 0)];
        const v285 = v283[stdlib.checkedBigNumberify('./index.rsh:86:32:array', stdlib.UInt_max, 1)];
        const v286 = stdlib.mul(v284, v220);
        ;
        const v291 = stdlib.mul(v285, v220);
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v276), {
          at: './index.rsh:94:28:application',
          fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:30:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }
      
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAMAAEFAyAISFAGWHhwJgMBAAEBACI1ADEYQQPDKmRJIls1ASEFWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0klDEACEEkkDEABFkkhCAxAAFMhCBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABGG0rAywMgY0AyEJWw9ENANXKCAxABI0/zEAEhFEsSKyATQDIQZbsggjshA0/7IHs0IC5kgkNAESRDQESSISTDQCEhFEKGRJNQNJSSEEWzX/VyggNf4hB1s1/Uk1BRc1/IAEgaqazzT8FlCwMgY0AyEJWwxENP4xABJENP00/A1BAAo0/TT8CTX7QgAHNPw0/Qk1+4AQAAAAAAAAAAIAAAAAAAAAAIAQAAAAAAAAAAAAAAAAAAAAAjT7IhJNNfqxIrIBNPoiWzT/C7III7IQNANXACCyB7OxIrIBNPohBVs0/wuyCCOyEDT+sgezQgIqSYEEDEAAU0glNAESRDQESSISTDQCEhFEKGQpZFBJNQNXUCA1/4AEkSc087AyBjQDIQpbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMhC1uyCCOyEDT/sgezQgHQSCU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKVwAgNf8hBFs1/ldQIDX9IQtbNfxJNQVJIls1+yEFWzX6gASkpfCINPsWUDT6FlCwMgY0AyEKWwxENP8xABJENANXKCA0+xY0+hZQARJEMgY0AyEGWwg1+TT/NP4WUDT9UDT8FlA0+hZQNPkWUChLAVcAYGdIJDUBMgY1AkIBUUkjDEAAxEmBAgxAAD5IIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEHWw9EsSKyATQDIQRbsggjshA0A1cAILIHs0IA60gjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQRbNf5XKCA1/SEGWzX8gASai5F0sDIGNAMhB1sMRDT+SQg1+zT+iAD8MgY0/Ag1+jT/NP4WUDT9UDT8FlAxAFA0+xZQNPoWUChLAVcAf2cpSwFXfwFnSCU1ATIGNQJCAIdIIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/1cIIDX+gShbNf2ABJRdYRY0/xZQNP5QNP0WULCBoI0GiACHNP+IAIIyBjT9CDX8MQA0/xZQNP5QNP0WUDT8FlAoSwFXAFhnSCM1ATIGNQJCABsxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
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
                "name": "v220",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v221",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v222",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "name": "v220",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v221",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v222",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "name": "v253",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                "name": "v272",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
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
                "name": "v253",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
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
                "name": "v272",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200169538038062001695833981016040819052620000269162000268565b6000808055436003556040805160208101909152908152604080518351815260208085015180518284015290810151828401529091015160608201527f756807fe21484d54421b0dab51b98946711df868f9dc26ba5d9f68d9584b653d9060800160405180910390a1602082015151620000a4903414600762000161565b602082015160400151620000b99043620002ff565b81526040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d8801805151885280518901518752518c015184528c518252600198899055439098558a51808801989098529451878b0152925191860191909152519084015251828401528451808303909301835260c0909101909352805191926200015792600292909101906200018b565b5050505062000363565b81620001875760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001999062000326565b90600052602060002090601f016020900481019282620001bd576000855562000208565b82601f10620001d857805160ff191683800117855562000208565b8280016001018555821562000208579182015b8281111562000208578251825591602001919060010190620001eb565b50620002169291506200021a565b5090565b5b808211156200021657600081556001016200021b565b604051606081016001600160401b03811182821017156200026257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200027c57600080fd5b604080519081016001600160401b0381118282101715620002ad57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002c757600080fd5b620002d162000231565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082198211156200032157634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200033b57607f821691505b602082108114156200035d57634e487b7160e01b600052602260045260246000fd5b50919050565b61132280620003736000396000f3fe6080604052600436106100845760003560e01c8063832307571161005657806383230757146100ea578063a7661d54146100ff578063ab53f2c614610112578063ad2d91d114610135578063c79800371461014857005b80631e93b0f11461008d5780632c10a159146100b1578063552d7b8e146100c45780637eea518c146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004610fc6565b61015b565b61008b6100d2366004610fc6565b6103f0565b61008b6100e5366004610fc6565b61067a565b3480156100f657600080fd5b5060015461009e565b61008b61010d366004610fc6565b6107f6565b34801561011e57600080fd5b5061012761098f565b6040516100a8929190610fe9565b61008b610143366004611046565b610a2c565b61008b610156366004610fc6565b610ca6565b61016b6001600054146009610e3b565b6101858135158061017e57506001548235145b600a610e3b565b60008080556002805461019790611058565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390611058565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b505050505080602001905181019061022891906110a9565b9050610247604051806040016040528060008152602001600081525090565b61025882608001514310600b610e3b565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d183604051610287919061112c565b60405180910390a1602082015161029e908061116c565b815260208201516102b29034146008610e3b565b60608201516102c1904361116c565b81602001818152505061031c6040518060e0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b82516001600160a01b03168152602080840151818301526040808501518184015260608086015190840152336080840152835160a08401528382015160c0840152600360005543600155516103c59183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151908301526080808401519091169082015260a0828101519082015260c0918201519181019190915260e00190565b604051602081830303815290604052600290805190602001906103e9929190610e60565b5050505050565b610400600560005414601d610e3b565b61041a8135158061041357506001548235145b601e610e3b565b60008080556002805461042c90611058565b80601f016020809104026020016040519081016040528092919081815260200182805461045890611058565b80156104a55780601f1061047a576101008083540402835291602001916104a5565b820191906000526020600020905b81548152906001019060200180831161048857829003601f168201915b50505050508060200190518101906104bd9190611184565b90506104c7610ee4565b6104d88260a001514310601f610e3b565b6040805184358152602080860135908201527f4dadf1945cf19fcec67ccb7e31757a1ad0bc533fae9b7a76582523cb8bf28f4e910160405180910390a16105213415601b610e3b565b604082015161053c906001600160a01b03163314601c610e3b565b60808201516020840135101561056757608082015161056090602085013590611218565b815261057d565b608082015161057a906020850135611218565b81525b60208082018051600090819052905160029083018190526040840180519190915251909101528051156105b45780604001516105ba565b80602001515b606082018190528251602084015191516001600160a01b03909116916108fc916105e4919061122f565b6040518115909202916000818181858888f1935050505015801561060c573d6000803e3d6000fd5b5081604001516001600160a01b03166108fc8360200151836060015160200151610636919061122f565b6040518115909202916000818181858888f1935050505015801561065e573d6000803e3d6000fd5b506000808055600181905561067590600290610f5c565b505050565b61068a600160005414600d610e3b565b6106a48135158061069d57506001548235145b600e610e3b565b6000808055600280546106b690611058565b80601f01602080910402602001604051908101604052809291908181526020018280546106e290611058565b801561072f5780601f106107045761010080835404028352916020019161072f565b820191906000526020600020905b81548152906001019060200180831161071257829003601f168201915b505050505080602001905181019061074791906110a9565b905061075b8160800151431015600f610e3b565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e18260405161078a919061112c565b60405180910390a161079e3415600c610e3b565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156107db573d6000803e3d6000fd5b50600080805560018190556107f290600290610f5c565b5050565b6108066003600054146018610e3b565b6108208135158061081957506001548235145b6019610e3b565b60008080556002805461083290611058565b80601f016020809104026020016040519081016040528092919081815260200182805461085e90611058565b80156108ab5780601f10610880576101008083540402835291602001916108ab565b820191906000526020600020905b81548152906001019060200180831161088e57829003601f168201915b50505050508060200190518101906108c3919061124e565b90506108d78160c00151431015601a610e3b565b7fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d182604051610906919061112c565b60405180910390a161091a34156016610e3b565b608081015161094e906001600160a01b031633146109445781516001600160a01b03163314610947565b60015b6017610e3b565b80608001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f193505050501580156107db573d6000803e3d6000fd5b6000606060005460028080546109a490611058565b80601f01602080910402602001604051908101604052809291908181526020018280546109d090611058565b8015610a1d5780601f106109f257610100808354040283529160200191610a1d565b820191906000526020600020905b815481529060010190602001808311610a0057829003601f168201915b50505050509050915091509091565b610a3c6003600054146013610e3b565b610a5681351580610a4f57506001548235145b6014610e3b565b600080805560028054610a6890611058565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9490611058565b8015610ae15780601f10610ab657610100808354040283529160200191610ae1565b820191906000526020600020905b815481529060010190602001808311610ac457829003601f168201915b5050505050806020019051810190610af9919061124e565b9050610b116040518060200160405280600081525090565b610b228260c0015143106015610e3b565b604080518435815260208086013590820152848201358183015290517f84507ca2af78d13a2530a900a9f15ea561ca44c1932ac839ff12ff8719026e4a9181900360600190a1610b7434156010610e3b565b8151610b8c906001600160a01b031633146011610e3b565b60408051610bd891610bb291602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360400151146012610e3b565b6060820151610be7904361116c565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b039081168083526020808601518185019081526080808801518516604080880191825260a0808b01516060808b019182528d840135868c019081528c51848d019081526005600055436001558551998a019a909a52965193880193909352925190971690850152519083015251928101929092525160c082015260e0016103c5565b610cb66005600054146022610e3b565b610cd081351580610cc957506001548235145b6023610e3b565b600080805560028054610ce290611058565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0e90611058565b8015610d5b5780601f10610d3057610100808354040283529160200191610d5b565b820191906000526020600020905b815481529060010190602001808311610d3e57829003601f168201915b5050505050806020019051810190610d739190611184565b9050610d878160a001514310156024610e3b565b7f4df267dd1a05b613b05cdeee7d7e028d3842cff6f4e5a9d9dde2cdaf4156275982604051610db6919061112c565b60405180910390a1610dca34156020610e3b565b6040810151610dfe906001600160a01b03163314610df45781516001600160a01b03163314610df7565b60015b6021610e3b565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156107db573d6000803e3d6000fd5b816107f25760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610e6c90611058565b90600052602060002090601f016020900481019282610e8e5760008555610ed4565b82601f10610ea757805160ff1916838001178555610ed4565b82800160010185558215610ed4579182015b82811115610ed4578251825591602001919060010190610eb9565b50610ee0929150610f99565b5090565b604051806080016040528060008152602001610f13604051806040016040528060008152602001600081525090565b8152602001610f35604051806040016040528060008152602001600081525090565b8152602001610f57604051806040016040528060008152602001600081525090565b905290565b508054610f6890611058565b6000825580601f10610f78575050565b601f016020900490600052602060002090810190610f969190610f99565b50565b5b80821115610ee05760008155600101610f9a565b600060408284031215610fc057600080fd5b50919050565b600060408284031215610fd857600080fd5b610fe28383610fae565b9392505050565b82815260006020604081840152835180604085015260005b8181101561101d57858101830151858201606001528201611001565b8181111561102f576000606083870101525b50601f01601f191692909201606001949350505050565b600060608284031215610fc057600080fd5b600181811c9082168061106c57607f821691505b60208210811415610fc057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146110a457600080fd5b919050565b600060a082840312156110bb57600080fd5b60405160a0810181811067ffffffffffffffff821117156110ec57634e487b7160e01b600052604160045260246000fd5b6040526110f88361108d565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b8135815260408101602083013580151580821461114857600080fd5b806020850152505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561117f5761117f611156565b500190565b600060c0828403121561119657600080fd5b60405160c0810181811067ffffffffffffffff821117156111c757634e487b7160e01b600052604160045260246000fd5b6040526111d38361108d565b8152602083015160208201526111eb6040840161108d565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b60008282101561122a5761122a611156565b500390565b600081600019048311821515161561124957611249611156565b500290565b600060e0828403121561126057600080fd5b60405160e0810181811067ffffffffffffffff8211171561129157634e487b7160e01b600052604160045260246000fd5b60405261129d8361108d565b81526020830151602082015260408301516040820152606083015160608201526112c96080840161108d565b608082015260a083015160a082015260c083015160c0820152809150509291505056fea26469706673582212206361f89d68780d3bfc8bf17730134f4140fd818b4203b8888608979e823161f064736f6c634300080c0033`,
  BytecodeLen: 5781,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:56:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:64:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:65:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:73:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:75:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:83:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:91:13:after expr stmt semicolon',
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
