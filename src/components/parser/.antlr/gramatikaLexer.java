// Generated from c://skola//bakalarka//bp2//BP//src//components//parser//gramatika.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class gramatikaLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, ID=21, NUMBER=22, MINUS=23, NEG=24, WS=25;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
			"T__17", "T__18", "T__19", "ID", "NUMBER", "MINUS", "NEG", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "':='", "'if'", "'then'", "'else'", "'while'", "'do'", "'('", 
			"')'", "'skip'", "'*'", "'+'", "'and'", "'\\u2227'", "'='", "'<='", "'\\u2264'", 
			"'true'", "'false'", "'!'", null, null, "'-'", "'\\u00AC'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, "ID", "NUMBER", 
			"MINUS", "NEG", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public gramatikaLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "gramatika.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0019\u0091\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0005\u0014"+
		"x\b\u0014\n\u0014\f\u0014{\t\u0014\u0001\u0015\u0001\u0015\u0001\u0015"+
		"\u0005\u0015\u0080\b\u0015\n\u0015\f\u0015\u0083\t\u0015\u0003\u0015\u0085"+
		"\b\u0015\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0018\u0004"+
		"\u0018\u008c\b\u0018\u000b\u0018\f\u0018\u008d\u0001\u0018\u0001\u0018"+
		"\u0000\u0000\u0019\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005"+
		"\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019"+
		"\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015"+
		"+\u0016-\u0017/\u00181\u0019\u0001\u0000\u0005\u0002\u0000AZaz\u0003\u0000"+
		"AZ__az\u0001\u000019\u0001\u000009\u0003\u0000\t\n\r\r  \u0094\u0000\u0001"+
		"\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005"+
		"\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001"+
		"\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000"+
		"\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000"+
		"\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000"+
		"\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000"+
		"\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000"+
		"\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000"+
		"\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000"+
		"\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001"+
		"\u0000\u0000\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000"+
		"\u0000\u00001\u0001\u0000\u0000\u0000\u00013\u0001\u0000\u0000\u0000\u0003"+
		"5\u0001\u0000\u0000\u0000\u00058\u0001\u0000\u0000\u0000\u0007;\u0001"+
		"\u0000\u0000\u0000\t@\u0001\u0000\u0000\u0000\u000bE\u0001\u0000\u0000"+
		"\u0000\rK\u0001\u0000\u0000\u0000\u000fN\u0001\u0000\u0000\u0000\u0011"+
		"P\u0001\u0000\u0000\u0000\u0013R\u0001\u0000\u0000\u0000\u0015W\u0001"+
		"\u0000\u0000\u0000\u0017Y\u0001\u0000\u0000\u0000\u0019[\u0001\u0000\u0000"+
		"\u0000\u001b_\u0001\u0000\u0000\u0000\u001da\u0001\u0000\u0000\u0000\u001f"+
		"c\u0001\u0000\u0000\u0000!f\u0001\u0000\u0000\u0000#h\u0001\u0000\u0000"+
		"\u0000%m\u0001\u0000\u0000\u0000\'s\u0001\u0000\u0000\u0000)u\u0001\u0000"+
		"\u0000\u0000+\u0084\u0001\u0000\u0000\u0000-\u0086\u0001\u0000\u0000\u0000"+
		"/\u0088\u0001\u0000\u0000\u00001\u008b\u0001\u0000\u0000\u000034\u0005"+
		";\u0000\u00004\u0002\u0001\u0000\u0000\u000056\u0005:\u0000\u000067\u0005"+
		"=\u0000\u00007\u0004\u0001\u0000\u0000\u000089\u0005i\u0000\u00009:\u0005"+
		"f\u0000\u0000:\u0006\u0001\u0000\u0000\u0000;<\u0005t\u0000\u0000<=\u0005"+
		"h\u0000\u0000=>\u0005e\u0000\u0000>?\u0005n\u0000\u0000?\b\u0001\u0000"+
		"\u0000\u0000@A\u0005e\u0000\u0000AB\u0005l\u0000\u0000BC\u0005s\u0000"+
		"\u0000CD\u0005e\u0000\u0000D\n\u0001\u0000\u0000\u0000EF\u0005w\u0000"+
		"\u0000FG\u0005h\u0000\u0000GH\u0005i\u0000\u0000HI\u0005l\u0000\u0000"+
		"IJ\u0005e\u0000\u0000J\f\u0001\u0000\u0000\u0000KL\u0005d\u0000\u0000"+
		"LM\u0005o\u0000\u0000M\u000e\u0001\u0000\u0000\u0000NO\u0005(\u0000\u0000"+
		"O\u0010\u0001\u0000\u0000\u0000PQ\u0005)\u0000\u0000Q\u0012\u0001\u0000"+
		"\u0000\u0000RS\u0005s\u0000\u0000ST\u0005k\u0000\u0000TU\u0005i\u0000"+
		"\u0000UV\u0005p\u0000\u0000V\u0014\u0001\u0000\u0000\u0000WX\u0005*\u0000"+
		"\u0000X\u0016\u0001\u0000\u0000\u0000YZ\u0005+\u0000\u0000Z\u0018\u0001"+
		"\u0000\u0000\u0000[\\\u0005a\u0000\u0000\\]\u0005n\u0000\u0000]^\u0005"+
		"d\u0000\u0000^\u001a\u0001\u0000\u0000\u0000_`\u0005\u2227\u0000\u0000"+
		"`\u001c\u0001\u0000\u0000\u0000ab\u0005=\u0000\u0000b\u001e\u0001\u0000"+
		"\u0000\u0000cd\u0005<\u0000\u0000de\u0005=\u0000\u0000e \u0001\u0000\u0000"+
		"\u0000fg\u0005\u2264\u0000\u0000g\"\u0001\u0000\u0000\u0000hi\u0005t\u0000"+
		"\u0000ij\u0005r\u0000\u0000jk\u0005u\u0000\u0000kl\u0005e\u0000\u0000"+
		"l$\u0001\u0000\u0000\u0000mn\u0005f\u0000\u0000no\u0005a\u0000\u0000o"+
		"p\u0005l\u0000\u0000pq\u0005s\u0000\u0000qr\u0005e\u0000\u0000r&\u0001"+
		"\u0000\u0000\u0000st\u0005!\u0000\u0000t(\u0001\u0000\u0000\u0000uy\u0007"+
		"\u0000\u0000\u0000vx\u0007\u0001\u0000\u0000wv\u0001\u0000\u0000\u0000"+
		"x{\u0001\u0000\u0000\u0000yw\u0001\u0000\u0000\u0000yz\u0001\u0000\u0000"+
		"\u0000z*\u0001\u0000\u0000\u0000{y\u0001\u0000\u0000\u0000|\u0085\u0005"+
		"0\u0000\u0000}\u0081\u0007\u0002\u0000\u0000~\u0080\u0007\u0003\u0000"+
		"\u0000\u007f~\u0001\u0000\u0000\u0000\u0080\u0083\u0001\u0000\u0000\u0000"+
		"\u0081\u007f\u0001\u0000\u0000\u0000\u0081\u0082\u0001\u0000\u0000\u0000"+
		"\u0082\u0085\u0001\u0000\u0000\u0000\u0083\u0081\u0001\u0000\u0000\u0000"+
		"\u0084|\u0001\u0000\u0000\u0000\u0084}\u0001\u0000\u0000\u0000\u0085,"+
		"\u0001\u0000\u0000\u0000\u0086\u0087\u0005-\u0000\u0000\u0087.\u0001\u0000"+
		"\u0000\u0000\u0088\u0089\u0005\u00ac\u0000\u0000\u00890\u0001\u0000\u0000"+
		"\u0000\u008a\u008c\u0007\u0004\u0000\u0000\u008b\u008a\u0001\u0000\u0000"+
		"\u0000\u008c\u008d\u0001\u0000\u0000\u0000\u008d\u008b\u0001\u0000\u0000"+
		"\u0000\u008d\u008e\u0001\u0000\u0000\u0000\u008e\u008f\u0001\u0000\u0000"+
		"\u0000\u008f\u0090\u0006\u0018\u0000\u0000\u00902\u0001\u0000\u0000\u0000"+
		"\u0005\u0000y\u0081\u0084\u008d\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}