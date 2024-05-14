// Generated from c://skola//bakalarka//bp2//BP//src//components//parser//gramatika.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link gramatikaParser}.
 */
public interface gramatikaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link gramatikaParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(gramatikaParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramatikaParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(gramatikaParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramatikaParser#instruction}.
	 * @param ctx the parse tree
	 */
	void enterInstruction(gramatikaParser.InstructionContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramatikaParser#instruction}.
	 * @param ctx the parse tree
	 */
	void exitInstruction(gramatikaParser.InstructionContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramatikaParser#assign}.
	 * @param ctx the parse tree
	 */
	void enterAssign(gramatikaParser.AssignContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramatikaParser#assign}.
	 * @param ctx the parse tree
	 */
	void exitAssign(gramatikaParser.AssignContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramatikaParser#branch}.
	 * @param ctx the parse tree
	 */
	void enterBranch(gramatikaParser.BranchContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramatikaParser#branch}.
	 * @param ctx the parse tree
	 */
	void exitBranch(gramatikaParser.BranchContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramatikaParser#cycle}.
	 * @param ctx the parse tree
	 */
	void enterCycle(gramatikaParser.CycleContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramatikaParser#cycle}.
	 * @param ctx the parse tree
	 */
	void exitCycle(gramatikaParser.CycleContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramatikaParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(gramatikaParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramatikaParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(gramatikaParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramatikaParser#skip}.
	 * @param ctx the parse tree
	 */
	void enterSkip(gramatikaParser.SkipContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramatikaParser#skip}.
	 * @param ctx the parse tree
	 */
	void exitSkip(gramatikaParser.SkipContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramatikaParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(gramatikaParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramatikaParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(gramatikaParser.ExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link gramatikaParser#condition}.
	 * @param ctx the parse tree
	 */
	void enterCondition(gramatikaParser.ConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link gramatikaParser#condition}.
	 * @param ctx the parse tree
	 */
	void exitCondition(gramatikaParser.ConditionContext ctx);
}