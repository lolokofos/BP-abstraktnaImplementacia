<template>
    <v-dialog  style="max-width: 80%; max-height: 90%;">
        <v-card>
          <v-card-title>
            <v-row>
              <v-col cols="12" md="4">
                <v-btn block @click="content = 'content1'">Všeobecné</v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block @click="content = 'content2'">Abstraktná <br v-if="screenWidth <= 400"> implementácia</v-btn>
              </v-col>
              <v-col cols="12" md="4">
                <v-btn block @click="content = 'content3'">Gramatika</v-btn>
              </v-col>
            </v-row>
          </v-card-title>
  
        <v-card-text >
          <div v-if="content === 'content1'" class="text-left">
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-btn variant="elevated" class="spustit">Spustiť</v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">Po stlačení tlačídla sa zobrazí preklad programu v abstraktnej implementácii</v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-btn>18px<v-icon right color="info">mdi-chevron-down</v-icon></v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">Dropdown menu, v ktorom sa dá nastaviť veľkosť fontu v editore</v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5">
                <v-row>
                  <v-col class="formular" cols="12" >
                    <v-combobox
                    label="Názov"
                    outlined
                    :return-object="false"
                    style="max-width: 200px;"
                  ></v-combobox>
                  </v-col>
                  <v-col class="formular" cols="12" >
                    <v-combobox
                    label="Hodnota"
                    outlined
                    :return-object="false"
                    style="max-width: 200px;"
                  ></v-combobox>
                  </v-col> 
                  <v-col class="formular" cols="12">
                    <v-btn color="primary" disabled>Nastaviť hodnotu <br v-if="screenWidth <= 450"> premennej</v-btn>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="5" class="justify-center">Formulár, cez ktorý sa dajú nastavovať hodnoty premenných v počiatočnom stave s<sub>0</sub></v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-btn variant="elevated" >Vložiť príklad</v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                Po stlačení tlačidla sa vloží príkladový kód do editora a nastaví počiatočnú hodnotu premenných, aby sa mohol hneď spustiť preklad programu.
              </v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-btn variant="elevated" >Nahrať program <v-icon color="info">mdi-upload</v-icon></v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                Týmto tlačidlom viete nahrať kód z .txt súboru.
              </v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-btn variant="elevated">EXPORT</v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                Umožní exportnuť abstraktnú implementáciu do .png obrázka. Tak isto vypíše daný výsledok v latexe.
              </v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-btn color="primary" >Preklad kódu
                  <v-icon right>mdi-chevron-down
                  </v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                Výberové menu, z ktorého si užívateľ vie vybrať či chce na outpute mať zobrazený preklad programu do inštrukcií abstraktného stroja.
              </v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-row style="margin: 0;">
                  <v-btn variant="elevated"  style="margin-right: 10px;">Výsledok</v-btn>
                  <v-btn variant="elevated" :style="screenWidth <= 416? 'margin-top:10px;' : 'margin-top:0px;'">Krokovať</v-btn>
                </v-row>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                Týmyto tlačidlami sa viete prepímanť medzi dvoma formami outputu. Ak ste v "Výsledok", zobrazí sa vám úplne celý výsledok so všetkými krokmi. Ak však ste v "Krokovať", zobrazia sa vám jednotlivé kroky po jednom.
              </v-col>
            </v-row>
            <v-divider style="margin: 20px 0px;"></v-divider>
            <v-row>
              <v-col cols="12" md="5" class="test">
                <v-row style="margin: 0;">
                  <v-btn variant="tonal" style="margin-right: 10px;">Naspäť <v-icon color="info">mdi-chevron-left</v-icon></v-btn>
                  <v-btn variant="tonal">Ďalej <v-icon color="info">mdi-chevron-right</v-icon></v-btn>
                </v-row>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                Tieto tlačidlá sa vám zobrazia ak ste kliknutý v "Krokovať" a týmito si viete prepínať kroky. Tlačidlom "Naspäť" sa posuniete na predchádzajúci krok, tlačidlom "Ďalej" sa posuniete na nadchádzajúci krok.
              </v-col>
            </v-row>
            <v-divider style="margin:20px 0px;"></v-divider>
            <v-row >
              <v-col cols="12" md="5" class="test">
                <v-btn variant="elevated" style="padding: 5px;" :style="screenWidth <= 450 ? 'padding: 10px 50px 40px 50px;' : 'padding: 5px;'">Odhadnúť ďalšiu <br v-if="screenWidth <= 450"> konfiguráciu</v-btn>
              </v-col>
              <v-col cols="12" md="7" class="justify-center">
                Zobrazí formulár, pomocou ktorého si užívateľ vie tipnúť, ako bude vyzerať nasledujúca konfigurácia.
              </v-col>
            </v-row>
          </div>
          <div v-if="content === 'content2'" class="text-center">
            <v-card style="padding: 0px 10% 10px; margin-bottom: 10px;">
              <span>Kofigurácia abstraktného stroja má tvar:</span>
              <latex :latex-string="abstraktnaImplementacia"/>
              <span>kde kód (označený ako   </span>
              <span class="font-italic">c</span>
              <span>) je postupnosťou inštrukcií, ktoré stroj vykonáva. Zásobník (označený ako   </span>
              <span class="font-italic">st</span>
              <span>) je používaný pre vyhodnotenie výrazov a medzivýsledkov, zatiaľ čo pamäť stroja (označená ako </span>
              <span class="font-italic">s</span>
              <span>) udržiava stavové informácie potrebné pre správnu funkciu stroja.</span>
            </v-card >
            <v-card style="padding: 0px 10% 10px; margin-bottom: 10px; overflow-x: auto;">
              <v-card-title class="text-h6">Definícia prekladových funkcií výrazov</v-card-title>
              <span>Preklad aritmetických výrazov definujeme prekladovou funkciou:</span>
              <latex :latex-string="aritmetickeVyrazyHlava"/>
              <span>pre jednotlivé tvary aritmetických výrazov:</span>
              <latex :latex-string="aritmetickeVyrazy"/>
              <span>Preklad boolovských výrazov definujeme prekladovou funkciou:</span>
              <latex :latex-string="boolovskeVyrazyHlava"/>
              <span>pre jednotlivé tvary boolovských výrazov:</span>
              <latex :latex-string="boolovskeVyrazy"/>
              <span>Preklad príkazov definujeme prekladovou funkciou:</span>
              <latex :latex-string="prikazyHlava"/>
              <span>pre jednotlivé tvary príkazov:</span>
              <latex :latex-string="prikazy"/>
            </v-card>
            <v-card class="text-left" style="padding: 0px 10% 10px; overflow-x: auto;">
              <v-card-title class="text-h6 text-center">Sémantika inštrukcií abstraktného stroja</v-card-title>
              <span>Inštrukcia <latex :latex-string="'\\textbf{PUSH} - n'" style="display: inline-block;"></latex> zoberie hodnotu čísla <latex :latex-string="'n'" style="display: inline-block;"></latex> a vloží ju na vrchol zásobníka:</span>
              <latex :latex-string="push"/>

              <span>Inštrukcie <latex :latex-string="'\\textbf{ADD, MULT, SUB, EQ, LE}'" style="display: inline-block;"></latex> očakávajú, že na vrchole zásobníka sa nachádzajú dve číselné hodnoty. Pri inštrukciách <latex :latex-string="'\\textbf{ADD, MULT}'" style="display: inline-block;"></latex>a <latex :latex-string="'\\textbf{SUB}'" style="display: inline-block;"></latex> sa tie dve číselné hodnoty odstránia zo zásobníka a výsledok danej operácie sa zapíše na vrchol zásobníka:</span>
              <latex :latex-string="add"/>
              <latex :latex-string="mult"/>
              <latex :latex-string="sub"/>

              <span>Inštrukcia <latex :latex-string="'\\textbf{EQ}'" style="display: inline-block;"></latex> potom čo porovná dve číselné hodnoty tak ich odstráni zo zásobníka a na vrchol zapíše pravdivostnú hodnotu relácie rovnosti:</span>
              <latex :latex-string="eq"/>

              <span>Inštrukcia <latex :latex-string="'\\textbf{LE}'" style="display: inline-block;"></latex> porovná dve hodnoty na vrchole zásobníka, odstráni ich a na vrch zásobníka zapíše pravdivostnú hodnotu nerovnosti:</span>
              <latex :latex-string="le"/>
              <span>Inštrukcie <latex :latex-string="'\\textbf{TRUE}'" style="display: inline-block;"></latex>a <latex :latex-string="'\\textbf{FALSE}'" style="display: inline-block;"></latex> vložia na vrchol zásobníka pravdivostnú hodnotu <latex :latex-string="'\\textbf{tt}'" style="display: inline-block;"></latex> alebo <latex :latex-string="'\\textbf{ff}'" style="display: inline-block;"></latex>:</span>
              <latex :latex-string="True"/>
              <latex :latex-string="False"/>

              <span>Inštrukcia <latex :latex-string="'\\textbf{AND}'" style="display: inline-block;"></latex> očakáva na vrchole zásobníka dve pravdivostné hodnoty <latex :latex-string="'t_1'" style="display: inline-block;"></latex> a <latex :latex-string="'t_2'" style="display: inline-block;"></latex>, vykoná ich konjukciu, odstráni ich a výslednú pravdivostnú hodnotu <latex :latex-string="'\\textbf{tt}'" style="display: inline-block;"></latex> alebo <latex :latex-string="'\\textbf{ff}'" style="display: inline-block;"></latex> vloží na vrchol zásobníka:</span>
              <latex :latex-string="and"/>

              <span>Inštrukcia <latex :latex-string="'\\textbf{NEG}'" style="display: inline-block;"></latex> očakáva na vrchole zásobníka pravdivostnú hodnotu, ktorú odstráni a na vrchol zapíše negáciu pravdivostnej hodnoty:</span>
              <latex :latex-string="neg"/>

              <span>Inštrukcia <latex :latex-string="'\\textbf{FETCH} - x'" style="display: inline-block;"></latex> zoberie hodnotu premennej <latex :latex-string="'x'" style="display: inline-block;"></latex> v danom stave a vloží ju na vrchol zásobníka:</span>
              <latex :latex-string="fetch"/>
              
              <span>Inštrukcia <latex :latex-string="'\\textbf{STORE} - x'" style="display: inline-block;"></latex> zoberie hodnotu z vrchola zásobníka <latex :latex-string="'(v)'" style="display: inline-block;"></latex>,ktorá predpokladá, že je číselnou hodnotou, a priradí ju premennej <latex :latex-string="'x'" style="display: inline-block;"></latex>:</span>
              <latex :latex-string="store"/>
              
              <span>Inštrukcia <latex :latex-string="'\\textbf{BRANCH}(c_1,c_2)'" style="display: inline-block;"></latex> očakáva na vrchole zásobníka pravdivostnú hodnotu <latex :latex-string="'(t)'" style="display: inline-block;"></latex>, podľa ktorej vykoná vetvenie programu. AK teda bude pravdivostná hodnota pravdivá vykoná kód <latex :latex-string="'c_1'" style="display: inline-block;"></latex> a ak nepravdivá tak vykoná kód <latex :latex-string="'c_2'" style="display: inline-block;"></latex>:</span>
              <latex :latex-string="branch"/>
              
              <span>Inštrukcia <latex :latex-string="'\\textbf{LOOP}(c_1,c_2)'" style="display: inline-block;"></latex> vykoná kód <latex :latex-string="'c_1'" style="display: inline-block;"></latex> a potom vykoná inštrukciu <latex :latex-string="'\\textbf{BRANCH}'" style="display: inline-block;"></latex>:</span>
              <latex :latex-string="loop"/>
              
              <span>Inštrukcia <latex :latex-string="'\\textbf{EMPTYOP}'" style="display: inline-block;"></latex> je prázdna inštrukcia, ktorá nemení ani zásobník, ani stav:</span>
              <latex :latex-string="emptyop"/>
            </v-card>
          </div>
          <div v-if="content === 'content3'" class="text-left">
            <v-card>
              <span class="ma-5">
                Premenné v jazyku Jane sú definované:
              </span>
              <MonacoEditor style="max-height: 40px; margin: 20px;" :font-size="18" :readonly="true" :value="fixedContent1"/>
              <span class="ma-5">
                Každá inštrukcia by mala končiť bodkočiarkou ( ; ), okrem poslednej inštrukcie v bloku. Príklad:
              </span>
              <MonacoEditor style="max-height: 160px; margin: 20px;" :font-size="18" :readonly="true" :value="fixedContent2"/>
              <span class="ma-5">V tomto príklade sme použili inštrukciu <span class="font-weight-bold">if</span> s <span class="font-weight-bold">else</span> a <span class="font-weight-bold">then</span> inštrukciou. Inštrukcia <span class="font-weight-bold">else</span> je vždy vyžadovaná po inštrukcii <span class="font-weight-bold">if</span>:</span>
              <MonacoEditor style="max-height: 160px; margin: 20px;" :font-size="18" :readonly="true" :value="fixedContent3"/>
              <span class="ma-5">
                Ak máte len jednu inštrukciu v tele cyklu, môžte vynechať zátvorky: 
              </span>
              <MonacoEditor style="max-height: 40px; margin: 20px;" :font-size="18" :readonly="true" :value="fixedContent4"/>
            </v-card>
            <v-card>
              <v-card-title>Gramatika BNF</v-card-title>
              <pre class="code-container">
                <code>
  e ::= n | x | e + e | e - e | e * e

  b ::= true | false | e = e | e ≤ e | ¬ b | b ∧ b

  S ::= x := e | skip | S; S | if b then S else S | while b do S
                </code>
              </pre>
            </v-card>
            <v-card>  
              <v-card-title class="text-h6">Gramatika EBNF</v-card-title>
              <pre class="code-container">
                <code>
  program = instruction, {";", instruction}, EOF;
  
  instruction = assign | branch | cycle | skip;
  
  assign = ID, ":=", expr;
  
  branch = "if", condition, "then", block, "else", block;
  
  cycle = "while", condition, "do", block;
  
  block = "(", instruction, {";", instruction}, ")" | instruction;
  
  skip = "skip";
  
  expr = "(", expr, ")" | expr, "*", expr | expr, ("+" | "-"), expr | ID | [MINUS], NUMBER;
  
  condition = condition, "and", condition | expr, "=", expr | expr, "≤", expr | "true" | "false" | "!", "(", condition, ")" | "(", condition, ")";
                </code>
              </pre>
            </v-card>
          </div>
        </v-card-text>
        </v-card>
      </v-dialog>
</template>

<script>
import MonacoEditor from './MonacoEditor.vue';
import Latex from './Latex.vue';
 export default {
    name:"Pomocnik",
    props: ['screenWidth'],
    components:{
        MonacoEditor,
        Latex
    },
    data(){
        return{
            content: 'content1',
            fixedContent1: 'x := 1',
            fixedContent2: `x := 1;\ny := 4;\nwhile !(x = y) do (\n\tx := x * y;\n\ty := y - 1\n)`,
            fixedContent3: `if !(x = 1) then (\n    x := x + 1\n) else skip;\nif ¬(x = 1) then (\n    x := x + 1\n) else skip`,
            fixedContent4: `if !(x = 1) and x <= 0 then x := x+1 else skip`,
            exportContent: 'content1',
            abstraktnaImplementacia:' (c, st, s)',
            aritmetickeVyrazyHlava:`
            \\mathscr{T}\\mathscr{E} : \\textbf{Expr} \\rightarrow \\textbf{Code}
            `,
            aritmetickeVyrazy: `
                \\begin{align*}
                \\mathscr{T}\\mathscr{E}\\llbracket n \\rrbracket &= \\text{PUSH}-n \\\\
                \\mathscr{T}\\mathscr{E}\\llbracket x \\rrbracket &= \\text{FETCH}-x \\\\
                \\mathscr{T}\\mathscr{E}\\llbracket e_1 + e_2 \\rrbracket &= \\mathscr{T}\\mathscr{E}\\llbracket e_2 \\rrbracket : \\mathscr{T}\\mathscr{E}\\llbracket e_1 \\rrbracket : \\text{ADD} \\\\
                \\mathscr{T}\\mathscr{E}\\llbracket e_1 * e_2 \\rrbracket &= \\mathscr{T}\\mathscr{E}\\llbracket e_2 \\rrbracket : \\mathscr{T}\\mathscr{E}\\llbracket e_1 \\rrbracket : \\text{MULT} \\\\
                \\mathscr{T}\\mathscr{E}\\llbracket e_1 - e_2 \\rrbracket &= \\mathscr{T}\\mathscr{E}\\llbracket e_2 \\rrbracket : \\mathscr{T}\\mathscr{E}\\llbracket e_1 \\rrbracket : \\text{SUB}
                \\end{align*}
            `,
            boolovskeVyrazyHlava:`
            \\mathscr{T}\\mathscr{B} : \\textbf{Bexpr} \\rightarrow \\textbf{Code}
            `,
            boolovskeVyrazy: `
            \\begin{align*}
                \\mathscr{T}\\mathscr{B}\\llbracket true \\rrbracket &= \\text{TRUE}  \\\\
                \\mathscr{T}\\mathscr{B}\\llbracket false \\rrbracket &= \\text{FALSE} \\\\
                \\mathscr{T}\\mathscr{B}\\llbracket e_1 = e_2 \\rrbracket &= \\mathscr{T}\\mathscr{E}\\llbracket e_2 \\rrbracket : \\mathscr{T}\\mathscr{B}\\llbracket e_1 \\rrbracket : \\text{EQ} \\\\
                \\mathscr{T}\\mathscr{B}\\llbracket e_1 \\leq e_2 \\rrbracket &= \\mathscr{T}\\mathscr{E}\\llbracket e_2 \\rrbracket : \\mathscr{T}\\mathscr{E}\\llbracket e_1 \\rrbracket : \\text{LE}  \\\\
                \\mathscr{T}\\mathscr{B}\\llbracket e_1 \\neg e_2 \\rrbracket &= \\mathscr{T}\\mathscr{B}\\llbracket b \\rrbracket : \\text{NEG} \\\\
                \\mathscr{T}\\mathscr{B}\\llbracket b_1 \\land b_2 \\rrbracket &= \\mathscr{T}\\mathscr{B}\\llbracket b_2 \\rrbracket : \\mathscr{T}\\mathscr{B}\\llbracket b_1 \\rrbracket : \\text{AND} 
            \\end{align*}
            `,
            prikazyHlava:`
            \\mathscr{T}\\mathscr{S} : \\textbf{Statm} \\rightarrow \\textbf{Code}
            `,
            prikazy: `
                \\begin{align*}
                \\mathscr{T}\\mathscr{S}\\llbracket x:=e \\rrbracket &= \\mathscr{T}\\mathscr{S}\\llbracket e \\rrbracket : \\text{STORE}-x \\\\
                \\mathscr{T}\\mathscr{S}\\llbracket \\text{skip} \\rrbracket &= \\text{EMPTYOP}  \\\\
                \\mathscr{T}\\mathscr{S}\\llbracket S_1;S_2\\rrbracket &= \\mathscr{T}\\mathscr{S}\\llbracket S_1 \\rrbracket : \\mathscr{T}\\mathscr{S}\\llbracket S_2 \\rrbracket  \\\\
                \\mathscr{T}\\mathscr{S}\\llbracket \\text{if}~b~\\text{then}~S_1~ \\text{else}~S_2~\\rrbracket &= \\mathscr{T}\\mathscr{B}\\llbracket b \\rrbracket : \\text{BRANCH}(\\mathscr{T}\\mathscr{S}\\llbracket S_1\\rrbracket, \\mathscr{T}\\mathscr{S}\\llbracket S_2 \\rrbracket) \\\\ 
                \\mathscr{T}\\mathscr{S}\\llbracket \\text{while}~b~ \\text{do}~S~ \\rrbracket &= \\text{LOOP}(\\mathscr{T}\\mathscr{B}\\llbracket b \\rrbracket, \\mathscr{T} \\mathscr{S} \\llbracket S \\rrbracket) 
                \\end{align*}
            `,
            push: `\\langle\\textbf{PUSH} - n : c, st, s\\rangle \\Rightarrow \\langle c, N \\llbracket n \\rrbracket : st, s\\rangle`,
            add: `\\langle\\textbf{ADD} : c, v_1 : v_2 : st, s\\rangle \\Rightarrow \\langle c, (v_1 \\oplus v_2) : st, s\\rangle`,
            mult: `\\langle\\textbf{MULT} : c, v_1 : v_2 : st, s\\rangle \\Rightarrow \\langle c,(v_1 \\otimes v_2) : st, s\\rangle`,
            sub: `\\langle\\textbf{SUB} : c, v_1 : v_2 : st, s\\rangle \\Rightarrow \\langle c, (v_1 \\ominus v_2) : st, s\\rangle`,
            eq: `\\langle\\textbf{EQ} : c, v_1 : v_2 : st, s\\rangle \\Rightarrow \\langle c, (v_1 = v_2) : st, s\\rangle`,
            le: `\\langle\\textbf{LE} : c, v_1 : v_2 : st, s\\rangle \\Rightarrow \\langle c, (v_1 \\leq v_2) : st, s\\rangle`,
            True: `\\langle\\textbf{TRUE} : c, st, s\\rangle \\Rightarrow \\langle c, \\textbf{tt} : st, s\\rangle`,
            False: `\\langle\\textbf{FALSE} : c, st, s\\rangle \\Rightarrow \\langle c, \\textbf{ff} : st, s\\rangle`,
            and: `\\langle\\textbf{AND} : c, t_1 : t_2 : st, s\\rangle \\Rightarrow 
                \\begin{cases} 
                \\langle c, \\textbf{tt} : st, s\\rangle, & \\text{ak } t_1 = \\textbf{tt} \\text{ a } t_2 = \\textbf{tt} \\\\
                \\langle c, \\textbf{ff} : st, s\\rangle, & \\text{ak } t_1 = \\textbf{ff} \\text{ alebo } t_2 = \\textbf{ff}
                \\end{cases}`,
            neg: `\\langle\\textbf{NEG} : c, t : st, s\\rangle \\Rightarrow 
                    \\begin{cases} 
                    \\langle c, \\textbf{tt} : st, s\\rangle, & \\text{ak } t = \\textbf{ff}\\\\
                    \\langle c, \\textbf{ff} : st, s\\rangle, & \\text{ak } t = \\textbf{tt} 
                    \\end{cases}`,
            fetch: `\\langle\\textbf{FETCH} - x : c, st, s\\rangle \\Rightarrow \\langle c, (s \ x) : st, s\\rangle`,
            store: `\\langle\\textbf{STORE} - x : c, v : st, s\\rangle \\Rightarrow \\langle c, st, s[ x \\mapsto v]\\rangle`,
            branch: `\\langle\\textbf{BRANCH}(c_1, c_2) : c, t : st, s\\rangle \\Rightarrow
                    \\begin{cases} 
                    \\langle c_1 : c, st, s\\rangle, & \\text{ak } t = \\textbf{tt} \\\\
                    \\langle c_2 : c, st, s\\rangle, & \\text{ak } t = \\textbf{ff} 
                    \\end{cases}`,
            loop: `\\begin{aligned}
            \\langle\\textbf{LOOP}(c_1, c_2) : c, st, s\\rangle &\\Rightarrow \\\\
                    &\ \\langle c_1 : \\textbf{BRANCH}(c_2 : \\textbf{LOOP}(c_1, c_2), \\textbf{EMPTYOP}) : c, st, s\\rangle 
                    \\end{aligned}`,
            emptyop: `\\langle\\textbf{EMPTYTOP} : c, st, s\\rangle \\Rightarrow \\langle c, st, s\\rangle `,
            pushText:`\\text{Inštrukcia } \\textbf{PUSH} - ~n~ \\text{zoberie hodnotu čísla} ~n~ \\text{a vloží ju na vrchol zásobníka:}`,
            addText:`\\text{Inštrukcie } \\textbf{ADD}, \\textbf{MULT}, \\textbf{SUB}, \\textbf{EQ}, \\textbf{LE} \\text{ očakávajú, že na vrchole zásobníka sa nachádzajú dve číselné hodnoty. \\ Pri inštrukciách } \\textbf{ADD}, \\textbf{MULT} \\text{ a } \\textbf{SUB} \\text{ sa tie dve číselné hodnoty odstránia zo zásobníka a výsledok danej operácie sa zapíše na vrchol zásobníka:}`,
            eqText:`\\text{Inštrukcia } \\textbf{EQ} \\text{ potom čo porovná dve číselné hodnoty tak ich odstráni zo zábosníka a na vrchol zapíše pravdivostnú hodnotu relácie rovnosti:}`,
            leText:`\\text{Inštrukcia } \\textbf{LE} \\text{ porovná dve hodnoty na vrchole zásobníka, odstráni ich a na vrch zapíše pravidvostnú hodnotu nerovnosti:}`,
            TrueText:`\\text{Inštrukcie }\\textbf{TRUE} \\text{ a } \\textbf{FALSE}\\text{ vložia na vrchol zásobníka pravdivostnú hodnotu} \\textbf{ tt } \\text{alebo} \\textbf{ ff}:`,
            andText:`\\text{Inštrukcia }\\textbf{AND } \\text{očakáva na vrchole zásbníka dve pravdivostné hodnoty, $t_1$ a $t_2$, vykoná ich konjukciu, odstráni ich a výslednú pravdivostnú hodnotu} \\textbf{ tt}\\text{ alebo }\\textbf{ff} \\text{ vloží na vrchol zásobníka:}`,
            negText:`\\text{Inštrukcia } \\textbf{NEG } \\text{očakáva na vrchole zásobníka pravdivostnú hodnotu, ktorú odstráni a na vrchol zapíše negáciu pravdivostnej hodnoty:}`,
            fetchText:`\\text{Inštrukcia } \\textbf{FETCH }-\\textit{x}\\text{ zoberie hodnotu premennej } \\textit{x } \\text{v danom stave a vloží ho na vrchol zásobníka:}`,
            storeText:`\\text{Inštrukcia }\\textbf{STORE}-\\textit{x } \\text{zoberie hodnotu z vrchola zásoníka } (\\textit{v}), \\text{ ktorá predpokladá, že je číselnou hodnotou, a priradí ju premennej } \\textit{x}:`,
            branchText:`\\text{Inštrukcia }\\textbf{BRANCH}(c_1, c_2) \\text{ očakáva na vrchole zásobníka 
            pravdivostnú hodnotu }(\\textit{t}), \\text{ podľa ktorej vykoná vetvenie programu. Ak teda bude pravdivostná hodnota pravdivá vykoná kód } c_1 \\text{ a ak nepravdivá tak vykoná kód }c_2:`,
            loopText:`\\text{Inštrukcia }\\textbf{LOOP}(c_1, c_2) \\text{ vykoná kód }c_1 \\text{ a potom vykoná inštrukciu }\\textbf{BRANCH}:`,
            emptyopText:`\\text{Inštrukcia } \\textbf{EMPTYOP} \\text{ je prázdna inštrukcia, ktorá nezmení ani zásobník, ani stav:}`
        }
    }
 }
</script>