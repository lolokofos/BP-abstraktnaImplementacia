<template>
  <div class="container" >
    <v-row style="margin-left: 3px;margin-right: 3px;" justify="end">
      <v-menu  offset-y v-model="menu2" >
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="menu" :style="buttonStyle">
            {{ currentLanguage }}
            <img v-if="currentLanguage === 'SK'" :src="require('@/assets/SK.png')" alt="SK Flag" class="flag-icon" style="margin-bottom: 2px;">
            <img v-else :src="require('@/assets/EN.png')" alt="EN Flag" class="flag-icon">
            <v-icon right>
              {{ menu2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
            </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in languages" :key="index" @click="selectLanguage(item)" >
            <v-list-item-title class="d-flex align-center">
              {{ item.title }} 
              <img :src="require(`@/assets/${item.title}.png`)" alt="Flag" class="flag-icon" style="margin-left: 5px;">
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>       
    </v-row>
    <v-row class="ma-3">
      <v-col cols="12" lg="5" md="12"   class="inputs">
        <v-row >
          <v-col cols="12">
            <v-row justify="space-between">
              <v-col cols="5" sm="12"><v-btn variant="elevated" @click="displayOutput" class="spustit">{{ currentLanguage === 'SK' ? 'Spustiť' : 'Visualize' }}<v-icon>mdi-play</v-icon></v-btn></v-col>
              <v-col cols="4" sm="12">
                <v-row v-if="screenWidth > 600">
                  <v-col cols="auto">
                    <v-btn @click="triggerFileInput" variant="elevated" >{{ currentLanguage === 'SK' ? 'Nahrať program' : 'Upload program' }}<v-icon color="info">mdi-upload</v-icon></v-btn>
                    <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none;" />
                  </v-col>
                  <v-col cols="auto">
                    <v-btn variant="elevated" @click="pasteExample" >{{ currentLanguage === 'SK' ? 'Vložiť príklad' : 'Paste Example' }}</v-btn>
                  </v-col>
                  <v-col cols="auto">
                    <v-btn variant="elevated" @click="showDialog = true, content='content1'" >{{ currentLanguage === 'SK' ? 'Pomocník' : 'Helper' }} <v-icon color="info">mdi-help-circle</v-icon></v-btn>
                  </v-col>
                  <v-col cols="auto">
                    <v-menu>
                          <template v-slot:activator="{props}">
                            <v-btn v-bind="props">{{ selectedFontSize }}px<v-icon right color="info">mdi-chevron-down</v-icon></v-btn>
                          </template>
                          <v-list>
                            <v-list-item v-for="(item,index1) in fontSizes" :key="index1" @click="updateFontSize(item)">
                              <v-list-item-title>{{ item }}px</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                  </v-col>
                </v-row>
                <v-row v-if="screenWidth <= 600">
                  <v-col>
                    <v-menu>
                    <template v-slot:activator="{ props }">
                    <v-btn
                      color="primary"
                      v-bind="props"
                    >
                      Menu
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item class="text-center">
                      <v-list-item-title style="margin: 10px;">
                        <v-btn @click="triggerFileInput"  style="width: 100%;">{{ currentLanguage === 'SK' ? 'Nahrať program' : 'Upload program' }}<v-icon>mdi-upload</v-icon></v-btn>
                        <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none;" />
                      </v-list-item-title>
                      <v-list-item-title style="margin: 10px; border: none;">
                        <v-btn  @click="pasteExample" style="width: 100%;">{{ currentLanguage === 'SK' ? 'Vložiť príklad' : 'Paste example' }}</v-btn>
                      </v-list-item-title>
                      <v-list-item-title style="margin: 10px; border: none;">
                        <v-btn  @click="showDialog = true, content='content1'" style="width: 100%;">{{ currentLanguage === 'SK' ? 'Pomocník' : 'Helper' }}<v-icon color="info">mdi-help-circle</v-icon></v-btn>
                      </v-list-item-title>
                      <v-list-item-title style="margin: 10px; border: none;">
                        <v-menu >
                          <template v-slot:activator="{props}">
                            <v-btn v-bind="props" style="width: 100%;">{{ selectedFontSize }}px<v-icon right color="info" >mdi-chevron-down</v-icon></v-btn>
                          </template>
                          <v-list>
                            <v-list-item v-for="(item,index1) in fontSizes" :key="index1" @click="updateFontSize(item)">
                              <v-list-item-title>{{ item }}px</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                  </v-menu>
                  </v-col>
                  
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          
          <v-col cols="12">
            <v-row>
              <v-col class="formular" cols="12" sm="3" >
            <v-combobox
            v-model="variableName"
            :items="premenneFetch"
            :label="currentLanguage === 'SK' ? 'Názov' : 'Name' "
            outlined
            :return-object="false"
          ></v-combobox>
              </v-col>
              <v-col class="formular" cols="12" sm="3" >
                <v-combobox
                v-model="variableValue"
                :label="currentLanguage === 'SK' ? 'Hodnota' : 'Value' "
                outlined
                :return-object="false"
              ></v-combobox>
            
              </v-col>
              <v-col class="formular" cols="12" sm="6" >
                <v-btn  @click="addVariable2" color="primary" :disabled="!variableName || !variableValue">{{ currentLanguage === 'SK' ? 'Nastaviť hodnotu ' : 'Set variable' }}<br v-if="(screenWidth < 1500 && screenWidth >= 1280) && currentLanguage==='SK'">{{ currentLanguage === 'SK' ? 'premennej' : '' }}</v-btn>
                
              </v-col>
            </v-row>
          </v-col>    
          <v-col cols="12" v-if="premenneNaZaciatku[0]">
            <v-row v-for="(prem, indexx) in premenneNaZaciatku" :key="indexx" class="variable_list">
              <v-col cols="4" sm="3" class="variable rounded-lg" >
                <td>{{ prem.name }}</td>
              </v-col>
              <v-col cols="4" sm="3" class="variable rounded-lg">
                <td>{{ prem.value }}</td>
              </v-col>
              <v-col cols="2" sm="3" >
                <!-- Tlačidlo na odstránenie premennej -->
                <v-btn icon @click="removeVariable(indexx)" style="height: 30px; width: 30px;">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row v-if="show || show2 || show4">
          <v-col>
            <v-alert v-if="show" type="error" :text="currentLanguage === 'SK' ? 'Musíte zadať číselnú hodnotu!' : 'You must enter a numeric value!'" v-model="alert" closable style="padding: 5px;"></v-alert>
            <v-alert v-if="show4" type="error" :text="currentLanguage === 'SK' ? 'Musíte zadať správny názov premennej!' : 'You must enter the correct variable name!'" v-model="alert4" closable style="padding: 5px;"></v-alert>
            <v-alert v-if="show2 && premenneFetch.length > 0" type="error" v-model="alert2" closable style="padding: 5px;">
              <div>{{ currentLanguage === 'SK' ? 'Musia byť zadané hodnoty pre premenné:' : 'Values must be entered for the variables:' }}{{ premenneFetch.join(', ') }}</div>
            </v-alert>
          </v-col>
        </v-row>
        <div v-if="currentLanguage === 'SK'">
          <Pomocnik  v-model="showDialog" :screenWidth="screenWidth"></Pomocnik>
        </div>
        <div v-if="currentLanguage === 'EN'">
          <PomocnikEN  v-model="showDialog" :screenWidth="screenWidth"></PomocnikEN>
        </div>        
        
        <MonacoEditor style="margin-top: 20px;" :value="editorValue" @update:ast="handleAst" @update:druhyKrok="handleDruhyKrok" @insert-code="pasteExample"  @insert-code2="handleFileUpload" :font-size="selectedFontSize" :style="heightNastavnieEditor"/>
        
      </v-col>
      <v-col cols="12" lg="7" md="12" class="outputs" :style="widthChange" v-if="showOutput">
        <v-row>
        <v-col>
          <v-menu offset-y v-model="menu">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props" class="menu" :style="buttonStyle">
                {{
                    currentLanguage === 'SK'
                      ? (selectedTitle === 'Preklad kódu' ? 'Preklad kódu' : 
                        (selectedTitle === 'Vykonanie kódu' ? 'Vykonanie kódu' : ''))
                      : (selectedTitle === 'Preklad kódu' ? 'Code translation' : 
                        (selectedTitle === 'Vykonanie kódu' ? 'Code execution' : ''))
                  }}
                <v-icon right>
                  {{ menu ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index" @click="selectItem(item)">
                <v-list-item-title>{{
                currentLanguage === 'SK'
                  ? (item.title === 'Preklad kódu' ? 'Preklad kódu' : 
                    (item.title === 'Vykonanie kódu' ? 'Vykonanie kódu' : ''))
                  : (item.title === 'Preklad kódu' ? 'Code translation' : 
                    (item.title === 'Vykonanie kódu' ? 'Code execution' : ''))
              }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        </v-row>

        <div v-if="selectedTitle == 'Vykonanie kódu'">
          
          <v-alert v-if="show3" type="error" :text=" currentLanguage === 'SK' ? 'Pravdepodobne nastal nekonečný cyklus!' : 'An endless cycle has probably occurred!' " v-model="alert3" closable></v-alert>
          <v-row class="controls" justify="space-between" style="position: relative;">
            <v-col >
              <v-row>
                <v-col  cols="auto" >
                  <v-btn variant="elevated" v-if="showOutput" @click="hideStepping" :class="!showStepping ? 'showWhole' : 'showPart'" style="margin-right: 10px; padding: 5px;">{{ currentLanguage === 'SK' ? 'Výsledok' : 'Whole Sequence' }}</v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn variant="elevated" style="padding: 5px;" v-if="showOutput" @click="enableStepping" :class="showStepping ? 'showWhole' : 'showPart'">{{ currentLanguage === 'SK' ? 'Krokovať' : 'Step by Step' }}</v-btn>
                </v-col>   
                <v-col cols="auto"><v-btn variant="elevated" v-if="showOutput" @click="showExportPopup" style="padding:5px;">EXPORT</v-btn></v-col>
              </v-row>
            </v-col>
            <v-col>
              <v-row justify="end">
                <v-col  cols="auto" >
                  <v-btn @click="showStack = !showStack" text v-if="showOutput && screenWidth>960 " :disabled="showFullOutput">{{ currentLanguage === 'SK' ? 'Zásobník' : 'Stack' }}<v-icon right color="info">{{showStack ? "mdi-chevron-up" : "mdi-chevron-down"}}</v-icon></v-btn>
                  <v-btn @click="showStackDialog" text v-if="showOutput && screenWidth<=960 " :disabled="showFullOutput">{{ currentLanguage === 'SK' ? 'Zásobník' : 'Stack' }}<v-icon right color="info">{{showStack ? "mdi-chevron-up" : "mdi-chevron-down"}}</v-icon></v-btn>
                  <v-dialog  v-model="stackDialog" max-width="50%">
                    <v-card>
                      <v-card-title class="headline">
                        {{ currentLanguage === 'SK' ? 'Zásobník' : 'Stack' }}
                      </v-card-title>
                      <v-card-text >
                        <v-table >
                        <tbody v-if="showStepping">
                          <tr v-for="(item, idx) in zasobnikAStav[currentIndex].split(':')" :key="`stepping-${idx}`">
                            <td >
                              <span>{{ item }}</span>
                            </td>
                          </tr>
                        </tbody>
                      </v-table>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <v-expand-transition>
                    <v-card v-if="showOutput && showStack && showStepping" class="flex-shrink-0 text-center"  style="position: absolute; top: 100%;z-index: 5; width: 100px;">
                      <v-table >
                        <tbody v-if="showStepping">
                          <tr v-for="(item, idx) in zasobnikAStav[currentIndex].split(':')" :key="`stepping-${idx}`">
                            <td >
                              <span><latex :latex-string="`${item}`"></latex></span>
                            </td>
                          </tr>
                        </tbody>
                      </v-table>
                    </v-card>
                  </v-expand-transition>
                </v-col>
                <v-col  cols="auto">
                  <v-btn @click="showStates = !showStates" text v-if="showOutput && screenWidth>960">{{ currentLanguage === 'SK' ? 'Stavy' : 'States' }}<v-icon right color="info">{{showStates ? "mdi-chevron-up" : "mdi-chevron-down"}}</v-icon></v-btn>
                  <v-btn @click="showStateDialog" text v-if="showOutput && screenWidth<=960">{{ currentLanguage === 'SK' ? 'Stavy' : 'States' }} <v-icon right color="info">{{showStates ? "mdi-chevron-up" : "mdi-chevron-down"}}</v-icon></v-btn>
                  <v-dialog  v-model="stateDialog" max-width="50%">
                    <v-card>
                      <v-card-title class="headline">
                        {{ currentLanguage === 'SK' ? 'Stavy' : 'States' }}
                      </v-card-title>
                      <v-card-text >
                        <v-table >
                          <tbody >
                            <tr v-for="(state,index6) in filtrovaneStavy" :key="index6">
                                <td v-if="index6 == 0" >
                                  <latex :latex-string="`s_{${index6}} ${state}`"></latex>
                                </td>
                                <td v-if="index6 !== 0" >
                                  <latex :latex-string="`s_{${index6}} = s_{${index6-1}} ${state}`"></latex>
                                </td>
                              </tr>
                          </tbody>
                        </v-table>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <v-expand-transition>
                      <v-card v-if="showOutput && showStates" class="flex-shrink-0"  style="position: absolute; top: 100%; z-index: 5; width: 150px;">
                        <v-table >
                          <tbody >
                            <tr v-for="(state,index6) in filtrovaneStavy" :key="index6">
                                <td v-if="index6 == 0" >
                                  <latex :latex-string="`s_{${index6}} ${state}`"></latex>
                                </td>
                                <td v-if="index6 !== 0" >
                                  <latex :latex-string="`s_{${index6}} = s_{${index6-1}} ${state}`"></latex>
                                </td>
                              </tr>
                          </tbody>
                        </v-table>
                      </v-card>
                  </v-expand-transition>
                </v-col>
              </v-row>
            </v-col>
            <v-dialog  v-model="exportDialog" max-width="50%">
              <v-card >
                <v-card-title class="headline">
                  <v-row>
                    <v-col cols="6">
                      <v-btn block @click="exportContent = 'content1'">PNG</v-btn>
                    </v-col>
                    <v-col cols="6">
                      <v-btn block @click="exportContent = 'content2'">Latex</v-btn>
                    </v-col>
                  </v-row>
                </v-card-title>
                <v-card-actions v-if="exportContent === 'content1'">
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="exportToImage">Export to png</v-btn>
                </v-card-actions>
                <v-card-text v-if="exportContent== 'content1'">
                  <div ref="exportContent">
                    <h3>{{ currentLanguage === 'SK' ? 'Preklad inštrukcií do inštrukcií abstraktného stroja:' : 'Translation of instructions into abstract machine instructions:' }}</h3>
                    <span v-if="kroky[0]">
                      <div v-for="(cast, index) in kroky[0].split(':')" :key="index" style="display: inline-block;">
                        <latex :latex-string="`{${cast.trim()}}${index < kroky[0].split(':').length - 1 ? '\\: : \\:' : ''}`" style="display: inline-block;"/>
                      </div>
                    </span>
                    <v-divider class="border-opacity-50"></v-divider>
                    <h1>{{ currentLanguage === 'SK' ? 'Inštrukcie' : 'Instructions' }}</h1>
                    <div  class="output-row" v-for="index2 in Array.from({length: pocetKrokov+1}, (_, i) => i)" :key="index2" >
                      <span style="display: inline-block">
                        <latex :latex-string="`\\alpha_{${index2}} = \\langle {${prvaCastPrekladu[index2]}}`" style="display: inline-block;"/>
                        <span v-if="pocetInstrukciiPrvyKrok[index2] > 4" style="cursor: pointer;display: inline-block;"> ... </span>
                        <latex v-if="index2 < pocetKrokov" :latex-string="`, {${zasobnikAStav[index2]}}, {${stavKazdyKrok[index2]}}\\rangle \\Rightarrow \\alpha_{${index2+1}}`" style="display: inline-block;"/>
                        <latex v-if="index2 >= pocetKrokov" :latex-string="`, {${zasobnikAStav[index2]}}, {${stavKazdyKrok[index2]}} \\rangle`" style="display: inline-block;"/>
                      </span> 
                    </div>
                    <h1>{{ currentLanguage === 'SK' ? 'Stavy' : 'States' }}</h1>
                    <v-table >
                          <tbody >
                            <tr v-for="(state,index6) in stavy" :key="index6">
                                <td v-if="index6 == 0" >
                                  <latex :latex-string="`s_{${index6}} ${state}`"></latex>
                                </td>
                                <td v-if="index6 !== 0" >
                                  <latex :latex-string="`s_{${index6}} = s_{${index6-1}} ${state}`"></latex>
                                </td>
                              </tr>
                          </tbody>
                        </v-table>
                  </div>
                </v-card-text>
                <v-card-text v-if="exportContent=='content2'">
                  <h1>{{ currentLanguage === 'SK' ? 'Inštrukcie' : 'Instructions' }}</h1>
                  <div v-for="(krok, index) in filteredKroky" :key="index">
                    {{ krok }} <span v-if="index !== filteredKroky.length -1">\\</span>
                    <br><br>
                  </div>
                  <h1>{{ currentLanguage === 'SK' ? 'Stavy' : 'States' }}</h1>
                  <div v-for="(krok,index) in stavy" :key="index">
                    <span v-if="index == 0">s_{{ index }} {{ krok }} <span v-if="index !== stavy.length -1">\\</span></span>
                    <span v-if="index > 0">s_{{ index }} = s_{{ index-1 }}{{ krok }} <span v-if="index !== stavy.length -1">\\</span></span>
                  </div>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-row>
          <v-row class="controls">
            <v-col cols="auto" class="d-none d-md-flex">
              <v-btn variant="tonal" v-if="showStepping " @click="previousStep" style="margin-right: 10px; padding: 5px;">{{ currentLanguage === 'SK' ? 'Naspať' : 'Previous' }} <v-icon color="info">mdi-chevron-left</v-icon></v-btn>
              <v-btn variant="tonal" v-if="showStepping " @click="nextStep" style="margin-right: 10px;padding: 5px;">{{ currentLanguage === 'SK' ? 'Ďalej' : 'Next' }}<v-icon color="info">mdi-chevron-right</v-icon></v-btn>
              <v-btn variant="elevated" v-if="showOutput && showStepping" @click="toggleGuessing" style="padding: 5px;">{{ currentLanguage === 'SK' ? 'Odhadnúť ďalšiu konfiguráciu' : 'Guess Next Configuration' }}</v-btn>
            </v-col>
            <v-col cols="auto" class="d-md-none">
              <v-row>
                <v-col cols="auto">
                  <v-btn variant="elevated" v-if="showOutput && showStepping" @click="toggleGuessing" style="margin-right: 10px; padding: 5px;" >{{ currentLanguage === 'SK' ? 'Odhadnúť ďalšiu konfiguráciu' : 'Guess Next Configuration' }}</v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn variant="tonal" v-if="showStepping" @click="previousStep" style="margin-right: 10px; padding: 5px;">{{ currentLanguage === 'SK' ? 'Naspäť' : 'Previous' }}</v-btn>
                  <v-btn variant="tonal" v-if="showStepping" @click="nextStep" style="padding: 5px;">{{ currentLanguage === 'SK' ? 'Ďalej' : 'Next' }}</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="output-container" v-if="showOutput && showFullOutput"  :style="heightNastavenieOutput" style="margin:20px;max-height: 590px;">
            <v-btn v-if="showFullOutput" icon @click="fullscreenDialog = true" style="margin-left: 10px;">
                <v-icon>mdi-fullscreen</v-icon>
            </v-btn>
            <div class="output-row" v-for="index2 in Array.from({length: pocetKrokov+1}, (_, i) => i)" :key="index2">
              <span style="display: inline-block">
                <latex v-if="!showFullLine[index2]" :latex-string="`\\alpha_{${index2}} = \\langle {${prvaCastPrekladu[index2]}}`" style="display: inline-block;"/>
                <span v-if="!showFullLine[index2] && pocetInstrukciiPrvyKrok[index2] > 4" @click="toggleText(index2)" style="cursor: pointer;display: inline-block; color:#1867c0;font-size: 30px;"> ... </span>
                <latex v-if="!showFullLine[index2] && index2 < pocetKrokov" :latex-string="`, {${zasobnikAStav[index2]}}, {${stavKazdyKrok[index2]}}\\rangle \\Rightarrow \\alpha_{${index2+1}}`" style="display: inline-block;"/>
                <latex v-if="!showFullLine[index2] && index2 >= pocetKrokov" :latex-string="`, {${zasobnikAStav[index2]}}, {${stavKazdyKrok[index2]}} \\rangle`" style="display: inline-block;"/>

                
                <latex v-if="showFullLine[index2] && index2 < pocetKrokov" :latex-string="`\\alpha_{${index2}} = \\langle {${prvaCastPrekladu[index2] + ' : ' + druhaCastPrekladu[index2]}}, {${zasobnikAStav[index2]}}, {${stavKazdyKrok[index2]}} \\rangle \\Rightarrow \\alpha_{${index2+1}}`" style="display: inline-block;"/>
                <latex v-if="showFullLine[index2] && index2 >= pocetKrokov" :latex-string="`\\alpha_{${index2}} = \\langle {${prvaCastPrekladu[index2] + ' : ' + druhaCastPrekladu[index2]}}, {${zasobnikAStav[index2]}}, {${stavKazdyKrok[index2]}} \\rangle`" style="display: inline-block;"/>
              </span> 
            </div>
          </v-row>
          <v-row ref="outputContainer"  class="output-container" v-if="showOutput && showStepping" style="position: relative;margin:20px;max-height: 554px;" :style="heightNastavenieOutput">
            <div v-if="showGuessing" class="output-row" style="position: sticky;top: 0;background-color: white; z-index: 5;">
              <v-row align="center" justify="start" no-gutters>
                <v-col cols="auto" >
                  <latex :latex-string="`\\alpha_{${currentIndex+1}} = \\langle`"></latex>
                </v-col>
                <v-col cols="12" sm="3" class="d-flex align-center guessing" >
                  <v-text-field v-model="guessInstrukcia" :placeholder="currentLanguage === 'SK' ? 'Inštrukcia' : 'Instruction'">
                    <v-tooltip
                      activator="parent"
                      location="top"
                    >{{ currentLanguage === 'SK' ? 'Pre epsilon napíšte \epsilon' : 'For epsilon write \epsilon' }}</v-tooltip>
                  </v-text-field>
                  <span>..., </span>
                </v-col>
                <v-col cols="4" sm="2" class="d-flex align-center guessing">
                  <v-text-field v-model="guessZasobnik" placeholder="Zásobník">
                    <v-tooltip
                      activator="parent"
                      location="top"
                    >{{ currentLanguage === 'SK' ? 'Pre epsilon napíšte \epsilon' : 'For epsilon write \epsilon' }}</v-tooltip>
                  </v-text-field>
                  <span>, </span>
                </v-col>
                <v-col cols="5" sm="3" class="d-flex align-center guessing">
                  <v-text-field v-model="guessStav" placeholder="Stav">
                    <v-tooltip
                      activator="parent"
                      location="top"
                    >{{ currentLanguage === 'SK' ? 'Nezmenený stav zadávať ako sIndex, zmenený ako sIndex+1 = sIndex[ zmena ]' : 'Enter unchanged state as sIndex, changed state as sIndex+1 = sIndex[ change ]' }}</v-tooltip> 
                  </v-text-field>
                </v-col>
                <v-col cols="auto" class="d-flex align-center">
                  <latex v-if="currentIndex+1 == pocetKrokov" :latex-string="`\\rangle`"></latex>
                  <latex v-if="currentIndex+1 < pocetKrokov" :latex-string="`\\rangle \\Rightarrow \\alpha_{${currentIndex+2}}`"></latex>
                </v-col>
                <v-col cols="12">
                  <v-btn variant="elevated" @click="guessConfiguration" :disabled="currentIndex >= pocetKrokov">{{ currentLanguage === 'SK' ? 'Overiť' : 'Guess' }}<v-icon color="info">mdi-lightbulb</v-icon></v-btn>
                </v-col>
                <v-col cols="12">
                  <p v-if="correctGuess !== null" :type="correctGuess ? 'success' : 'error'" :style="correctGuess? 'color:green;' : 'color:red;'">
                    <template v-if="correctGuess">
                      <span style="display: inline-block;">{{ currentLanguage === 'SK' ? 'Tip pre konfiguráciu ' : 'Configuration guess for ' }}</span> <latex :latex-string="`\\alpha_{${uhadnutieCislo}}` " style="display: inline-block;"></latex> <span style="display: inline-block;">{{ currentLanguage === 'SK' ? ' bol správny!' : ' was correct!' }}</span>
                    </template>
                    <template v-else>
                      <span style="display: inline-block;">{{ currentLanguage === 'SK' ? 'Tip pre konfiguráciu ' : 'Configuration guess for ' }}</span> <latex :latex-string="`\\alpha_{${uhadnutieCislo}}` " style="display: inline-block;"></latex><span style="display: inline-block;">{{ currentLanguage === 'SK' ? ' bol nesprávny!' : ' was incorrect!' }}</span>
                    </template>
                  </p>
                </v-col>
                <v-divider style="margin-top:20px"></v-divider>
              </v-row>
            </div>
            <div  class="output-row" v-for="index3 in Array.from({length: currentIndex + 1}, (_, i) => i)" :key="index3">
              <span style="display: inline-block">
                <latex v-if="!showFullLine[index3]" :latex-string="`\\alpha_{${index3}} = \\langle {${prvaCastPrekladu[index3]}}`" style="display: inline-block;"/>
                <span v-if="!showFullLine[index3] && pocetInstrukciiPrvyKrok[index3] > 4" @click="toggleText(index3)" style="cursor: pointer;display: inline-block;color:#1867c0;font-size: 30px;"> ... </span>
                <latex v-if="!showFullLine[index3] && index3 < pocetKrokov" :latex-string="`, {${zasobnikAStav[index3]}}, {${stavKazdyKrok[index3]}}\\rangle \\Rightarrow \\alpha_{${index3+1}}`" style="display: inline-block;"/>
                <latex v-if="!showFullLine[index3] && index3 >= pocetKrokov" :latex-string="`, {${zasobnikAStav[index3]}}, {${stavKazdyKrok[index3]}} \\rangle`" style="display: inline-block;"/>

                
                <latex v-if="showFullLine[index3] && index3 < pocetKrokov" :latex-string="`\\alpha_{${index3}} = \\langle {${prvaCastPrekladu[index3] + ' : ' + druhaCastPrekladu[index3]}}, {${zasobnikAStav[index3]}}, {${stavKazdyKrok[index3]}} \\rangle \\Rightarrow \\alpha_{${index3+1}}`" style="display: inline-block;"/>
                <latex v-if="showFullLine[index3] && index3 >= pocetKrokov" :latex-string="`\\alpha_{${index3}} = \\langle {${prvaCastPrekladu[index3] + ' : ' + druhaCastPrekladu[index3]}}, {${zasobnikAStav[index3]}}, {${stavKazdyKrok[index3]}} \\rangle`" style="display: inline-block;"/>
              </span> 
            </div>
          </v-row>

          <v-dialog v-model="fullscreenDialog" hide-overlay transition="dialog-bottom-transition">
            <v-card>
              <v-toolbar dark color="primary" flat>
                <v-btn icon dark @click="fullscreenDialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>{{ currentLanguage === 'SK' ? 'Detailný výstup' : 'Detailed output' }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn dark @click="showStavy = !showStavy">{{ currentLanguage === 'SK' ? 'Zobraziť stavy' : 'Show States' }}</v-btn>
              </v-toolbar>
              <v-expand-transition>
                  <v-card class="flex-shrink-0" v-if="showStavy" flat style="max-width: 400px; position: absolute; top: 64px; right:0; z-index: 5; border: 1px solid black">
                    <v-card-title>{{ currentLanguage === 'SK' ? 'Stavy' : 'States' }}</v-card-title>
                    <v-table >
                      <tbody >
                        <tr v-for="(state,index6) in filtrovaneStavy" :key="index6">
                            <td v-if="index6 == 0" style="max-width:200px">
                              <latex :latex-string="`s_{${index6}} ${state}`"></latex>
                            </td>
                            <td v-if="index6 !== 0" style="max-width:200px">
                              <latex :latex-string="`s_{${index6}} = s_{${index6-1}} ${state}`"></latex>
                            </td>
                          </tr>
                      </tbody>
                    </v-table>
                  </v-card>
                </v-expand-transition>
              <v-card-text  style="height: calc(100% - 64px); overflow-y: auto;">
                <div class="output-row" v-for="index2 in Array.from({length: pocetKrokov+1}, (_, i) => i)" :key="index2">
                  <span style="display: inline-block">
                    <latex v-if="index2 < pocetKrokov" :latex-string="`\\alpha_{${index2}} = \\langle {${kroky[index2]}}, {${zasobnikAStav[index2]}}, {${stavKazdyKrok[index2]}} \\rangle \\Rightarrow \\alpha_{${index2+1}}`" style="display: inline-block;"/>
                    <latex v-if="index2 >= pocetKrokov" :latex-string="`\\alpha_{${index2}} = \\langle {${kroky[index2]}}, {${zasobnikAStav[index2]}}, {${stavKazdyKrok[index2]}} \\rangle`" style="display: inline-block;"/>
                  </span> 
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
        <div v-if="selectedTitle == 'Preklad kódu'">
          <v-row class="controls" justify="space-between" style="position: relative;">
          <v-col >
            <v-row>
              <v-col  cols="auto" >
                <v-btn variant="elevated"  @click="hideStepping2" :class="!showStepping2 ? 'showWhole' : 'showPart'" style="margin-right: 10px; padding: 5px;">{{ currentLanguage === 'SK' ? 'Výsledok' : 'Whole translation' }}</v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn variant="elevated" style="padding: 5px;" @click="enableStepping2" :class="showStepping2 ? 'showWhole' : 'showPart'">{{ currentLanguage === 'SK' ? 'Krokovať' : 'Step by step' }}</v-btn>
              </v-col>   
            </v-row>
          </v-col>
        </v-row>
          <v-row class="controls">
          <v-col cols="auto">
            <v-btn variant="tonal" v-if="showStepping2" @click="previousStep2" style="margin-right: 10px; padding: 5px;">{{ currentLanguage === 'SK' ? 'Naspať' : 'Previous' }}<v-icon color="info">mdi-chevron-left</v-icon></v-btn>
            <v-btn variant="tonal" v-if="showStepping2" @click="nextStep2" style="margin-right: 10px;padding: 5px;">{{ currentLanguage === 'SK' ? 'Ďalej' : 'Next' }}<v-icon color="info">mdi-chevron-right</v-icon></v-btn>
          </v-col>
        </v-row>
        <v-row class="output-container" :style="heightNastavenieOutput" style="margin:20px;">
          <div v-for="(step, index) in displayedSteps" :key="index">
              <span v-if="index == 0"> <latex :latexString="step"/></span>
              <span v-if="index > 0"> <latex :latexString="`= ${step}`"/></span>
            </div>
        </v-row>
        </div>
      </v-col>
    </v-row>
    
    <CelkovyPreklad @update:preklad="handlePreklad" :poslednyKrok="output" :druhyKrok="druhyKrok"/>
    <v-row class="ma-3" style="margin-top: 20px !important;" v-if="this.selectedTitle === 'Vykonanie kódu' && showOutput">
      <v-col cols="12">
          <h3 class="text-center">{{ currentLanguage === 'SK' ? 'Preklad programu do inštrukcií abstraktného stroja:' : 'Translation of the program into abstract machine instructions:' }}</h3>
      </v-col>
      <v-col cols="12" class="overflow1">
            <span > <latex :latexString="`${lastPreklad}`" /></span>
      </v-col>
    </v-row>
  </div> 
</template>

<script>
import MonacoEditor from './components/MonacoEditor.vue';
import Latex from './components/Latex.vue';
import Pomocnik from './components/Pomocnik.vue';
import PomocnikEN from './components/PomocnikEN.vue';
import CelkovyPreklad from './components/CelkovyPreklad.vue';
import html2canvas from 'html2canvas';

export default {
  name: 'App',
  components: {
    MonacoEditor,
    Latex,
    Pomocnik,
    PomocnikEN,
    CelkovyPreklad
  },
  data() {
    return {
      menu2:false,
      currentLanguage: 'SK',
      languages:[
        {title: 'SK'},
        {title: 'EN'}
      ],
      lastPreklad: '',
      uhadnutieCislo :0,
      displayedSteps: [],
      showStepping2 : true,
      currentIndex2: 0,
      selectedTitle: 'Preklad kódu', 
      items: [
        { title: 'Preklad kódu' },
        { title: 'Vykonanie kódu' }
      ],
      menu: false,
      preklad: [],
      alert4: false,
      show4: false,
      correctGuess: null,
      infoShow: false,
      instrukciaKazdyKrok: [],
      stavKazdyKrok2 : [],
      guessInstrukcia: '',
      guessZasobnik: '',
      guessStav:'',
      showGuessing: false,
      loopBranchCount: 0,
      stackDialog: false,
      stateDialog: false,
      screenWidth: window.innerWidth,
      exportDialog: false,
      exportContent: 'content1',
      showFullLine: {},
      pocetInstrukciiPrvyKrok: [],
      prvaCastPrekladu: [],
      druhaCastPrekladu: [],
      showStack: false,
      showStates: false,
      editorValue:'',
      fontSizes: [12,18, 24, 36,48,72],
      selectedFontSize: 18,
      output: '',
      showOutput: false,
      showStepping: false,
      druhyKrok: null,
      ast: null,
      variables: [],
      premenneNaZaciatku: [],
      variableName: '',
      variableValue: '',
      kroky: [],
      stavy: [],
      stav: [],
      stavCounter: 0,
      zasobnik: [],
      show: false,
      show2: false,
      show3: false,
      zasobnikShow: [],
      premenna: [],
      currentIndex: 0,
      showFullOutput: false,
      headers: [
        { text: 'Názov', value: 'name' },
        { text: 'Hodnota', value: 'value' }
      ],
      stavKazdyKrok: [],
      zasobnikAStav: [],
      alert: false,
      alert2: false,
      alert3: false,
      fullscreenDialog: false,
      showStavy: false,
      premenne: [],
      premenneFetch: [],
      showDialog: false,
      tab:null,
      instrukcieKrok: [],
      tabulkoveData: [],
      showPreviousSteps: false,
      content: 'content1',
      pocetKrokov: 0,
    };
  },
  computed:{
    filteredKroky() {
      return this.kroky.slice(0, this.kroky.length - 1);
    },
    filtrovaneStavy(){
      let krok = this.currentIndex;
      let pocetStavov = this.stavKazdyKrok2[krok];
      if (pocetStavov == undefined)
        pocetStavov = this.stavKazdyKrok2[krok-1];
      return this.stavy.slice(0,pocetStavov+1);
    },
    widthChange() {
      return this.screenWidth < 370 ? { padding: '5px' } : {};
    },
    heightNastavnieEditor(){
      return this.screenWidth <= 600 ? { height: '300px'} : {};
    },
    heightNastavenieOutput(){
      return this.screenWidth <= 600 ? {height: '400px',
                                        margin : '0px'} : {};
    },
    buttonStyle(){
      return this.screenWidth < 1280 ? {marginTop: '10px'} : {marginTop: '0px'};
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    selectLanguage(language){
      this.currentLanguage = language.title;
      this.menu2 = false;
    },
    enableStepping2() {
      this.showStepping2 = true;
      this.displayedSteps =[];
      this.currentIndex2 = 0;
      this.displayedSteps.push(this.preklad[this.currentIndex2]);
    },
    hideStepping2() {
      this.showStepping2 = false;
      this.displayedSteps = this.preklad;
    },
    nextStep2() {
      if (this.currentIndex2 < this.preklad.length-1) {
        this.currentIndex2++;
        this.displayedSteps.push(this.preklad[this.currentIndex2]);
        setTimeout(() => {
            this.scrollToBottom();
        }, 0);
      }
    },
    previousStep2() {
      if (this.currentIndex2 > 0) {
        this.currentIndex2--;
        this.displayedSteps.pop();
      }
    },
    selectItem(item) {
      this.selectedTitle = item.title; 
      this.menu = false;
      if(this.selectedTitle == 'Preklad kódu'){
        this.enableStepping2();
      }else{
        this.currentIndex = 0;
        this.enableStepping();
      }
    },
    toggleGuessing(){
      this.showGuessing = !this.showGuessing;
      this.guessInstrukcia = '';
      this.guessZasobnik = '';
      this.guessStav = '';
      this.correctGuess = null;
    },
    guessConfiguration(){
      let zasobnikNaCheck = this.zasobnikAStav[this.currentIndex+1].replace(/\s+/g,'');
      let stavNaCheck = this.stavKazdyKrok[this.currentIndex+1].replace(/\s+/g,'');
      let instrukciaNaCheck = this.instrukciaKazdyKrok[this.currentIndex+1].replace(/\s+/g,'');
      let zasobnikUzivatela = this.guessZasobnik.split(':')
        .map(segment => {
          if (segment.trim() === '\\epsilon') {
            return segment;
          } else {
            return `\\mathbf{${segment.trim()}}`;
          }
        })
        .join(':')
        .replace(/\\epsilon/g, '\u03B5').replace(/—|–|―|‒|⸺|⸻|ー/g, "-")
        .replace(/\s+/g,'');
      
      let stavUzivatela = this.guessStav
      .replace(/->/g, '\\mapsto')
      .replace(/\d+/g, match => `\\mathbf{${match}}`)
      .replace(/s\\mathbf{(\d+)}/g, 's_$1').replace(/—|–|―|‒|⸺|⸻|ー/g, "-")
      .replace(/\s+/g,'');
      
      let instrukciaUzivatela = this.guessInstrukcia.replace(/\\epsilon/g, '\u03B5').replace(/—|–|―|‒|⸺|⸻|ー/g, "-").replace(/\s+/g,'');

      
      if((instrukciaNaCheck != instrukciaUzivatela) || (zasobnikNaCheck != zasobnikUzivatela) || (stavNaCheck != stavUzivatela)){
        this.correctGuess = false;
      }else{
        this.correctGuess = true;
      }
      this.uhadnutieCislo = this.currentIndex+1;
      this.nextStep();
    },
    showStackDialog(){
      this.stackDialog = true;
    },
    showStateDialog(){
      this.stateDialog = true;
    },
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
    showExportPopup(){
      this.exportDialog = true;
    },
    exportToImage() {
      this.$nextTick(() => {
        html2canvas(this.$refs.exportContent).then(canvas => {
          let link = document.createElement('a');
          link.download = 'export.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
          link.delete;
        });
      });
    },
    scrollToBottom() {
      const container = document.querySelector('.output-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    },
    toggleText(index) {
      if (this.showFullLine[index] === undefined) {
        this.showFullLine[index] = true; 
      } else {
        this.showFullLine[index] = !this.showFullLine[index];
      }
    },
    wrapKeywordsWithLatex(text) {
      const keywords = ["PUSH", "FETCH", "ADD", "MULT", "SUB", "TRUE", "FALSE", "EQ", "LE", "NEG", "AND", "STORE", "EMPTYOP", "BRANCH", "LOOP"];
      const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
      
      text = text.replace(regex, '\\mathtt{$1}');
      text = text.replace(/-/g, '\\mhyphen');
      text = text.replace(/:/g, ' : ');
      text = text.replace(/\(/g, ' ( ');
      text = text.replace(/\)/g, ' ) ');
      text = text.replace(/,/g, ' , ');

      const parts = text.split(' : ');

      if (parts.length > 1) {
        this.pocetInstrukciiPrvyKrok.push(parts.length);
        this.prvaCastPrekladu.push(parts.slice(0, 1).join(' : '));
        this.druhaCastPrekladu.push(parts.slice(1).join(' : '));
        return parts.join(' : ');
      }
      this.pocetInstrukciiPrvyKrok.push(parts.length);
      this.prvaCastPrekladu.push(parts.join(' : '));
      this.druhaCastPrekladu.push("0");
      return parts.join(' : ');
    },
    updateFontSize(value){
      this.selectedFontSize = value;
    },
    ziskaniePremennych(strom){
      let regex = /FETCH - ([^:()]+)/g;
      let match;
      this.premenneFetch = [];
      while ((match = regex.exec(strom)) !== null) {
        let variable = match[1].trim();
        if(!this.premenneFetch.includes(variable))
          this.premenneFetch.push(variable);
      }
    },
    handleDruhyKrok(druhyKrok){
      this.druhyKrok = druhyKrok;
    },
    handleAst(newAst){
      this.ast = newAst;
      this.ziskaniePremennych(this.ast);
    },
    handlePreklad(newPreklad){
      this.preklad = newPreklad;
      this.lastPreklad = this.preklad[this.preklad.length-1];
      this.enableStepping2();
    },
    displayOutput() {
      this.displayedSteps= [],
      this.showStepping2 = true,
      this.currentIndex= 0,
      this.selectedTitle= 'Preklad kódu',
      this.showStack = false;
      this.showStates = false;
      this.instrukciaKazdyKrok = [];
      this.stavKazdyKrok2 = [];
      this.showGuessing = false;
      this.loopBranchCount = 0;
      this.updateInitialState();
      this.kroky = [];
      this.stavCounter = 0;
      this.zasobnik = [];
      this.zasobnikShow = [];
      this.output = this.ast; 
      this.showStepping = false
      this.stavKazdyKrok = [];
      this.zasobnikAStav = [];
      this.pocetKrokov = 0;
      this.show2 = false;
      this.alert2 = false;
      this.tabulkoveData = [];
      this.instrukcieKrok =[];
      this.showFullLine = {};
      this.pocetInstrukciiPrvyKrok = [];
      this.prvaCastPrekladu = [];
      this.druhaCastPrekladu = [];
      if(this.output != null){ 
        let vysledok = this.vyhodnotenieVyrazu();
        if(this.pocetKrokov > 1000){
          this.show3 = true;
          this.alert3 = true;
          this.showOutput = false;
        }else{
          this.show3 = false;
          this.alert3 = false;
          if(vysledok === 0){
            this.show2 = false;
            this.alert2 = false;
            this.instrukcieKrok.push('\u03B5');
            this.showOutput = true;
            this.variables = this.premenneNaZaciatku.map(item => ({ ...item }));
            this.enableStepping2();
          }else {
            this.show2 = true;
            this.alert2 = true;
            this.showOutput = false;
          }
        }
      }else{
        this.showOutput = false;
      }
    },
    enableStepping() {
      this.showFullLine ={};
      this.showStepping = true; 
      this.showFullOutput = false; 
      this.currentIndex = 0;
    },
    hideStepping() {
      this.showGuessing = 0;
      this.showFullLine ={};
      this.showStepping = false;
      this.showFullOutput = true;
      this.currentIndex = this.kroky.length -1;
      this.showStack = false;
    },
    nextStep() {
      if (this.currentIndex < this.kroky.length - 1) {
        this.currentIndex++;
        setTimeout(() => {
            this.scrollToBottom();
        }, 0);
      }
    },
    previousStep() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    updateInitialState() {
      this.stavy = [];
      this.variables = this.variables.filter(variable => variable.name.trim() && variable.value.trim());
      const stateString = this.variables.map((variable, index, array) => {
        let variableText = `${variable.name} \\mapsto \\mathbf{${variable.value}}`;
        if (index < array.length - 1) {
          variableText += ',';
        }
        if (index % 2 === 0 && index !== array.length - 1) 
          variableText += ' \\\\'; 
        return variableText;
      }).join(''); 
      if(stateString === ''){
        this.stavy[0] = `= [ ]`;
      }
      else{
        this.stavy[0] = `= [${stateString}]`;
      }
        
    },
    addOrUpdateVariable(name, value) {
      const varIndex = this.variables.findIndex(v => v.name === name);
      if (varIndex !== -1) {
        this.variables[varIndex].value = value;
      } else {
        this.variables.push({ name, value });
      }
    },
    addVariable() {
      if(isNaN(this.variableValue)){
        this.show = true;
        this.alert = true;
      } else if (this.variableName.trim() && this.variableValue.trim()) {
        const existingVariableIndex = this.variables.findIndex(v => v.name === this.variableName.trim());

        if (existingVariableIndex !== -1) {
          this.variables[existingVariableIndex].value = this.variableValue.trim();
          if(this.stavCounter === 0){
            this.addOrUpdateVariable(this.variableName.trim(),this.variableValue.trim());
          }
        } else {
          this.variables.push({
            name: this.variableName.trim(),
            value: this.variableValue.trim()
          });
          }
        }
        this.variableName = '';
        this.variableValue = '';
        this.show = false;
        this.alert = false;
        this.show2 = false;
        this.alert2 = false;
    },
    addOrUpdateVariable2(name,value){
      const varIndex = this.premenneNaZaciatku.findIndex(v => v.name === name);
      if (varIndex !== -1) {
        this.premenneNaZaciatku[varIndex].value = value;
      } else {
        this.premenneNaZaciatku.push({name, value });
      }
    },
    addVariable2() {
      if(isNaN(this.variableValue)){
        this.show = true;
        this.alert = true;
      }else if(!/^[a-zA-Z]+$/.test(this.variableName)){
        this.show4 = true;
        this.alert4 = true;
      } else if (this.variableName.trim() && this.variableValue.trim()) {
        const existingVariableIndex = this.premenneNaZaciatku.findIndex(v => v.name === this.variableName.trim());

        if (existingVariableIndex !== -1) {
          this.premenneNaZaciatku[existingVariableIndex].value = this.variableValue.trim();
          if(this.stavCounter === 0){
            this.addOrUpdateVariable2(this.variableName.trim(), this.variableValue.trim());
          }
        } else {
          this.premenneNaZaciatku.push({
            name: this.variableName.trim(),
            value: this.variableValue.trim()
          });
        }
        this.variableName = '';
        this.variableValue = '';
        this.show = false;
        this.alert = false;
        this.show2 = false;
        this.alert2 = false;
        this.show4 = false;
        this.alert4 = false;
        this.variables = this.premenneNaZaciatku.map(item => ({ ...item }));
      }
    },
    removeVariable(index){
      this.premenneNaZaciatku.splice(index,1);
      this.variables = this.premenneNaZaciatku.map(item => ({ ...item }));
    },
    vyhodnotenieVyrazu() {
      let zasAStav = `\u03B5 `.trim();
      let krok = `${this.output}`.trim();
      krok = this.wrapKeywordsWithLatex(krok);
      this.kroky.push(krok);
      this.zasobnikAStav.push(zasAStav);
      this.stavKazdyKrok.push(`s_${this.stavCounter}`);
      this.premenna = this.splitCommands(this.output);
      while (this.premenna.length > 0) {
        this.pocetKrokov++;
        if(this.pocetKrokov > 1000){
          break;
        }
        const command = this.premenna.shift(); 
        
        let vysledok = this.spracovanie(command);
        if(vysledok === 1) return 1;
        if(this.zasobnikShow.length === 0){
          if(this.premenna.length ===0 ){
            krok = `\u03B5`.trim();
            zasAStav = `\u03B5`.trim();
          }else{
            krok = `${this.premenna.join(' : ')}`.trim();
            zasAStav = `\u03B5`.trim();
          }
        }else{
          let zas = this.zasobnikShow.slice().reverse().map(item => `\\mathbf{${item}}`).join(' : ');

          krok = `${this.premenna.join(' : ')}`.trim();
          zasAStav = `${zas} `.trim();
        }
        if (this.premenna.length === 0 && this.zasobnikShow.length > 0) {
          let zas = this.zasobnikShow.reverse().map(item => `\\mathbf{${item}}`).join(' : ');

          krok = `\u03B5`.trim();
          zasAStav = `${zas} `.trim();
        }
        
        krok = this.wrapKeywordsWithLatex(krok);
        this.kroky.push(krok); 
        this.zasobnikAStav.push(zasAStav);
      }
      this.instrukciaKazdyKrok.push(`\u03B5`.trim());
      return 0;
    },
    spracovanie(command) {
      this.stavKazdyKrok.push(`s_${this.stavCounter}`);
      this.stavKazdyKrok2.push(this.stavCounter);
      let parts = 0;
      let operation = 0;
      let variable = 0;
      if(command.startsWith('LOOP')) {
        operation = 'LOOP';
        this.instrukcieKrok.push(operation);
      }else if(command.startsWith('BRANCH')){
        operation = 'BRANCH';
        this.instrukcieKrok.push(operation);
      } 
      else {
        this.instrukciaKazdyKrok.push(command);
        this.instrukcieKrok.push(command);
        parts = command.split(' - ');
        operation = parts[0];
        variable = parts.length > 1 ? parts[1] : null;
        
      }
      let cislo1 = 0;
      let cislo2 = 0;
      let vysledok = 0;
      switch (operation){
        case 'FETCH':
          let variableEntry = this.variables.find(v => v.name === variable);
          let value = 0;
          if (!variableEntry) {
            return 1;
          } else{
            value = variableEntry.value;
          }
          this.zasobnik.push(value);
          this.zasobnikShow.push(value);
          break;
        case 'PUSH':
          this.zasobnik.push(Number(variable));
          this.zasobnikShow.push(Number(variable));
          break;
        case 'ADD':
          cislo1 = this.zasobnik.pop();
          cislo2 = this.zasobnik.pop();
          this.zasobnikShow.pop();
          this.zasobnikShow.pop();
          vysledok = Number(cislo1) + Number(cislo2);
          this.zasobnik.push(vysledok);
          //this.zasobnikShow = [];
          this.zasobnikShow.push(vysledok);
          break;
        case 'MULT':
          cislo1 = this.zasobnik.pop();
          cislo2 = this.zasobnik.pop();
          this.zasobnikShow.pop();
          this.zasobnikShow.pop();
          vysledok = Number(cislo1) * Number(cislo2);
          this.zasobnik.push(vysledok);
          this.zasobnikShow.push(vysledok);
          break;
        case 'SUB':
          cislo1 = this.zasobnik.pop();
          cislo2 = this.zasobnik.pop();
          this.zasobnikShow.pop();
          this.zasobnikShow.pop();
          vysledok = Number(cislo1) - Number(cislo2);
          this.zasobnik.push(vysledok);
          //this.zasobnikShow = [];
          this.zasobnikShow.push(vysledok);
          break;
        case 'TRUE':
          this.zasobnik.push("tt");
          //this.zasobnikShow = [];
          this.zasobnikShow.push("tt");
          break;
        case 'FALSE':
          this.zasobnik.push("ff");
          //this.zasobnikShow = [];
          this.zasobnikShow.push("ff");
          break;
        case 'EQ':
          cislo1 = this.zasobnik.pop();
          cislo2 = this.zasobnik.pop();
          this.zasobnikShow.pop();
          this.zasobnikShow.pop();
          if(Number(cislo1) === Number(cislo2)){
            this.zasobnik.push("tt");
            this.zasobnikShow.push("tt");
          }
          else{
            this.zasobnik.push("ff");
            this.zasobnikShow.push("ff");
          } 
          break;
        case 'LE':
          cislo1 = this.zasobnik.pop();
          cislo2 = this.zasobnik.pop();
          this.zasobnikShow.pop();
          this.zasobnikShow.pop();
          if(cislo1 <= cislo2){
            this.zasobnik.push("tt");
            this.zasobnikShow.push("tt");
          }
          else{
            this.zasobnik.push("ff");
            this.zasobnikShow.push("ff");
          } 
          break;
        case 'NEG':
          cislo1 = this.zasobnik.pop();
          this.zasobnikShow.pop();
          if(cislo1 === "ff"){
            this.zasobnik.push("tt");
            this.zasobnikShow.push("tt");
          }
          else {
            this.zasobnik.push("ff");
            this.zasobnikShow.push("ff");
          }
          break;
        case 'AND':
          cislo1 = this.zasobnik.pop();
          cislo2 = this.zasobnik.pop();
          this.zasobnikShow.pop();
          this.zasobnikShow.pop();
          if(cislo1 === "tt" && cislo2 === "tt"){
            this.zasobnik.push("tt");
            //this.zasobnikShow = [];
            this.zasobnikShow.push("tt");
          }
          else {
            this.zasobnik.push("ff");
            //this.zasobnikShow = [];
            this.zasobnikShow.push("ff");
          }
          break;
        case 'STORE':
          cislo1 = this.zasobnik.pop();
          this.zasobnikShow.pop();
          //this.zasobnikShow = [];
          this.variableName = variable;
          this.variableValue = cislo1.toString();
          this.addVariable();
          
          this.stavCounter++;
          const stateString = `[${variable} \\mapsto \\mathbf{${cislo1}}]`;
          this.stavy[this.stavCounter] = stateString;
          this.stavKazdyKrok2[this.stavKazdyKrok2.length-1] = this.stavCounter;
          this.stavKazdyKrok[this.stavKazdyKrok.length-1] = `s_${this.stavCounter} = s_${this.stavCounter-1}${stateString}`;
          this.stav = [];
          
          break;
        case 'EMPTYOP':
          break;       
          case 'BRANCH':
            this.loopBranchCount++;
            cislo1 = this.zasobnik.pop();
            this.zasobnikShow.pop();
            let [telo1, telo2] = this.splitBranchContent(command);
            let daco = cislo1 === "tt" ? telo1.trimStart() : telo2.trimStart();
            let noveInstrukcie = this.splitCommands(daco);
            this.instrukciaKazdyKrok.push(`BRANCH(${noveInstrukcie[0]}`);
            if(this.premenna.length === 0){
              this.premenna = noveInstrukcie;
            } else {
              
              this.premenna.unshift(...noveInstrukcie); 
            }
            break;
        case 'LOOP':   
          this.loopBranchCount++;
          let [podmienka, telo] = this.splitLoopContent(command);
          let cyklus = `${podmienka.trimStart()} : BRANCH(${telo}: ${command}, EMPTYOP)`;
          let idk = this.splitCommands(cyklus);
          this.instrukciaKazdyKrok.push(`LOOP(${idk[0]}`);
          if(this.premenna.length === 0 ){
            this.premenna = idk;
          }else{
            this.premenna.unshift(...idk);
          }
          break;         
      }
      return 0;
    },
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
    pasteExample(){
      this.alert = false;
      this.show1 = false;
      this.alert2 = false;
      this.show2 = false;
      this.aler3 = false;
      this.show3 = false;
      this.premenneNaZaciatku = [];
      let variableName = 'x';
      let variableValue = '4';
      this.premenneNaZaciatku.push({
            name: variableName.trim(),
            value: variableValue.trim()
      });
      this.variables = this.premenneNaZaciatku.map(item => ({ ...item }));
      this.updateInitialState();
      this.editorValue = 
        `i := 1;
while !(x = 1) do (
    i := i*x;
    x := x-1
)`;
    },
    triggerFileInput() {
      this.$refs.fileInput.click(); 
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.type === "text/plain") {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.editorValue = e.target.result; 
          
        };
        reader.readAsText(file);
        
      } else {
        
      }
    }
  }
};
</script>