<template>
    
</template>

<script>

import Latex from './Latex.vue';
 export default {
    name:"CelkovyPreklad",
    components:{
        Latex
    },
    props: {
        poslednyKrok : String,
        druhyKrok : Array,
    },
    data(){
        return{
            vsetkyKroky: [],
            krok: '',
            druhykrok: [],
            showPreklad: false,
            prvyKrokBezZmeny: '',
        }
    },
    watch: {
        poslednyKrok(newValue) {
            if(newValue != null){
                this.krok = newValue;
                this.prvyKrokBezZmeny = newValue;
                this.preklad();
            }
            
        },
        druhyKrok(newValue){
            if(newValue != null){
                this.druhykrok = newValue;
            }  
        },
    },
    methods:{
        splitCommands(input) {
            let commands = [];
            let currentCommand = '';
            let depth = 0;

            for (let i = 0; i < input.length; i++) {
                const char = input[i];

                if (char === '(') depth++;
                else if (char === ')') depth--;

                if (char === ':' && depth === 0) {
                // Našli sme dvojbodku mimo zátvoriek, čas pridať príkaz
                commands.push(currentCommand.trim());
                currentCommand = '';
                } else {
                currentCommand += char;
                }

                // Ak sme na konci reťazca, pridajme zostávajúci príkaz
                if (i === input.length - 1 && currentCommand) {
                commands.push(currentCommand.trim());
                }
            }

            return commands;
        },
        splitCommands2(input) {
            let commands = [];
            let currentCommand = '';
            let depth = 0;

            for (let i = 0; i < input.length; i++) {
            const char = input[i];

            if (char === '(') depth++;
            else if (char === ')') depth--;

            // Skontrolovať, či nie je dvojbodka súčasťou ':='
            if (char === ':' && depth === 0 && input[i + 1] !== '=') {
                // Našli sme dvojbodku mimo zátvoriek, čas pridať príkaz
                commands.push(currentCommand.trim());
                currentCommand = '';
            } else {
                currentCommand += char;
            }

            // Ak sme na konci reťazca, pridajme zostávajúci príkaz
            if (i === input.length - 1 && currentCommand) {
                commands.push(currentCommand.trim());
            }
            }

            return commands;
        },
        splitLoopContent(loopString) {
            let depth = 0; 
            let parts = ['', ''];
            let partIndex = 0;

            let i = loopString.indexOf('LOOP(') + 'LOOP('.length;

            for (; i < loopString.length; i++) {
                let char = loopString[i];

                if (char === '(') depth++;
                else if (char === ')') depth--;

                if (char === ',' && depth === 0) {
                partIndex = 1;
                continue;
                }

                parts[partIndex] += char;

                if (depth === -1) {
                break;
                }
            }

            parts[1] = parts[1].slice(0, -1);

            return parts;
        },
        splitBranchContent(branchString) {
        let depth = 0; 
        let parts = ['', ''];
        let partIndex = 0;

        let i = branchString.indexOf('BRANCH(') + 'BRANCH('.length;

        for (; i < branchString.length; i++) {
            let char = branchString[i];

            if (char === '(') depth++;
            else if (char === ')') depth--;

            if (char === ',' && depth === 0) {
            partIndex = 1;
            continue;
            }

            parts[partIndex] += char;

            if (depth === -1) {
            break;
            }
        }

        parts[1] = parts[1].slice(0, -1);

        return parts;
        },
        preklad(){
            this.krok = this.prvyKrokBezZmeny;
            this.vsetkyKroky = [];
            let krok1 = this.krok;
            this.showPreklad = true;
            this.krok = this.prvyPreklad(this.krok);
            let krok2 = this.krok

            this.krok = this.krok.replace(/\\mathscr{([^}]*)}/g, '');
            this.krok = this.krok.replace(/\\llbracket/g, '');
            this.krok = this.krok.replace(/\\rrbracket/g, '');
            this.krok = this.krok.replace(/\s+/g, ' ');

            
            this.krok = this.druhyPreklad(this.krok);
            let krok3 = this.krok;
            
            this.krok = this.krok.replace(/\s+/g, ' ');
            this.krok = this.krok.replace(/:/g, ' : ');
            this.krok = this.krok.replace(/\s+/g, ' ');
            this.krok = this.druhykrok.join(':');
            let krok4 = this.krok;
           
            this.krok = this.druhykrok;
            this.krok = this.krok.join(';')
            this.krok = this.krok.replace(/\\mathscr{([^}]*)}/g, '');
            this.krok = this.krok.replace(/\\llbracket/g, '');
            this.krok = this.krok.replace(/\\rrbracket/g, '');
            this.krok = this.krok.replace(/\s+/g, ' ');
            this.krok = `\\mathscr{T}\\mathscr{S}\\llbracket ${this.krok}\\rrbracket`;
            let krok5 = this.krok;

            krok1 = this.wrapLatex(krok1);
            this.vsetkyKroky.unshift(krok1);
            this.vsetkyKroky.unshift(this.wrapLatex(krok2));
            krok2 = krok2.replace(/\s+/g, '');
            let test3 =  krok3.replace(/\s+/g, '');
            if(krok2 !== test3){
                this.vsetkyKroky.unshift(this.wrapLatex(krok3))
            }
            let test4 = krok4.replace(/\s+/g, '');
            if(test3 !== test4){
                this.vsetkyKroky.unshift(this.wrapLatex(krok4))
            }
            let test5=krok5.replace(/\s+/g, '');
            if(test4 !== test5){
                this.vsetkyKroky.unshift(this.wrapLatex(krok5))
            }
            this.$emit('update:preklad', this.vsetkyKroky);
        },
        prvyPreklad(input){
            input = input.replace(/PUSH - (\d+)/g, '\\mathscr{T}\\mathscr{E}\\llbracket $1 \\rrbracket');
            input = input.replace(/FETCH - (\w+)/g, '\\mathscr{T}\\mathscr{E}\\llbracket $1 \\rrbracket');
            return input;
        },
        druhyPreklad(input){
            let help = this.splitCommands(input);
            let polePomocka = [];
            let command = 0;
            
            while(help.length > 0){
                let commands = help.shift();
                let parts;
                if(commands.startsWith('LOOP')){
                    command = "LOOP";
                }else if(commands.startsWith('BRANCH')){
                    command = "BRANCH";  
                }else{
                    parts = commands.split(' - ');
                    command = parts[0];
                }
                switch(command){        
                    case 'ADD':
                        let add1 = polePomocka.pop();
                        let add2 = polePomocka.pop();
                        let add = `${add1} + ${add2}`;
                        polePomocka.push(add);
                        break;
                    case 'SUB':
                        let sub1 = polePomocka.pop();
                        let sub2 = polePomocka.pop();
                        let sub = `${sub1} - ${sub2}`;
                        polePomocka.push(sub);
                        break;
                    case 'MULT':
                        let mult1 = polePomocka.pop();
                        let mult2 = polePomocka.pop();
                        let mult = `${mult1} * ${mult2}`;
                        polePomocka.push(mult);
                        break;
                    case 'TRUE':
                        polePomocka.push('true');
                        break;
                    case 'FALSE':
                        polePomocka.push('false');
                        break;
                    case 'EQ':
                        let eq1 = polePomocka.pop();
                        let eq2 = polePomocka.pop();
                        let eq = `${eq1} = ${eq2}`;
                        polePomocka.push(eq);
                        break;
                    case 'LE':
                        let le1 = polePomocka.pop();
                        let le2 = polePomocka.pop();
                        let le = `${le1} = ${le2}`;
                        polePomocka.push(le);
                        break;
                    case 'NEG':
                        let neg = polePomocka.pop();
                        let negPole = [];
                        negPole.push(neg);
                        neg = polePomocka.pop();
                        if(neg){
                            while(!neg.startsWith('LOOP') && !neg.startsWith('STORE')){
                                if(!neg)
                                    break;
                                if(neg.includes('!') || neg.includes('=') || neg.includes('<=') || neg.includes('∧') || neg.includes(')')){
                                    if(neg.includes(')')){}
                                    else{
                                        polePomocka.push(neg);
                                    }
                                    
                                    break;
                                }
                                negPole.push(neg);
                                neg = polePomocka.pop();
                            }
                            if (neg)
                                polePomocka.push(neg);
                        }
                        neg = `!(${negPole.join('')})`;
                        polePomocka.push(neg);           
                        break;
                    case 'AND': 
                        let and1 = polePomocka.pop();
                        let and2 = polePomocka.pop();
                        let and = `${and1} ∧  ${and2}`;
                        polePomocka.push(and);
                        break;
                    case 'LOOP':
                        let [podmienka, telo] = this.splitLoopContent(commands);
                        polePomocka.push('LOOP(');
                        help.unshift(')');
                        let a = this.splitCommands(telo);
                        while(a.length > 0){
                            let b = a.pop();
                            help.unshift(b);
                        }
                        help.unshift(',');
                        a = this.splitCommands(podmienka);
                        while(a.length > 0){
                            let b = a.pop();
                            help.unshift(b);
                        }  
                        break;
                    case 'BRANCH':
                        let [telo1, telo2] = this.splitBranchContent(commands);
                        help.unshift(')');
                        polePomocka.push('BRANCH(');
                        let c = this.splitCommands(telo2);
                        while(c.length>0){
                            let d = c.pop();
                            help.unshift(d);
                        }
                        help.unshift(',');
                        c = this.splitCommands(telo1);
                        while(c.length>0){
                            let d = c.pop();
                            help.unshift(d);
                        }
                        break;
                    default:
                        polePomocka.push(commands);   
                        
                }
                
            }
            polePomocka = polePomocka.join(':');
            
            polePomocka = polePomocka.replace(/\(:/g, '(')    
                     .replace(/:\,/g, ',')   
                     .replace(/\,:/g, ',')  
                     .replace(/:\)/g, ')');
            polePomocka = this.splitCommands(polePomocka);   
            let poleReturn = [];
            while(polePomocka.length >0){
                let instrukcia = polePomocka.shift();   
                while(instrukcia.startsWith('LOOP') || instrukcia.startsWith('BRANCH')){
                    if(instrukcia.startsWith('LOOP')){
                        let [podmienka,telo] = this.splitLoopContent(instrukcia);
                        poleReturn.push('LOOP(');
                        polePomocka.unshift(')');
                        let a = this.splitCommands(telo);
                        while(a.length > 0){
                            let b = a.pop();
                            polePomocka.unshift(b);
                        }
                        polePomocka.unshift(',');
                        a = this.splitCommands(podmienka);
                        while(a.length > 0){
                            let b = a.pop();
                            polePomocka.unshift(b);
                        }  
                    }else{
                        let [telo1, telo2] = this.splitBranchContent(instrukcia);
                        polePomocka.unshift(')');
                        poleReturn.push('BRANCH(');
                        let c = this.splitCommands(telo2);
                        while(c.length>0){
                            let d = c.pop();
                            polePomocka.unshift(d);
                        }
                        polePomocka.unshift(',');
                        c = this.splitCommands(telo1);
                        while(c.length>0){
                            let d = c.pop();
                            polePomocka.unshift(d);
                        }
                    }
                    instrukcia = polePomocka.shift();
                }

                if(instrukcia.includes('true') || instrukcia.includes('false') || instrukcia.includes('=') || instrukcia.includes('<=') || instrukcia.includes('!') || instrukcia.includes('∧')){
                    let h = `\\mathscr{T}\\mathscr{B}\\llbracket ${instrukcia} \\rrbracket`;
                    poleReturn.push(h);
                }else if((instrukcia.includes('+') || instrukcia.includes('-') || instrukcia.includes('*')) && !instrukcia.includes('STORE')){
                    let h = `\\mathscr{T}\\mathscr{E}\\llbracket ${instrukcia} \\rrbracket`;
                    poleReturn.push(h);
                }
                else if((!instrukcia.includes(')') && !instrukcia.includes(',')) && !instrukcia.includes('STORE') &&!instrukcia.includes('EMPTYOP')){
                    let h = `\\mathscr{T}\\mathscr{E}\\llbracket ${instrukcia} \\rrbracket`;
                    poleReturn.push(h);
                }else{
                    poleReturn.push(instrukcia);
                }
            }
            poleReturn = poleReturn.join(':');
            
            poleReturn = poleReturn.replace(/\(:/g, '(')    
                     .replace(/:\,/g, ',')   
                     .replace(/\,:/g, ',')  
                     .replace(/:\)/g, ')');
            
         
            return poleReturn;
        },
        zmenitCykly(input){
            input = this.transform(input);
            let oldInput, newInput = input;
            do {
                oldInput = newInput;
                newInput = this.transform(newInput);
            } while (newInput !== oldInput);

            return newInput;
        },
        transform(input){
            let regex = /LOOP\(([^,]+),([^)]+)\)|BRANCH\(([^,]+),([^)]+)\)/g;

            return input.replace(regex, (match, loop1, loop2, branch1, branch2) => {
            if (loop1 !== undefined) {
                // Transformácia LOOP na while-do
                return `while ${loop1.trim()} do (${loop2.trim()})`;
            } else {
                // Transformácia BRANCH na then-else
                return `then (${branch1.trim()}) else (${branch2.trim()})`;
            }
        });
        },
        addIf(input){
            const regex = /(\\mathscr\{T\}[^:]*?):then/g;
            return input.replace(regex, (match, condition) => {
                return `if (${condition}) then`;
            });
        },
        wrapLatex(input){
            input = input.replace(/PUSH/g, '\\mathtt{PUSH}');
            input = input.replace(/FETCH/g, '\\mathtt{FETCH}');
            input = input.replace(/ADD/g, '\\mathtt{ADD}');
            input = input.replace(/MULT/g, '\\mathtt{MULT}');
            input = input.replace(/SUB/g, '\\mathtt{SUB}');
            input = input.replace(/TRUE/g, '\\mathtt{TRUE}');
            input = input.replace(/FALSE/g, '\\mathtt{FALSE}');
            input = input.replace(/EQ/g, '\\mathtt{EQ}');
            input = input.replace(/LE/g, '\\mathtt{LE}');
            input = input.replace(/NEG/g, '\\mathtt{NEG}');
            input = input.replace(/AND/g, '\\mathtt{AND}');
            input = input.replace(/STORE/g, '\\mathtt{STORE}');
            input = input.replace(/skip/g, '\\mathtt{skip}');
            input = input.replace(/EMPTYOP/g, '\\mathtt{EMPTYOP}');
            input = input.replace(/if/g, '~\\mathtt{if}~');
            input = input.replace(/then/g, '~\\mathtt{then}~');
            input = input.replace(/else/g, '~\\mathtt{else}~');
            input = input.replace(/BRANCH/g, '\\mathtt{BRANCH}');
            input = input.replace(/while/g, '~\\mathtt{while}~');
            input = input.replace(/do/g, '~\\mathtt{do}~');
            input = input.replace(/LOOP/g, '\\mathtt{LOOP}');
            return input;
        }
    }
 }
</script>

<style>
.overflow1{
    overflow-x: auto;
}
</style>