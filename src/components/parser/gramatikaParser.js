// Generated from gramatika.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import gramatikaListener from './gramatikaListener.js';
const serializedATN = [4,1,25,132,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,5,0,22,8,0,10,0,12,0,25,9,
0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,33,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,55,8,5,10,5,12,5,58,9,5,
1,5,1,5,1,5,3,5,63,8,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,74,8,7,1,
7,3,7,77,8,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,85,8,7,10,7,12,7,88,9,7,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,119,8,8,1,8,1,8,1,8,1,8,1,8,1,8,
5,8,127,8,8,10,8,12,8,130,9,8,1,8,0,2,14,16,9,0,2,4,6,8,10,12,14,16,0,1,
2,0,12,12,23,23,142,0,18,1,0,0,0,2,32,1,0,0,0,4,34,1,0,0,0,6,38,1,0,0,0,
8,45,1,0,0,0,10,62,1,0,0,0,12,64,1,0,0,0,14,76,1,0,0,0,16,118,1,0,0,0,18,
23,3,2,1,0,19,20,5,1,0,0,20,22,3,2,1,0,21,19,1,0,0,0,22,25,1,0,0,0,23,21,
1,0,0,0,23,24,1,0,0,0,24,26,1,0,0,0,25,23,1,0,0,0,26,27,5,0,0,1,27,1,1,0,
0,0,28,33,3,4,2,0,29,33,3,6,3,0,30,33,3,8,4,0,31,33,3,12,6,0,32,28,1,0,0,
0,32,29,1,0,0,0,32,30,1,0,0,0,32,31,1,0,0,0,33,3,1,0,0,0,34,35,5,21,0,0,
35,36,5,2,0,0,36,37,3,14,7,0,37,5,1,0,0,0,38,39,5,3,0,0,39,40,3,16,8,0,40,
41,5,4,0,0,41,42,3,10,5,0,42,43,5,5,0,0,43,44,3,10,5,0,44,7,1,0,0,0,45,46,
5,6,0,0,46,47,3,16,8,0,47,48,5,7,0,0,48,49,3,10,5,0,49,9,1,0,0,0,50,51,5,
8,0,0,51,56,3,2,1,0,52,53,5,1,0,0,53,55,3,2,1,0,54,52,1,0,0,0,55,58,1,0,
0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,59,1,0,0,0,58,56,1,0,0,0,59,60,5,9,0,
0,60,63,1,0,0,0,61,63,3,2,1,0,62,50,1,0,0,0,62,61,1,0,0,0,63,11,1,0,0,0,
64,65,5,10,0,0,65,13,1,0,0,0,66,67,6,7,-1,0,67,68,5,8,0,0,68,69,3,14,7,0,
69,70,5,9,0,0,70,77,1,0,0,0,71,77,5,21,0,0,72,74,5,23,0,0,73,72,1,0,0,0,
73,74,1,0,0,0,74,75,1,0,0,0,75,77,5,22,0,0,76,66,1,0,0,0,76,71,1,0,0,0,76,
73,1,0,0,0,77,86,1,0,0,0,78,79,10,4,0,0,79,80,5,11,0,0,80,85,3,14,7,5,81,
82,10,3,0,0,82,83,7,0,0,0,83,85,3,14,7,4,84,78,1,0,0,0,84,81,1,0,0,0,85,
88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,15,1,0,0,0,88,86,1,0,0,0,89,90,
6,8,-1,0,90,91,3,14,7,0,91,92,5,15,0,0,92,93,3,14,7,0,93,119,1,0,0,0,94,
95,3,14,7,0,95,96,5,16,0,0,96,97,3,14,7,0,97,119,1,0,0,0,98,99,3,14,7,0,
99,100,5,17,0,0,100,101,3,14,7,0,101,119,1,0,0,0,102,119,5,18,0,0,103,119,
5,19,0,0,104,105,5,24,0,0,105,106,5,8,0,0,106,107,3,16,8,0,107,108,5,9,0,
0,108,119,1,0,0,0,109,110,5,20,0,0,110,111,5,8,0,0,111,112,3,16,8,0,112,
113,5,9,0,0,113,119,1,0,0,0,114,115,5,8,0,0,115,116,3,16,8,0,116,117,5,9,
0,0,117,119,1,0,0,0,118,89,1,0,0,0,118,94,1,0,0,0,118,98,1,0,0,0,118,102,
1,0,0,0,118,103,1,0,0,0,118,104,1,0,0,0,118,109,1,0,0,0,118,114,1,0,0,0,
119,128,1,0,0,0,120,121,10,10,0,0,121,122,5,13,0,0,122,127,3,16,8,11,123,
124,10,9,0,0,124,125,5,14,0,0,125,127,3,16,8,10,126,120,1,0,0,0,126,123,
1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,17,1,0,0,0,130,
128,1,0,0,0,11,23,32,56,62,73,76,84,86,118,126,128];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gramatikaParser extends antlr4.Parser {

    static grammarFileName = "gramatika.g4";
    static literalNames = [ null, "';'", "':='", "'if'", "'then'", "'else'", 
                            "'while'", "'do'", "'('", "')'", "'skip'", "'*'", 
                            "'+'", "'and'", "'\\u2227'", "'='", "'<='", 
                            "'\\u2264'", "'true'", "'false'", "'!'", null, 
                            null, "'-'", "'\\u00AC'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "ID", "NUMBER", 
                             "MINUS", "NEG", "WS" ];
    static ruleNames = [ "program", "instruction", "assign", "branch", "cycle", 
                         "block", "skip", "expr", "condition" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gramatikaParser.ruleNames;
        this.literalNames = gramatikaParser.literalNames;
        this.symbolicNames = gramatikaParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.expr_sempred(localctx, predIndex);
    	case 8:
    	    		return this.condition_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    condition_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 10);
    		case 3:
    			return this.precpred(this._ctx, 9);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gramatikaParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.instruction();
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 19;
	            this.match(gramatikaParser.T__0);
	            this.state = 20;
	            this.instruction();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 26;
	        this.match(gramatikaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gramatikaParser.RULE_instruction);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.assign();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.branch();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 30;
	            this.cycle();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 31;
	            this.skip();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gramatikaParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(gramatikaParser.ID);
	        this.state = 35;
	        this.match(gramatikaParser.T__1);
	        this.state = 36;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	branch() {
	    let localctx = new BranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gramatikaParser.RULE_branch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(gramatikaParser.T__2);
	        this.state = 39;
	        this.condition(0);
	        this.state = 40;
	        this.match(gramatikaParser.T__3);
	        this.state = 41;
	        this.block();
	        this.state = 42;
	        this.match(gramatikaParser.T__4);
	        this.state = 43;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cycle() {
	    let localctx = new CycleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gramatikaParser.RULE_cycle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(gramatikaParser.T__5);
	        this.state = 46;
	        this.condition(0);
	        this.state = 47;
	        this.match(gramatikaParser.T__6);
	        this.state = 48;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gramatikaParser.RULE_block);
	    var _la = 0;
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(gramatikaParser.T__7);
	            this.state = 51;
	            this.instruction();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1) {
	                this.state = 52;
	                this.match(gramatikaParser.T__0);
	                this.state = 53;
	                this.instruction();
	                this.state = 58;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 59;
	            this.match(gramatikaParser.T__8);
	            break;
	        case 3:
	        case 6:
	        case 10:
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.instruction();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	skip() {
	    let localctx = new SkipContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gramatikaParser.RULE_skip);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(gramatikaParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, gramatikaParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.state = 67;
	            this.match(gramatikaParser.T__7);
	            this.state = 68;
	            this.expr(0);
	            this.state = 69;
	            this.match(gramatikaParser.T__8);
	            break;
	        case 21:
	            this.state = 71;
	            this.match(gramatikaParser.ID);
	            break;
	        case 22:
	        case 23:
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 72;
	                this.match(gramatikaParser.MINUS);
	            }

	            this.state = 75;
	            this.match(gramatikaParser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 86;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 84;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gramatikaParser.RULE_expr);
	                    this.state = 78;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 79;
	                    this.match(gramatikaParser.T__10);
	                    this.state = 80;
	                    this.expr(5);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gramatikaParser.RULE_expr);
	                    this.state = 81;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 82;
	                    _la = this._input.LA(1);
	                    if(!(_la===12 || _la===23)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 83;
	                    this.expr(4);
	                    break;

	                } 
	            }
	            this.state = 88;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	condition(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ConditionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, gramatikaParser.RULE_condition, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 90;
	            this.expr(0);
	            this.state = 91;
	            this.match(gramatikaParser.T__14);
	            this.state = 92;
	            this.expr(0);
	            break;

	        case 2:
	            this.state = 94;
	            this.expr(0);
	            this.state = 95;
	            this.match(gramatikaParser.T__15);
	            this.state = 96;
	            this.expr(0);
	            break;

	        case 3:
	            this.state = 98;
	            this.expr(0);
	            this.state = 99;
	            this.match(gramatikaParser.T__16);
	            this.state = 100;
	            this.expr(0);
	            break;

	        case 4:
	            this.state = 102;
	            this.match(gramatikaParser.T__17);
	            break;

	        case 5:
	            this.state = 103;
	            this.match(gramatikaParser.T__18);
	            break;

	        case 6:
	            this.state = 104;
	            this.match(gramatikaParser.NEG);
	            this.state = 105;
	            this.match(gramatikaParser.T__7);
	            this.state = 106;
	            this.condition(0);
	            this.state = 107;
	            this.match(gramatikaParser.T__8);
	            break;

	        case 7:
	            this.state = 109;
	            this.match(gramatikaParser.T__19);
	            this.state = 110;
	            this.match(gramatikaParser.T__7);
	            this.state = 111;
	            this.condition(0);
	            this.state = 112;
	            this.match(gramatikaParser.T__8);
	            break;

	        case 8:
	            this.state = 114;
	            this.match(gramatikaParser.T__7);
	            this.state = 115;
	            this.condition(0);
	            this.state = 116;
	            this.match(gramatikaParser.T__8);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 128;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 126;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ConditionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gramatikaParser.RULE_condition);
	                    this.state = 120;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 121;
	                    this.match(gramatikaParser.T__12);
	                    this.state = 122;
	                    this.condition(11);
	                    break;

	                case 2:
	                    localctx = new ConditionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gramatikaParser.RULE_condition);
	                    this.state = 123;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 124;
	                    this.match(gramatikaParser.T__13);
	                    this.state = 125;
	                    this.condition(10);
	                    break;

	                } 
	            }
	            this.state = 130;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

gramatikaParser.EOF = antlr4.Token.EOF;
gramatikaParser.T__0 = 1;
gramatikaParser.T__1 = 2;
gramatikaParser.T__2 = 3;
gramatikaParser.T__3 = 4;
gramatikaParser.T__4 = 5;
gramatikaParser.T__5 = 6;
gramatikaParser.T__6 = 7;
gramatikaParser.T__7 = 8;
gramatikaParser.T__8 = 9;
gramatikaParser.T__9 = 10;
gramatikaParser.T__10 = 11;
gramatikaParser.T__11 = 12;
gramatikaParser.T__12 = 13;
gramatikaParser.T__13 = 14;
gramatikaParser.T__14 = 15;
gramatikaParser.T__15 = 16;
gramatikaParser.T__16 = 17;
gramatikaParser.T__17 = 18;
gramatikaParser.T__18 = 19;
gramatikaParser.T__19 = 20;
gramatikaParser.ID = 21;
gramatikaParser.NUMBER = 22;
gramatikaParser.MINUS = 23;
gramatikaParser.NEG = 24;
gramatikaParser.WS = 25;

gramatikaParser.RULE_program = 0;
gramatikaParser.RULE_instruction = 1;
gramatikaParser.RULE_assign = 2;
gramatikaParser.RULE_branch = 3;
gramatikaParser.RULE_cycle = 4;
gramatikaParser.RULE_block = 5;
gramatikaParser.RULE_skip = 6;
gramatikaParser.RULE_expr = 7;
gramatikaParser.RULE_condition = 8;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramatikaParser.RULE_program;
    }

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
	    }
	};

	EOF() {
	    return this.getToken(gramatikaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.exitProgram(this);
		}
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramatikaParser.RULE_instruction;
    }

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	branch() {
	    return this.getTypedRuleContext(BranchContext,0);
	};

	cycle() {
	    return this.getTypedRuleContext(CycleContext,0);
	};

	skip() {
	    return this.getTypedRuleContext(SkipContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.exitInstruction(this);
		}
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramatikaParser.RULE_assign;
    }

	ID() {
	    return this.getToken(gramatikaParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.exitAssign(this);
		}
	}


}



class BranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramatikaParser.RULE_branch;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.enterBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.exitBranch(this);
		}
	}


}



class CycleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramatikaParser.RULE_cycle;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.enterCycle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.exitCycle(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramatikaParser.RULE_block;
    }

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.exitBlock(this);
		}
	}


}



class SkipContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramatikaParser.RULE_skip;
    }


	enterRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.enterSkip(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.exitSkip(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramatikaParser.RULE_expr;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ID() {
	    return this.getToken(gramatikaParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(gramatikaParser.NUMBER, 0);
	};

	MINUS() {
	    return this.getToken(gramatikaParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.exitExpr(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramatikaParser.RULE_condition;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	NEG() {
	    return this.getToken(gramatikaParser.NEG, 0);
	};

	condition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramatikaListener ) {
	        listener.exitCondition(this);
		}
	}


}




gramatikaParser.ProgramContext = ProgramContext; 
gramatikaParser.InstructionContext = InstructionContext; 
gramatikaParser.AssignContext = AssignContext; 
gramatikaParser.BranchContext = BranchContext; 
gramatikaParser.CycleContext = CycleContext; 
gramatikaParser.BlockContext = BlockContext; 
gramatikaParser.SkipContext = SkipContext; 
gramatikaParser.ExprContext = ExprContext; 
gramatikaParser.ConditionContext = ConditionContext; 
