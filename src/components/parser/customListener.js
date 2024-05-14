import gramatikaListener from "./gramatikaListener";
import gramatikaParser from "./gramatikaParser";

export default class customListener extends gramatikaListener{

    constructor() {
        super();
		this.CelyPreklad = []; //tu budem ukladat prelozene instrukcie

		this.instrukcia = []; //tu budem ukladat prelozenu jednu instrukciu

		this.assignCount = 0;
		this.variable = 0; //ukladat pre STORE

		this.Condition = [];
		this.InCondition = 0;
		this.druhyKrok = [];
		this.idk = 0;
    }
    

    enterProgram(ctx) {
		
	}
	
	exitProgram(ctx) {
	}

	enterInstruction(ctx) {
		this.idk++;
		if(this.idk == 1){
			let strnig = `\\mathscr{T}\\mathscr{S}\\llbracket ${ctx.getText()} \\rrbracket`;
			this.druhyKrok.push(strnig);
		}
		
	}

	exitInstruction(ctx) {
		this.CelyPreklad.push(this.instrukcia);
		this.instrukcia = [];
		this.idk--;
	}

	enterAssign(ctx) {
		this.assignCount++;
		const parts = ctx.getText().split(':=');
		if (parts.length > 1) { // Ensure there is a split
			this.variable = parts[0].trim(); // Trim to remove any leading/trailing whitespace
		}
	}

	exitAssign(ctx) {
		this.assignCount = 0;
	}

	enterBranch(ctx) {
		let branch = [];
		branch.push(`BRANCH(`);
		this.CelyPreklad.push(branch);
	}

	exitBranch(ctx) {
		let koniec = [];
		koniec.push(`)`);
		this.CelyPreklad.push(koniec);
	}

	enterCycle(ctx) {
		let loop = [];
		loop.push(`LOOP(`);
		this.CelyPreklad.push(loop);
	}

	exitCycle(ctx) {
		let koniec = [];
		koniec.push(`)`);
		this.CelyPreklad.push(koniec);
	}

	enterSkip(ctx) {
		let skip = [];
		skip.push(`EMPTYOP`);
		this.CelyPreklad.push(skip);
	}

	exitSkip(ctx) {
	}

	enterBlock(ctx) {
	}

	exitBlock(ctx) {
		let ciarka = [];
		ciarka.push(`,`);
		this.CelyPreklad.push(ciarka);
	}

	enterExpr(ctx) {
		if(this.assignCount === 1){
			this.assignCount++;
			let code = `STORE - ${this.variable}`;
			this.instrukcia.unshift(code);
		} 
		const childCount = ctx.getChildCount();
		let code = 0;
		if (childCount === 1){
			const child = ctx.getChild(0);
			switch(child.symbol.type){
				case gramatikaParser.ID:
					code = `FETCH - ${child.getText()}`;
					if(this.InCondition > 0)this.Condition.unshift(code);
					else this.instrukcia.unshift(code);
					break;
				case gramatikaParser.NUMBER:
					code = `PUSH - ${child.getText()}`;
					if(this.InCondition > 0)this.Condition.unshift(code);
					else this.instrukcia.unshift(code);
					break;	
			}
		}else if(childCount === 2){
			const child = ctx.getChild(1);
			switch(child.symbol.type){
				case gramatikaParser.ID:
					code = `FETCH - -${child.getText()}`;
					if(this.InCondition > 0)this.Condition.unshift(code);
					else this.instrukcia.unshift(code);
					break;
				case gramatikaParser.NUMBER:
					code = `PUSH - -${child.getText()}`;
					if(this.InCondition > 0)this.Condition.unshift(code);
					else this.instrukcia.unshift(code);
					break;	
			}
		} 
		else if (childCount === 3) {
			let left = ctx.getChild(0);
			let operator = ctx.getChild(1).getText();
			let right = ctx.getChild(2);
			if (left.getText() === '(' && right.getText() === ')') {

			} else {
				left = ctx.getChild(0).getText().replace(/^\(|\)$/g, "");
				right = ctx.getChild(2).getText().replace(/^\(|\)$/g, "");
				if(operator === "*"){
					code = (`MULT`);
					if(this.InCondition > 0)this.Condition.unshift(code);
					else this.instrukcia.unshift(code);
				}else if(operator === "+"){
					code = (`ADD`);
					if(this.InCondition > 0)this.Condition.unshift(code);
					else this.instrukcia.unshift(code);
				}else if(operator === "-"){
					code = (`SUB`);
					if(this.InCondition > 0)this.Condition.unshift(code);
					else this.instrukcia.unshift(code);
				}
			}
		}
	}

	exitExpr(ctx) {
	}

	enterCondition(ctx) {
		this.InCondition++;

		let code = 0;
		if (ctx.condition().length === 2) {
			code = (`AND`)
			this.Condition.unshift(code);
		} else if (ctx.expr().length === 2) {
			const operator = ctx.getChild(1).getText(); 
			if(operator === "<=" || operator === "≤"){
				code = (`LE`);
				this.Condition.unshift(code);
			}else if(operator === "="){
				code = (`EQ`);
				this.Condition.unshift(code);
			}
		} else if (ctx.NEG() || ctx.getText().startsWith("!")) {
			code = (`NEG`);
			this.Condition.unshift(code);
		} else if (ctx.getText() === 'true' || ctx.getText() === 'false') {
			if(ctx.getText() === 'true') code = (`TRUE`);
			else code = (`FALSE`);
			this.Condition.unshift(code);
		} 
		
	}

	exitCondition(ctx) {
		this.InCondition--;
		if(this.InCondition === 0 ){
			let ciarka = [];
			ciarka.push(`,`);
			this.Condition.push(ciarka);
			this.CelyPreklad.push(this.Condition);
			this.Condition = [];
		}	
	}

	getCelyPreklad() {
		this.CelyPreklad =  this.swapBranchEntries(this.CelyPreklad);
		const normalizedSpacesString = this.CelyPreklad.map(subArray => subArray.join(' : ')).join(' : ').replace(/\s+/g, ' ');

		const adjustedString = normalizedSpacesString.replace(/ : (?=[,\)])|(?<=[:,\(]) : /g, ' ');
		let resultString = adjustedString.replace(/ : (?=\))/g, '').replace(/(?<=\() : /g, '');
    
		resultString = resultString.replace(/[\s:]+$/, '');
		resultString = resultString.replace(/\,\s*(?=\))/g, '');
		resultString = resultString.replace(/ : (?=\))/g, '').replace(/(?<=\() : /g, '');

		resultString = resultString.replace(/\s+(?=\,)/g, '');
		resultString = resultString.replace(/,\s*(BRANCH\()/g, ' : $1');
		resultString = resultString.replace(/\s*:\s*(,)/g, '$1');
		resultString = resultString.replace(/\s*,\s*/g, ', ');

		return resultString;
	}
	swapBranchEntries(celyPreklad) {
		for (let i = 0; i < celyPreklad.length - 1; i++) { 
			if (celyPreklad[i].length === 1 && celyPreklad[i][0] === "BRANCH(") {
				let temp = celyPreklad[i];
				celyPreklad[i] = celyPreklad[i + 1];
				celyPreklad[i + 1] = temp;
				i++;
			}
		}
		return celyPreklad;
	}

	getDruhyKrok(){
		return this.druhyKrok;
	}
}