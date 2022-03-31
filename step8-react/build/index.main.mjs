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
      4: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      6: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1]
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
  const {data: [v224, v225], secs: v227, time: v226, didSend: v34, from: v223 } = txn1;
  ;
  const v236 = stdlib.add(v226, v225);
  stdlib.protect(ctc1, await interact.acceptWager(v224), {
    at: './index.rsh:55:29:application',
    fs: ['at ./index.rsh:54:16:application call to [unknown function] (defined at: ./index.rsh:54:20:function exp)'],
    msg: 'acceptWager',
    who: 'Aleese'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v223, v224, v225, v236],
    evt_cnt: 0,
    funcNum: 1,
    lct: v226,
    onlyIf: true,
    out_tys: [],
    pay: [v224, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v242, time: v241, didSend: v43, from: v240 } = txn2;
      
      const v244 = stdlib.add(v224, v224);
      sim_r.txns.push({
        amt: v224,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v236],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v223, v224, v225, v236],
      evt_cnt: 0,
      funcNum: 2,
      lct: v226,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v354, time: v353, didSend: v193, from: v352 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v224,
          kind: 'from',
          to: v223,
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
    const {data: [], secs: v354, time: v353, didSend: v193, from: v352 } = txn3;
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
    const {data: [], secs: v242, time: v241, didSend: v43, from: v240 } = txn2;
    const v244 = stdlib.add(v224, v224);
    ;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v252], secs: v254, time: v253, didSend: v58, from: v251 } = txn3;
    ;
    const v255 = stdlib.addressEq(v223, v251);
    stdlib.assert(v255, {
      at: './index.rsh:68:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Aleese'
      });
    const v262 = stdlib.add(v253, v225);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 4,
      out_tys: [ctc0, ctc0],
      timeoutAt: ['time', v262],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v223, v224, v225, v240, v244, v252, v262],
        evt_cnt: 0,
        funcNum: 5,
        lct: v253,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v336, time: v335, didSend: v162, from: v334 } = txn5;
          
          ;
          const v337 = stdlib.addressEq(v240, v334);
          const v338 = stdlib.addressEq(v223, v334);
          const v339 = v337 ? true : v338;
          ;
          sim_r.txns.push({
            amt: v244,
            kind: 'from',
            to: v240,
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
      const {data: [], secs: v336, time: v335, didSend: v162, from: v334 } = txn5;
      ;
      const v337 = stdlib.addressEq(v240, v334);
      const v338 = stdlib.addressEq(v223, v334);
      const v339 = v337 ? true : v338;
      stdlib.assert(v339, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:77:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Aleese'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:41:35:application',
        fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:77:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Aleese'
        });
      
      return;
      
      }
    else {
      const {data: [v267, v268], secs: v270, time: v269, didSend: v68, from: v266 } = txn4;
      ;
      const v271 = stdlib.addressEq(v223, v266);
      stdlib.assert(v271, {
        at: './index.rsh:76:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Aleese'
        });
      const v272 = stdlib.digest(ctc3, [v267, v268]);
      const v273 = stdlib.digestEq(v252, v272);
      stdlib.assert(v273, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:78:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Aleese'
        });
      const v280 = stdlib.add(v269, v225);
      stdlib.protect(ctc1, await interact.seeWord(v268), {
        at: './index.rsh:82:25:application',
        fs: ['at ./index.rsh:81:16:application call to [unknown function] (defined at: ./index.rsh:81:20:function exp)'],
        msg: 'seeWord',
        who: 'Aleese'
        });
      const v284 = stdlib.protect(ctc0, await interact.guessWord(), {
        at: './index.rsh:83:57:application',
        fs: ['at ./index.rsh:81:16:application call to [unknown function] (defined at: ./index.rsh:81:20:function exp)'],
        msg: 'guessWord',
        who: 'Aleese'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v223, v224, v240, v244, v268, v280, v284],
        evt_cnt: 1,
        funcNum: 6,
        lct: v269,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:86:12:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v286], secs: v288, time: v287, didSend: v82, from: v285 } = txn5;
          
          ;
          const v289 = stdlib.addressEq(v240, v285);
          ;
          let v290;
          const v291 = stdlib.gt(v268, v286);
          if (v291) {
            const v292 = stdlib.sub(v268, v286);
            v290 = v292;
            }
          else {
            const v293 = stdlib.sub(v286, v268);
            v290 = v293;
            }
          const v294 = stdlib.eq(v290, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
          const v295 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
          const v296 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v297 = v294 ? v295 : v296;
          const v298 = v297[stdlib.checkedBigNumberify('./index.rsh:90:32:array', stdlib.UInt_max, 0)];
          const v299 = v297[stdlib.checkedBigNumberify('./index.rsh:90:32:array', stdlib.UInt_max, 1)];
          const v300 = stdlib.mul(v298, v224);
          sim_r.txns.push({
            amt: v300,
            kind: 'from',
            to: v223,
            tok: undefined /* Nothing */
            });
          const v305 = stdlib.mul(v299, v224);
          sim_r.txns.push({
            amt: v305,
            kind: 'from',
            to: v240,
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
        timeoutAt: ['time', v280],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v223, v224, v240, v244, v268, v280],
          evt_cnt: 0,
          funcNum: 7,
          lct: v269,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v318, time: v317, didSend: v128, from: v316 } = txn6;
            
            ;
            const v319 = stdlib.addressEq(v240, v316);
            const v320 = stdlib.addressEq(v223, v316);
            const v321 = v319 ? true : v320;
            ;
            sim_r.txns.push({
              amt: v244,
              kind: 'from',
              to: v223,
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
        const {data: [], secs: v318, time: v317, didSend: v128, from: v316 } = txn6;
        ;
        const v319 = stdlib.addressEq(v240, v316);
        const v320 = stdlib.addressEq(v223, v316);
        const v321 = v319 ? true : v320;
        stdlib.assert(v321, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:87:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Aleese'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:41:35:application',
          fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:87:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Aleese'
          });
        
        return;
        
        }
      else {
        const {data: [v286], secs: v288, time: v287, didSend: v82, from: v285 } = txn5;
        ;
        const v289 = stdlib.addressEq(v240, v285);
        stdlib.assert(v289, {
          at: './index.rsh:86:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Aleese'
          });
        let v290;
        const v291 = stdlib.gt(v268, v286);
        if (v291) {
          const v292 = stdlib.sub(v268, v286);
          v290 = v292;
          }
        else {
          const v293 = stdlib.sub(v286, v268);
          v290 = v293;
          }
        const v294 = stdlib.eq(v290, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v295 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
        const v296 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v297 = v294 ? v295 : v296;
        const v298 = v297[stdlib.checkedBigNumberify('./index.rsh:90:32:array', stdlib.UInt_max, 0)];
        const v299 = v297[stdlib.checkedBigNumberify('./index.rsh:90:32:array', stdlib.UInt_max, 1)];
        const v300 = stdlib.mul(v298, v224);
        ;
        const v305 = stdlib.mul(v299, v224);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v290), {
          at: './index.rsh:98:28:application',
          fs: ['at ./index.rsh:97:9:application call to [unknown function] (defined at: ./index.rsh:97:30:function exp)'],
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
  
  
  const v218 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v219 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v222 = stdlib.gt(v219, stdlib.checkedBigNumberify('./index.rsh:47:24:decimal', stdlib.UInt_max, 0));
  stdlib.assert(v222, {
    at: './index.rsh:47:15:application',
    fs: ['at ./index.rsh:45:15:application call to [unknown function] (defined at: ./index.rsh:45:19:function exp)'],
    msg: null,
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v219, v218],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:50:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v219, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v224, v225], secs: v227, time: v226, didSend: v34, from: v223 } = txn1;
      
      sim_r.txns.push({
        amt: v224,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v236 = stdlib.add(v226, v225);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v224, v225], secs: v227, time: v226, didSend: v34, from: v223 } = txn1;
  ;
  const v236 = stdlib.add(v226, v225);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v236],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v223, v224, v225, v236],
      evt_cnt: 0,
      funcNum: 2,
      lct: v226,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v354, time: v353, didSend: v193, from: v352 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v224,
          kind: 'from',
          to: v223,
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
    const {data: [], secs: v354, time: v353, didSend: v193, from: v352 } = txn3;
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
    const {data: [], secs: v242, time: v241, didSend: v43, from: v240 } = txn2;
    const v244 = stdlib.add(v224, v224);
    ;
    const v247 = stdlib.protect(ctc0, await interact.pickWord(), {
      at: './index.rsh:63:45:application',
      fs: ['at ./index.rsh:62:15:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
      msg: 'pickWord',
      who: 'Alice'
      });
    const v248 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:53:31:application',
      fs: ['at ./index.rsh:65:58:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:62:15:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
      msg: 'random',
      who: 'Alice'
      });
    const v249 = stdlib.digest(ctc1, [v248, v247]);
    
    const txn3 = await (ctc.sendrecv({
      args: [v223, v224, v225, v240, v244, v249],
      evt_cnt: 1,
      funcNum: 3,
      lct: v241,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:68:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v252], secs: v254, time: v253, didSend: v58, from: v251 } = txn3;
        
        ;
        const v255 = stdlib.addressEq(v223, v251);
        ;
        const v262 = stdlib.add(v253, v225);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v252], secs: v254, time: v253, didSend: v58, from: v251 } = txn3;
    ;
    const v255 = stdlib.addressEq(v223, v251);
    stdlib.assert(v255, {
      at: './index.rsh:68:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v262 = stdlib.add(v253, v225);
    const txn4 = await (ctc.sendrecv({
      args: [v223, v224, v225, v240, v244, v252, v262, v248, v247],
      evt_cnt: 2,
      funcNum: 4,
      lct: v253,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:76:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v267, v268], secs: v270, time: v269, didSend: v68, from: v266 } = txn4;
        
        ;
        const v271 = stdlib.addressEq(v223, v266);
        ;
        const v272 = stdlib.digest(ctc1, [v267, v268]);
        const v273 = stdlib.digestEq(v252, v272);
        ;
        const v280 = stdlib.add(v269, v225);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v262],
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v223, v224, v225, v240, v244, v252, v262],
        evt_cnt: 0,
        funcNum: 5,
        lct: v253,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v336, time: v335, didSend: v162, from: v334 } = txn5;
          
          ;
          const v337 = stdlib.addressEq(v240, v334);
          const v338 = stdlib.addressEq(v223, v334);
          const v339 = v337 ? true : v338;
          ;
          sim_r.txns.push({
            amt: v244,
            kind: 'from',
            to: v240,
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
      const {data: [], secs: v336, time: v335, didSend: v162, from: v334 } = txn5;
      ;
      const v337 = stdlib.addressEq(v240, v334);
      const v338 = stdlib.addressEq(v223, v334);
      const v339 = v337 ? true : v338;
      stdlib.assert(v339, {
        at: 'reach standard library:189:11:dot',
        fs: ['at ./index.rsh:77:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:41:35:application',
        fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:77:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v267, v268], secs: v270, time: v269, didSend: v68, from: v266 } = txn4;
      ;
      const v271 = stdlib.addressEq(v223, v266);
      stdlib.assert(v271, {
        at: './index.rsh:76:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v272 = stdlib.digest(ctc1, [v267, v268]);
      const v273 = stdlib.digestEq(v252, v272);
      stdlib.assert(v273, {
        at: 'reach standard library:58:17:application',
        fs: ['at ./index.rsh:78:20:application call to "checkCommitment" (defined at: reach standard library:57:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v280 = stdlib.add(v269, v225);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 6,
        out_tys: [ctc0],
        timeoutAt: ['time', v280],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v223, v224, v240, v244, v268, v280],
          evt_cnt: 0,
          funcNum: 7,
          lct: v269,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v318, time: v317, didSend: v128, from: v316 } = txn6;
            
            ;
            const v319 = stdlib.addressEq(v240, v316);
            const v320 = stdlib.addressEq(v223, v316);
            const v321 = v319 ? true : v320;
            ;
            sim_r.txns.push({
              amt: v244,
              kind: 'from',
              to: v223,
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
        const {data: [], secs: v318, time: v317, didSend: v128, from: v316 } = txn6;
        ;
        const v319 = stdlib.addressEq(v240, v316);
        const v320 = stdlib.addressEq(v223, v316);
        const v321 = v319 ? true : v320;
        stdlib.assert(v321, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:87:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:41:35:application',
          fs: ['at ./index.rsh:40:13:application call to [unknown function] (defined at: ./index.rsh:40:34:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:39:30:function exp)', 'at ./index.rsh:87:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v286], secs: v288, time: v287, didSend: v82, from: v285 } = txn5;
        ;
        const v289 = stdlib.addressEq(v240, v285);
        stdlib.assert(v289, {
          at: './index.rsh:86:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        let v290;
        const v291 = stdlib.gt(v268, v286);
        if (v291) {
          const v292 = stdlib.sub(v268, v286);
          v290 = v292;
          }
        else {
          const v293 = stdlib.sub(v286, v268);
          v290 = v293;
          }
        const v294 = stdlib.eq(v290, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v295 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
        const v296 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
        const v297 = v294 ? v295 : v296;
        const v298 = v297[stdlib.checkedBigNumberify('./index.rsh:90:32:array', stdlib.UInt_max, 0)];
        const v299 = v297[stdlib.checkedBigNumberify('./index.rsh:90:32:array', stdlib.UInt_max, 1)];
        const v300 = stdlib.mul(v298, v224);
        ;
        const v305 = stdlib.mul(v299, v224);
        ;
        stdlib.protect(ctc3, await interact.seeOutcome(v290), {
          at: './index.rsh:98:28:application',
          fs: ['at ./index.rsh:97:9:application call to [unknown function] (defined at: ./index.rsh:97:30:function exp)'],
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
  appApproval: `BiAOAAEgCAQGUCgDB1gFeDAmAwEAAQEAIjUAMRhBBCUqZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQQMQAISSSEFDEABFkkhCQxAAFQhCRJEIQU0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gATiG7OpsDIGNAMhClsPRDQDVyggMQASNP8xABIRRLEisgE0A4FIW7III7IQNP+yB7NCA0VIIQU0ARJENARJIhJMNAISEUQoZEk1A0lJJFs1/1coIDX+IQZbNf1JNQUXNfyABHDt73o0/BZQsDIGNAMhClsMRDT+MQASRDT9NPwNQQAKNP00/Ak1+0IABzT8NP0JNfuAEAAAAAAAAAACAAAAAAAAAACAEAAAAAAAAAAAAAAAAAAAAAI0+yISTTX6sSKyATT6Ils0/wuyCCOyEDQDVwAgsgezsSKyATT6JVs0/wuyCCOyEDT+sgezQgKKSSELDEAAVEghBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABMyZklywMgY0AyEMWw9ENP8xABI0A1cAIDEAEhFEsSKyATQDIQZbsggjshA0/7IHs0ICL0ghBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpXACA1/yRbNf5XMCA1/SEGWzX8STUFSSJbNfslWzX6gAQQRq1zNPsWUDT6FlCwMgY0AyEMWwxENP8xABJENANXWCA0+xY0+hZQARJEMgY0AyEHWwg1+TT/NP4WUDT9UDT8FlA0+hZQNPkWUChLAVcAYGdIIQU1ATIGNQJCAbFJgQIMQADESSEIDEAAgEghCDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8kWzX+IQdbNf1XMCA1/CEGWzX7STUFNfqABBPu6lE0+lCwNP8xABJEMgY0/Qg1+TT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUChLAVcAf2cpSwFXfwFnSCEENQEyBjUCQgEjSCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDVsPRLEisgE0AyRbsggjshA0A1cAILIHs0IAykkjDEAAZUgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/JFs1/iEHWzX9gASai5F0sDIGNAMhDVsMRDT+SQg1/DT+iADcNP80/hZQNP0WUDEAUDT8FlAoSwFXAFhnSCEINQEyBjUCQgB7SCI0ARJENARJIhJMNAISEURJNQVJIls1/yVbNf6ABKzRH8M0/xZQNP4WULCBoI0GiACFNP+IAIAyBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCABwxGSELEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v224",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v225",
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
                "name": "v224",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v225",
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
                "name": "v252",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v267",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v268",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v286",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
    "name": "_reach_e7",
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
                "name": "v252",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v267",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v268",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v286",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620018c7380380620018c7833981016040819052620000269162000248565b600080805543600355604080516020810190915290815260408051835181526020808501518051828401520151918101919091527f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9060600160405180910390a16020820151516200009c903414600762000141565b6020808301510151620000b09043620002a8565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013792600292909101906200016b565b505050506200030c565b81620001675760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017990620002cf565b90600052602060002090601f0160209004810192826200019d5760008555620001e8565b82601f10620001b857805160ff1916838001178555620001e8565b82800160010185558215620001e8579182015b82811115620001e8578251825591602001919060010190620001cb565b50620001f6929150620001fa565b5090565b5b80821115620001f65760008155600101620001fb565b604080519081016001600160401b03811182821017156200024257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025c57600080fd5b6200026662000211565b835181526040601f19830112156200027d57600080fd5b6200028762000211565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002ca57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e457607f821691505b602082108114156200030657634e487b7160e01b600052602260045260246000fd5b50919050565b6115ab806200031c6000396000f3fe60806040526004361061008f5760003560e01c8063980b6eac11610056578063980b6eac1461010a578063ab53f2c61461011d578063bf2c5b2414610140578063ebdbfdcc14610153578063f4cedab01461016657005b80631e93b0f1146100985780632c10a159146100bc5780637eea518c146100cf57806383230757146100e25780638e314769146100f757005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca3660046111cf565b610179565b6100966100dd3660046111cf565b6103ba565b3480156100ee57600080fd5b506001546100a9565b6100966101053660046111cf565b610536565b6100966101183660046111cf565b6106cf565b34801561012957600080fd5b50610132610959565b6040516100b39291906111f2565b61009661014e3660046111cf565b6109f6565b61009661016136600461124f565b610b8b565b6100966101743660046111cf565b610e0d565b6101896001600054146009611044565b6101a38135158061019c57506001548235145b600a611044565b6000808055600280546101b590611261565b80601f01602080910402602001604051908101604052809291908181526020018280546101e190611261565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b505050505080602001905181019061024691906112b2565b905061025e6040518060200160405280600081525090565b61026f82606001514310600b611044565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d18360405161029e919061132b565b60405180910390a160208201516102b5908061136b565b815260208201516102c99034146008611044565b61030d6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b82516001600160a01b031681526020808401518183015260408085015181840152336060840152835160808401526003600055436001555161038f9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b604051602081830303815290604052600290805190602001906103b3929190611069565b5050505050565b6103ca600160005414600d611044565b6103e4813515806103dd57506001548235145b600e611044565b6000808055600280546103f690611261565b80601f016020809104026020016040519081016040528092919081815260200182805461042290611261565b801561046f5780601f106104445761010080835404028352916020019161046f565b820191906000526020600020905b81548152906001019060200180831161045257829003601f168201915b505050505080602001905181019061048791906112b2565b905061049b8160600151431015600f611044565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e1826040516104ca919061132b565b60405180910390a16104de3415600c611044565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561051b573d6000803e3d6000fd5b5060008080556001819055610532906002906110ed565b5050565b610546600460005414601c611044565b6105608135158061055957506001548235145b601d611044565b60008080556002805461057290611261565b80601f016020809104026020016040519081016040528092919081815260200182805461059e90611261565b80156105eb5780601f106105c0576101008083540402835291602001916105eb565b820191906000526020600020905b8154815290600101906020018083116105ce57829003601f168201915b50505050508060200190518101906106039190611383565b90506106178160c00151431015601e611044565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de882604051610646919061132b565b60405180910390a161065a3415601a611044565b606081015161068e906001600160a01b031633146106845781516001600160a01b03163314610687565b60015b601b611044565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561051b573d6000803e3d6000fd5b6106df6006600054146021611044565b6106f9813515806106f257506001548235145b6022611044565b60008080556002805461070b90611261565b80601f016020809104026020016040519081016040528092919081815260200182805461073790611261565b80156107845780601f1061075957610100808354040283529160200191610784565b820191906000526020600020905b81548152906001019060200180831161076757829003601f168201915b505050505080602001905181019061079c9190611421565b90506107a661112a565b6107b78260a0015143106023611044565b6040805184358152602080860135908201527f47a1195f23e4ca8f87a7a744a702eeb3eb5b0d56dae31e23931e0349a611c709910160405180910390a16108003415601f611044565b604082015161081b906001600160a01b031633146020611044565b60808201516020840135101561084657608082015161083f906020850135906114b5565b815261085c565b60808201516108599060208501356114b5565b81525b6020808201805160009081905290516002908301819052604084018051919091525190910152805115610893578060400151610899565b80602001515b606082018190528251602084015191516001600160a01b03909116916108fc916108c391906114cc565b6040518115909202916000818181858888f193505050501580156108eb573d6000803e3d6000fd5b5081604001516001600160a01b03166108fc836020015183606001516020015161091591906114cc565b6040518115909202916000818181858888f1935050505015801561093d573d6000803e3d6000fd5b5060008080556001819055610954906002906110ed565b505050565b60006060600054600280805461096e90611261565b80601f016020809104026020016040519081016040528092919081815260200182805461099a90611261565b80156109e75780601f106109bc576101008083540402835291602001916109e7565b820191906000526020600020905b8154815290600101906020018083116109ca57829003601f168201915b50505050509050915091509091565b610a066006600054146026611044565b610a2081351580610a1957506001548235145b6027611044565b600080805560028054610a3290611261565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5e90611261565b8015610aab5780601f10610a8057610100808354040283529160200191610aab565b820191906000526020600020905b815481529060010190602001808311610a8e57829003601f168201915b5050505050806020019051810190610ac39190611421565b9050610ad78160a001514310156028611044565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e082604051610b06919061132b565b60405180910390a1610b1a34156024611044565b6040810151610b4e906001600160a01b03163314610b445781516001600160a01b03163314610b47565b60015b6025611044565b805160608201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561051b573d6000803e3d6000fd5b610b9b6004600054146017611044565b610bb581351580610bae57506001548235145b6018611044565b600080805560028054610bc790611261565b80601f0160208091040260200160405190810160405280929190818152602001828054610bf390611261565b8015610c405780601f10610c1557610100808354040283529160200191610c40565b820191906000526020600020905b815481529060010190602001808311610c2357829003601f168201915b5050505050806020019051810190610c589190611383565b9050610c706040518060200160405280600081525090565b610c818260c0015143106019611044565b604080518435815260208086013590820152848201358183015290517f8a7f52857f5a8f65325114c9f376102f032d7b655b2da6a5e0a4fd78f992d9839181900360600190a1610cd334156014611044565b8151610ceb906001600160a01b031633146015611044565b60408051610d3791610d1191602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146016611044565b6040820151610d46904361136b565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915282516001600160a01b03908116808352602080860151818501908152606080880151851660408088019182526080808b0151848a019081528c830135828b019081528b5160a0808d019182526006600055436001558551998a019a909a529651938801939093529251909716928501929092525194830194909452925191810191909152905160c082015260e00161038f565b610e1d6003600054146012611044565b610e3781351580610e3057506001548235145b6013611044565b600080805560028054610e4990611261565b80601f0160208091040260200160405190810160405280929190818152602001828054610e7590611261565b8015610ec25780601f10610e9757610100808354040283529160200191610ec2565b820191906000526020600020905b815481529060010190602001808311610ea557829003601f168201915b5050505050806020019051810190610eda91906114eb565b9050610ef26040518060200160405280600081525090565b6040805184358152602080860135908201527fb586755d90ded52ac0645858b09d27f42fbe59c32320b3b1d760dd0397cb5714910160405180910390a1610f3b34156010611044565b8151610f53906001600160a01b031633146011611044565b6040820151610f62904361136b565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260046000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e08201526101000161038f565b816105325760405163100960cb60e01b81526004810182905260240160405180910390fd5b82805461107590611261565b90600052602060002090601f01602090048101928261109757600085556110dd565b82601f106110b057805160ff19168380011785556110dd565b828001600101855582156110dd579182015b828111156110dd5782518255916020019190600101906110c2565b506110e99291506111a2565b5090565b5080546110f990611261565b6000825580601f10611109575050565b601f01602090049060005260206000209081019061112791906111a2565b50565b604051806080016040528060008152602001611159604051806040016040528060008152602001600081525090565b815260200161117b604051806040016040528060008152602001600081525090565b815260200161119d604051806040016040528060008152602001600081525090565b905290565b5b808211156110e957600081556001016111a3565b6000604082840312156111c957600080fd5b50919050565b6000604082840312156111e157600080fd5b6111eb83836111b7565b9392505050565b82815260006020604081840152835180604085015260005b818110156112265785810183015185820160600152820161120a565b81811115611238576000606083870101525b50601f01601f191692909201606001949350505050565b6000606082840312156111c957600080fd5b600181811c9082168061127557607f821691505b602082108114156111c957634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146112ad57600080fd5b919050565b6000608082840312156112c457600080fd5b6040516080810181811067ffffffffffffffff821117156112f557634e487b7160e01b600052604160045260246000fd5b60405261130183611296565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b8135815260408101602083013580151580821461134757600080fd5b806020850152505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561137e5761137e611355565b500190565b600060e0828403121561139557600080fd5b60405160e0810181811067ffffffffffffffff821117156113c657634e487b7160e01b600052604160045260246000fd5b6040526113d283611296565b815260208301516020820152604083015160408201526113f460608401611296565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600060c0828403121561143357600080fd5b60405160c0810181811067ffffffffffffffff8211171561146457634e487b7160e01b600052604160045260246000fd5b60405261147083611296565b81526020830151602082015261148860408401611296565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6000828210156114c7576114c7611355565b500390565b60008160001904831182151516156114e6576114e6611355565b500290565b600060a082840312156114fd57600080fd5b60405160a0810181811067ffffffffffffffff8211171561152e57634e487b7160e01b600052604160045260246000fd5b60405261153a83611296565b8152602083015160208201526040830151604082015261155c60608401611296565b606082015260808301516080820152809150509291505056fea2646970667358221220942e76ccd9a0df320db3aa948a2f0bea52e47f175babc43f2caf78c9ffc1f8d764736f6c634300080c0033`,
  BytecodeLen: 6343,
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
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:77:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:79:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:87:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:95:13:after expr stmt semicolon',
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
