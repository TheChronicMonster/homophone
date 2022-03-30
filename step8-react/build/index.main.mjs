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
      1: [ctc0, ctc1, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1],
      4: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1]
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
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v232, v233], secs: v235, time: v234, didSend: v34, from: v231 } = txn1;
  ;
  const v244 = stdlib.add(v234, v233);
  stdlib.protect(ctc1, await interact.acceptWager(v232), {
    at: './index.rsh:55:29:application',
    fs: ['at ./index.rsh:54:16:application call to [unknown function] (defined at: ./index.rsh:54:20:function exp)'],
    msg: 'acceptWager',
    who: 'Aleese'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v231, v232, v233, v244],
    evt_cnt: 0,
    funcNum: 1,
    lct: v234,
    onlyIf: true,
    out_tys: [],
    pay: [v232, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v250, time: v249, didSend: v43, from: v248 } = txn2;
      
      const v252 = stdlib.add(v232, v232);
      sim_r.txns.push({
        amt: v232,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v244],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v231, v232, v233, v244],
      evt_cnt: 0,
      funcNum: 2,
      lct: v234,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v368, time: v367, didSend: v201, from: v366 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v232,
          kind: 'from',
          to: v231,
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
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v368, time: v367, didSend: v201, from: v366 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:41:35:application',
      fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:59:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Aleese'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v250, time: v249, didSend: v43, from: v248 } = txn2;
    const v252 = stdlib.add(v232, v232);
    ;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v260], secs: v262, time: v261, didSend: v58, from: v259 } = txn3;
    ;
    const v263 = stdlib.addressEq(v231, v259);
    stdlib.assert(v263, {
      at: './index.rsh:68:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Aleese'
      });
    const txn4 = await (ctc.sendrecv({
      args: [v231, v232, v233, v248, v252, v260],
      evt_cnt: 0,
      funcNum: 4,
      lct: v261,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:74:12:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v268, time: v267, didSend: v66, from: v266 } = txn4;
        
        ;
        const v269 = stdlib.addressEq(v248, v266);
        ;
        const v276 = stdlib.add(v267, v233);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v268, time: v267, didSend: v66, from: v266 } = txn4;
    ;
    const v269 = stdlib.addressEq(v248, v266);
    stdlib.assert(v269, {
      at: './index.rsh:74:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Aleese'
      });
    const v276 = stdlib.add(v267, v233);
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 5,
      out_tys: [ctc0, ctc0],
      timeoutAt: ['time', v276],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v231, v232, v233, v248, v252, v260, v276],
        evt_cnt: 0,
        funcNum: 6,
        lct: v267,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v350, time: v349, didSend: v170, from: v348 } = txn6;
          
          ;
          const v351 = stdlib.addressEq(v248, v348);
          const v352 = stdlib.addressEq(v231, v348);
          const v353 = v351 ? true : v352;
          ;
          sim_r.txns.push({
            amt: v252,
            kind: 'from',
            to: v248,
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
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v350, time: v349, didSend: v170, from: v348 } = txn6;
      ;
      const v351 = stdlib.addressEq(v248, v348);
      const v352 = stdlib.addressEq(v231, v348);
      const v353 = v351 ? true : v352;
      stdlib.assert(v353, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:83:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Aleese'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:41:35:application',
        fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:83:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Aleese'
        });
      
      return;
      
      }
    else {
      const {data: [v281, v282], secs: v284, time: v283, didSend: v76, from: v280 } = txn5;
      ;
      const v285 = stdlib.addressEq(v231, v280);
      stdlib.assert(v285, {
        at: './index.rsh:82:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Aleese'
        });
      const v286 = stdlib.digest(ctc3, [v281, v282]);
      const v287 = stdlib.digestEq(v260, v286);
      stdlib.assert(v287, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:84:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Aleese'
        });
      const v294 = stdlib.add(v283, v233);
      stdlib.protect(ctc1, await interact.seeWord(v282), {
        at: './index.rsh:88:25:application',
        fs: ['at ./index.rsh:87:16:application call to [unknown function] (defined at: ./index.rsh:87:20:function exp)'],
        msg: 'seeWord',
        who: 'Aleese'
        });
      const v298 = stdlib.protect(ctc0, await interact.guessWord(), {
        at: './index.rsh:89:57:application',
        fs: ['at ./index.rsh:87:16:application call to [unknown function] (defined at: ./index.rsh:87:20:function exp)'],
        msg: 'guessWord',
        who: 'Aleese'
        });
      
      const txn6 = await (ctc.sendrecv({
        args: [v231, v232, v248, v252, v282, v294, v298],
        evt_cnt: 1,
        funcNum: 7,
        lct: v283,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:92:12:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v300], secs: v302, time: v301, didSend: v90, from: v299 } = txn6;
          
          ;
          const v303 = stdlib.addressEq(v248, v299);
          ;
          let v304;
          const v305 = stdlib.gt(v282, v300);
          if (v305) {
            const v306 = stdlib.sub(v282, v300);
            v304 = v306;
            }
          else {
            const v307 = stdlib.sub(v300, v282);
            v304 = v307;
            }
          const v308 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
          const v309 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
          const v310 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v311 = v308 ? v309 : v310;
          const v312 = v311[stdlib.checkedBigNumberify('./index.rsh:96:32:array', stdlib.UInt_max, 0)];
          const v313 = v311[stdlib.checkedBigNumberify('./index.rsh:96:32:array', stdlib.UInt_max, 1)];
          const v314 = stdlib.mul(v312, v232);
          sim_r.txns.push({
            amt: v314,
            kind: 'from',
            to: v231,
            tok: undefined /* Nothing */
            });
          const v319 = stdlib.mul(v313, v232);
          sim_r.txns.push({
            amt: v319,
            kind: 'from',
            to: v248,
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
        timeoutAt: ['time', v294],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn6.didTimeout) {
        const txn7 = await (ctc.sendrecv({
          args: [v231, v232, v248, v252, v282, v294],
          evt_cnt: 0,
          funcNum: 8,
          lct: v283,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v332, time: v331, didSend: v136, from: v330 } = txn7;
            
            ;
            const v333 = stdlib.addressEq(v248, v330);
            const v334 = stdlib.addressEq(v231, v330);
            const v335 = v333 ? true : v334;
            ;
            sim_r.txns.push({
              amt: v252,
              kind: 'from',
              to: v231,
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
        const {data: [], secs: v332, time: v331, didSend: v136, from: v330 } = txn7;
        ;
        const v333 = stdlib.addressEq(v248, v330);
        const v334 = stdlib.addressEq(v231, v330);
        const v335 = v333 ? true : v334;
        stdlib.assert(v335, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:93:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Aleese'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:41:35:application',
          fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:93:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Aleese'
          });
        
        return;
        
        }
      else {
        const {data: [v300], secs: v302, time: v301, didSend: v90, from: v299 } = txn6;
        ;
        const v303 = stdlib.addressEq(v248, v299);
        stdlib.assert(v303, {
          at: './index.rsh:92:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Aleese'
          });
        let v304;
        const v305 = stdlib.gt(v282, v300);
        if (v305) {
          const v306 = stdlib.sub(v282, v300);
          v304 = v306;
          }
        else {
          const v307 = stdlib.sub(v300, v282);
          v304 = v307;
          }
        const v308 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v309 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
        const v310 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v311 = v308 ? v309 : v310;
        const v312 = v311[stdlib.checkedBigNumberify('./index.rsh:96:32:array', stdlib.UInt_max, 0)];
        const v313 = v311[stdlib.checkedBigNumberify('./index.rsh:96:32:array', stdlib.UInt_max, 1)];
        const v314 = stdlib.mul(v312, v232);
        ;
        const v319 = stdlib.mul(v313, v232);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v304), {
          at: './index.rsh:104:28:application',
          fs: ['at ./index.rsh:103:9:application call to [unknown function] (defined at: ./index.rsh:103:30:function exp)'],
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
  
  
  const v226 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v227 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v230 = stdlib.gt(v227, stdlib.checkedBigNumberify('./index.rsh:47:24:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v230, {
    at: './index.rsh:47:15:application',
    fs: ['at ./index.rsh:45:15:application call to [unknown function] (defined at: ./index.rsh:45:19:function exp)'],
    msg: null,
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v227, v226],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:50:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v227, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v232, v233], secs: v235, time: v234, didSend: v34, from: v231 } = txn1;
      
      sim_r.txns.push({
        amt: v232,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v244 = stdlib.add(v234, v233);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v232, v233], secs: v235, time: v234, didSend: v34, from: v231 } = txn1;
  ;
  const v244 = stdlib.add(v234, v233);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v244],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v231, v232, v233, v244],
      evt_cnt: 0,
      funcNum: 2,
      lct: v234,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v368, time: v367, didSend: v201, from: v366 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v232,
          kind: 'from',
          to: v231,
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
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v368, time: v367, didSend: v201, from: v366 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:41:35:application',
      fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:59:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v250, time: v249, didSend: v43, from: v248 } = txn2;
    const v252 = stdlib.add(v232, v232);
    ;
    const v255 = stdlib.protect(ctc0, await interact.pickWord(), {
      at: './index.rsh:63:45:application',
      fs: ['at ./index.rsh:62:15:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
      msg: 'pickWord',
      who: 'Alice'
      });
    const v256 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:53:31:application',
      fs: ['at ./index.rsh:65:58:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:62:15:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v257 = stdlib.digest(ctc1, [v256, v255]);
    
    const txn3 = await (ctc.sendrecv({
      args: [v231, v232, v233, v248, v252, v257],
      evt_cnt: 1,
      funcNum: 3,
      lct: v249,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:68:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v260], secs: v262, time: v261, didSend: v58, from: v259 } = txn3;
        
        ;
        const v263 = stdlib.addressEq(v231, v259);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v260], secs: v262, time: v261, didSend: v58, from: v259 } = txn3;
    ;
    const v263 = stdlib.addressEq(v231, v259);
    stdlib.assert(v263, {
      at: './index.rsh:68:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v268, time: v267, didSend: v66, from: v266 } = txn4;
    ;
    const v269 = stdlib.addressEq(v248, v266);
    stdlib.assert(v269, {
      at: './index.rsh:74:12:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v276 = stdlib.add(v267, v233);
    const txn5 = await (ctc.sendrecv({
      args: [v231, v232, v233, v248, v252, v260, v276, v256, v255],
      evt_cnt: 2,
      funcNum: 5,
      lct: v267,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:82:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v281, v282], secs: v284, time: v283, didSend: v76, from: v280 } = txn5;
        
        ;
        const v285 = stdlib.addressEq(v231, v280);
        ;
        const v286 = stdlib.digest(ctc1, [v281, v282]);
        const v287 = stdlib.digestEq(v260, v286);
        ;
        const v294 = stdlib.add(v283, v233);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v276],
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v231, v232, v233, v248, v252, v260, v276],
        evt_cnt: 0,
        funcNum: 6,
        lct: v267,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v350, time: v349, didSend: v170, from: v348 } = txn6;
          
          ;
          const v351 = stdlib.addressEq(v248, v348);
          const v352 = stdlib.addressEq(v231, v348);
          const v353 = v351 ? true : v352;
          ;
          sim_r.txns.push({
            amt: v252,
            kind: 'from',
            to: v248,
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
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v350, time: v349, didSend: v170, from: v348 } = txn6;
      ;
      const v351 = stdlib.addressEq(v248, v348);
      const v352 = stdlib.addressEq(v231, v348);
      const v353 = v351 ? true : v352;
      stdlib.assert(v353, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:83:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:41:35:application',
        fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:83:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v281, v282], secs: v284, time: v283, didSend: v76, from: v280 } = txn5;
      ;
      const v285 = stdlib.addressEq(v231, v280);
      stdlib.assert(v285, {
        at: './index.rsh:82:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v286 = stdlib.digest(ctc1, [v281, v282]);
      const v287 = stdlib.digestEq(v260, v286);
      stdlib.assert(v287, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:84:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v294 = stdlib.add(v283, v233);
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc0],
        timeoutAt: ['time', v294],
        waitIfNotPresent: false
        }));
      if (txn6.didTimeout) {
        const txn7 = await (ctc.sendrecv({
          args: [v231, v232, v248, v252, v282, v294],
          evt_cnt: 0,
          funcNum: 8,
          lct: v283,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v332, time: v331, didSend: v136, from: v330 } = txn7;
            
            ;
            const v333 = stdlib.addressEq(v248, v330);
            const v334 = stdlib.addressEq(v231, v330);
            const v335 = v333 ? true : v334;
            ;
            sim_r.txns.push({
              amt: v252,
              kind: 'from',
              to: v231,
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
        const {data: [], secs: v332, time: v331, didSend: v136, from: v330 } = txn7;
        ;
        const v333 = stdlib.addressEq(v248, v330);
        const v334 = stdlib.addressEq(v231, v330);
        const v335 = v333 ? true : v334;
        stdlib.assert(v335, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:93:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:41:35:application',
          fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:93:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v300], secs: v302, time: v301, didSend: v90, from: v299 } = txn6;
        ;
        const v303 = stdlib.addressEq(v248, v299);
        stdlib.assert(v303, {
          at: './index.rsh:92:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        let v304;
        const v305 = stdlib.gt(v282, v300);
        if (v305) {
          const v306 = stdlib.sub(v282, v300);
          v304 = v306;
          }
        else {
          const v307 = stdlib.sub(v300, v282);
          v304 = v307;
          }
        const v308 = stdlib.eq(v304, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v309 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
        const v310 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v311 = v308 ? v309 : v310;
        const v312 = v311[stdlib.checkedBigNumberify('./index.rsh:96:32:array', stdlib.UInt_max, 0)];
        const v313 = v311[stdlib.checkedBigNumberify('./index.rsh:96:32:array', stdlib.UInt_max, 1)];
        const v314 = stdlib.mul(v312, v232);
        ;
        const v319 = stdlib.mul(v313, v232);
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v304), {
          at: './index.rsh:104:28:application',
          fs: ['at ./index.rsh:103:9:application call to [unknown function] (defined at: ./index.rsh:103:30:function exp)'],
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
  appApproval: `BiANAAEIIFAFBygEA1h4MCYDAQABAQAiNQAxGEEElSpkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khCAxAApRJgQYMQAFvSSEGDEABFEkkDEAAUyQSRCEGNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEF/zbLrAyBjQDIQpbD0Q0A1coIDEAEjT/MQASEUSxIrIBNAOBSFuyCCOyEDT/sgezQgOwSCEGNAESRDQESSISTDQCEhFEKGRJNQNJSSVbNf9XKCA1/iEEWzX9STUFFzX8gARxqLGjNPwWULAyBjQDIQpbDEQ0/jEAEkQ0/TT8DUEACjT9NPwJNftCAAc0/DT9CTX7gBAAAAAAAAAAAgAAAAAAAAAAgBAAAAAAAAAAAAAAAAAAAAACNPsiEk01+rEisgE0+iJbNP8LsggjshA0A1cAILIHs7EisgE0+iRbNP8LsggjshA0/rIHs0IC9UghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABGG0rAywMgY0AyELWw9ENP8xABI0A1cAIDEAEhFEsSKyATQDIQRbsggjshA0/7IHs0ICoUkhBQxAAJpIIQU0ARJENARJIhJMNAISEUQoZClkUEk1A0lKVwAgNf8lWzX+VzAgNf0hBFs1/Ek1BUkiWzX7JFs1+oAEs1H3jzT7FlA0+hZQsDIGNAMhC1sMRDT/MQASRDQDV1ggNPsWNPoWUAESRDIGNAMhB1sINfk0/zT+FlA0/VA0/BZQNPoWUDT5FlAoSwFXAGBnSCEGNQEyBjUCQgIcSCEINAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yVbNf4hB1s1/VcwIDX8IQRbNftXWCA1+oAEkSc087A0/DEAEkQyBjT9CDX5NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQKEsBVwB/ZylLAVd/AWdIIQU1ATIGNQJCAZ9JgQIMQACySSEJDEAAbkghCTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8lWzX+IQdbNf1XMCA1/CEEWzX7STUFNfqABBPu6lE0+lCwNP8xABJENP80/hZQNP0WUDT8UDT7FlA0+lAoSwFXAHhnSCEINQEyBjUCQgEjSCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDFsPRLEisgE0AyVbsggjshA0A1cAILIHs0IAykkjDEAAZUgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JVs1/iEHWzX9gASai5F0sDIGNAMhDFsMRDT+SQg1/DT+iADcNP80/hZQNP0WUDEAUDT8FlAoSwFXAFhnSCEJNQEyBjUCQgB7SCI0ARJENARJIhJMNAISEURJNQVJIls1/yRbNf6ABKzRH8M0/xZQNP4WULCBoI0GiACFNP+IAIAyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCABwxGSEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v232",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v233",
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
                "name": "v232",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v233",
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
                "name": "v260",
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
                "name": "v300",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
    "name": "_reach_e8",
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
                "name": "v260",
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
                "name": "v281",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v282",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
                "name": "v300",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
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
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001b8e38038062001b8e833981016040819052620000269162000248565b600080805543600355604080516020810190915290815260408051835181526020808501518051828401520151918101919091527f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9060600160405180910390a16020820151516200009c903414600762000141565b6020808301510151620000b09043620002a8565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013792600292909101906200016b565b505050506200030c565b81620001675760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017990620002cf565b90600052602060002090601f0160209004810192826200019d5760008555620001e8565b82601f10620001b857805160ff1916838001178555620001e8565b82800160010185558215620001e8579182015b82811115620001e8578251825591602001919060010190620001cb565b50620001f6929150620001fa565b5090565b5b80821115620001f65760008155600101620001fb565b604080519081016001600160401b03811182821017156200024257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025c57600080fd5b6200026662000211565b835181526040601f19830112156200027d57600080fd5b6200028762000211565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002ca57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e457607f821691505b602082108114156200030657634e487b7160e01b600052602260045260246000fd5b50919050565b611872806200031c6000396000f3fe60806040526004361061009a5760003560e01c8063a7661d5411610061578063a7661d5414610115578063ab53f2c614610128578063aff5115f1461014b578063c79800371461015e578063e533a29d14610171578063f4cedab01461018457005b80631e93b0f1146100a35780632c10a159146100c75780636cec5d46146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611423565b610197565b6100a16100e8366004611423565b6103d8565b6100a16100fb366004611423565b610662565b34801561010c57600080fd5b506001546100b4565b6100a1610123366004611423565b6107de565b34801561013457600080fd5b5061013d610a15565b6040516100be929190611446565b6100a16101593660046114a3565b610ab2565b6100a161016c366004611423565b610d34565b6100a161017f366004611423565b610ecd565b6100a1610192366004611423565b611062565b6101a76001600054146009611298565b6101c1813515806101ba57506001548235145b600a611298565b6000808055600280546101d3906114b5565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906114b5565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050806020019051810190610264919061153d565b905061027c6040518060200160405280600081525090565b61028d82606001514310600b611298565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1836040516102bc91906115b6565b60405180910390a160208201516102d390806115f6565b815260208201516102e79034146008611298565b61032b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b82516001600160a01b03168152602080840151818301526040808501518184015233606084015283516080840152600360005543600155516103ad9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b604051602081830303815290604052600290805190602001906103d19291906112bd565b5050505050565b6103e86007600054146025611298565b610402813515806103fb57506001548235145b6026611298565b600080805560028054610414906114b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610440906114b5565b801561048d5780601f106104625761010080835404028352916020019161048d565b820191906000526020600020905b81548152906001019060200180831161047057829003601f168201915b50505050508060200190518101906104a5919061160e565b90506104af611341565b6104c08260a0015143106027611298565b6040805184358152602080860135908201527f3a2da3b5f0d16a5582060fc46cee8868eca4f1b43cc1da4ad78f574e7785f343910160405180910390a161050934156023611298565b6040820151610524906001600160a01b031633146024611298565b60808201516020840135101561054f57608082015161054890602085013590611676565b8152610565565b6080820151610562906020850135611676565b81525b602080820180516000908190529051600290830181905260408401805191909152519091015280511561059c5780604001516105a2565b80602001515b606082018190528251602084015191516001600160a01b03909116916108fc916105cc919061168d565b6040518115909202916000818181858888f193505050501580156105f4573d6000803e3d6000fd5b5081604001516001600160a01b03166108fc836020015183606001516020015161061e919061168d565b6040518115909202916000818181858888f19350505050158015610646573d6000803e3d6000fd5b506000808055600181905561065d906002906113b9565b505050565b610672600160005414600d611298565b61068c8135158061068557506001548235145b600e611298565b60008080556002805461069e906114b5565b80601f01602080910402602001604051908101604052809291908181526020018280546106ca906114b5565b80156107175780601f106106ec57610100808354040283529160200191610717565b820191906000526020600020905b8154815290600101906020018083116106fa57829003601f168201915b505050505080602001905181019061072f919061153d565b90506107438160600151431015600f611298565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e18260405161077291906115b6565b60405180910390a16107863415600c611298565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156107c3573d6000803e3d6000fd5b50600080805560018190556107da906002906113b9565b5050565b6107ee6004600054146016611298565b6108088135158061080157506001548235145b6017611298565b60008080556002805461081a906114b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610846906114b5565b80156108935780601f1061086857610100808354040283529160200191610893565b820191906000526020600020905b81548152906001019060200180831161087657829003601f168201915b50505050508060200190518101906108ab91906116ac565b90506108c36040518060200160405280600081525090565b7fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1836040516108f291906115b6565b60405180910390a161090634156014611298565b6060820151610921906001600160a01b031633146015611298565b604082015161093090436115f6565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b0190815260a0808e0151818d019081528d5160c0808f0191825260056000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945194830194909452925191810191909152905160e0820152610100016103ad565b600060606000546002808054610a2a906114b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610a56906114b5565b8015610aa35780601f10610a7857610100808354040283529160200191610aa3565b820191906000526020600020905b815481529060010190602001808311610a8657829003601f168201915b50505050509050915091509091565b610ac2600560005414601b611298565b610adc81351580610ad557506001548235145b601c611298565b600080805560028054610aee906114b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610b1a906114b5565b8015610b675780601f10610b3c57610100808354040283529160200191610b67565b820191906000526020600020905b815481529060010190602001808311610b4a57829003601f168201915b5050505050806020019051810190610b7f9190611714565b9050610b976040518060200160405280600081525090565b610ba88260c001514310601d611298565b604080518435815260208086013590820152848201358183015290517f1eaeac47a27af9fa8e7714970bbba76871db160f28e5ce38b7ce799029c34f759181900360600190a1610bfa34156018611298565b8151610c12906001600160a01b031633146019611298565b60408051610c5e91610c3891602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114601a611298565b6040820151610c6d90436115f6565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b03908116808352602080860151818501908152606080880151851660408088019182526080808b0151848a019081528c830135828b019081528b5160a0808d019182526007600055436001558551998a019a909a529651938801939093529251909716928501929092525194830194909452925191810191909152905160c082015260e0016103ad565b610d446005600054146020611298565b610d5e81351580610d5757506001548235145b6021611298565b600080805560028054610d70906114b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9c906114b5565b8015610de95780601f10610dbe57610100808354040283529160200191610de9565b820191906000526020600020905b815481529060010190602001808311610dcc57829003601f168201915b5050505050806020019051810190610e019190611714565b9050610e158160c001514310156022611298565b7f4df267dd1a05b613b05cdeee7d7e028d3842cff6f4e5a9d9dde2cdaf4156275982604051610e4491906115b6565b60405180910390a1610e583415601e611298565b6060810151610e8c906001600160a01b03163314610e825781516001600160a01b03163314610e85565b60015b601f611298565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156107c3573d6000803e3d6000fd5b610edd600760005414602a611298565b610ef781351580610ef057506001548235145b602b611298565b600080805560028054610f09906114b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610f35906114b5565b8015610f825780601f10610f5757610100808354040283529160200191610f82565b820191906000526020600020905b815481529060010190602001808311610f6557829003601f168201915b5050505050806020019051810190610f9a919061160e565b9050610fae8160a00151431015602c611298565b7fb9845e39b4c5715a32bc04872bfe1723e638b66042817fdde0a44e5b0466b6dc82604051610fdd91906115b6565b60405180910390a1610ff134156028611298565b6040810151611025906001600160a01b0316331461101b5781516001600160a01b0316331461101e565b60015b6029611298565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156107c3573d6000803e3d6000fd5b6110726003600054146012611298565b61108c8135158061108557506001548235145b6013611298565b60008080556002805461109e906114b5565b80601f01602080910402602001604051908101604052809291908181526020018280546110ca906114b5565b80156111175780601f106110ec57610100808354040283529160200191611117565b820191906000526020600020905b8154815290600101906020018083116110fa57829003601f168201915b505050505080602001905181019061112f91906117b2565b6040805184358152602080860135908201529192507fb586755d90ded52ac0645858b09d27f42fbe59c32320b3b1d760dd0397cb5714910160405180910390a161117b34156010611298565b8051611193906001600160a01b031633146011611298565b6111de6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015181870190815260608089015187168189019081526080808b0151818b019081528c88013560a0808d019182526004600055436001558751998a019a909a529651958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906112929291906112bd565b50505050565b816107da5760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546112c9906114b5565b90600052602060002090601f0160209004810192826112eb5760008555611331565b82601f1061130457805160ff1916838001178555611331565b82800160010185558215611331579182015b82811115611331578251825591602001919060010190611316565b5061133d9291506113f6565b5090565b604051806080016040528060008152602001611370604051806040016040528060008152602001600081525090565b8152602001611392604051806040016040528060008152602001600081525090565b81526020016113b4604051806040016040528060008152602001600081525090565b905290565b5080546113c5906114b5565b6000825580601f106113d5575050565b601f0160209004906000526020600020908101906113f391906113f6565b50565b5b8082111561133d57600081556001016113f7565b60006040828403121561141d57600080fd5b50919050565b60006040828403121561143557600080fd5b61143f838361140b565b9392505050565b82815260006020604081840152835180604085015260005b8181101561147a5785810183015185820160600152820161145e565b8181111561148c576000606083870101525b50601f01601f191692909201606001949350505050565b60006060828403121561141d57600080fd5b600181811c908216806114c957607f821691505b6020821081141561141d57634e487b7160e01b600052602260045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561151b57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461153857600080fd5b919050565b60006080828403121561154f57600080fd5b6040516080810181811067ffffffffffffffff8211171561158057634e487b7160e01b600052604160045260246000fd5b60405261158c83611521565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b813581526040810160208301358015158082146115d257600080fd5b806020850152505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611609576116096115e0565b500190565b600060c0828403121561162057600080fd5b6116286114ea565b61163183611521565b81526020830151602082015261164960408401611521565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600082821015611688576116886115e0565b500390565b60008160001904831182151516156116a7576116a76115e0565b500290565b600060c082840312156116be57600080fd5b6116c66114ea565b6116cf83611521565b815260208301516020820152604083015160408201526116f160608401611521565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e0828403121561172657600080fd5b60405160e0810181811067ffffffffffffffff8211171561175757634e487b7160e01b600052604160045260246000fd5b60405261176383611521565b8152602083015160208201526040830151604082015261178560608401611521565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600060a082840312156117c457600080fd5b60405160a0810181811067ffffffffffffffff821117156117f557634e487b7160e01b600052604160045260246000fd5b60405261180183611521565b8152602083015160208201526040830151604082015261182360608401611521565b606082015260808301516080820152809150509291505056fea264697066735822122003bb4b02af78ecd57a0cee8253d3ce11ce5072b31afaa98ad65dcc14db1b19a164736f6c634300080c0033`,
  BytecodeLen: 7054,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:52:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:59:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:60:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:69:13:after expr stmt semicolon',
    fs: [],
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
    fs: ['at ./index.rsh:83:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:85:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:93:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:101:13:after expr stmt semicolon',
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
