grammar gramatika;

program : instruction (';' instruction)* EOF;

instruction : assign
        | branch
        | cycle
        | skip
        ;

assign : ID ':=' expr;

branch
    : 'if' condition 'then' block 'else' block;

cycle 
    : 'while' condition 'do' block;

block
     : '(' instruction (';' instruction)* ')'
     | instruction ;

skip : 'skip';

expr : '(' expr ')'
     | expr '*' expr
     | expr ('+' | '-') expr
     | ID
     | MINUS? NUMBER
     ;

condition : condition 'and' condition
          | condition '∧' condition
          | expr '=' expr
          | expr '<=' expr
          | expr '≤' expr
          | 'true'
          | 'false'
          | NEG'(' condition ')'
          | '!''(' condition ')'
          | '(' condition ')'
          ;


ID : [a-zA-Z] [a-zA-Z_]*;
NUMBER : '0' | [1-9][0-9]*;
MINUS : '-';
NEG : '\u00AC'; 

WS : [ \t\r\n]+ -> skip;
