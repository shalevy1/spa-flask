<template>
  <div class="matchBar" v-if="!toolbarShow">
    <div>

      <div align="center" class="bg-prime p-2" style="height:60px">
        <div v-if="waiting === 0" :class="'buttonDiv text-prime bg-' + player" style="width: 60%" @click="playerReady(), emitWaiting(1)">
          <h5 class="mt-1"> Ready </h5>
        </div>

        <div v-if="waiting === 1" :class="'mb-2 text-center text-'+ player" style="height:60px">
          <b-icon icon="three-dots" animation="cylon" font-scale="3"></b-icon>
        </div>

        <div v-if="waiting === 2" :class="'mt-2 text-center text-'+ player" style="height:60px">
          <b-spinner class="align-middle"></b-spinner> &nbsp;&nbsp; <strong>Loading...</strong>
        </div>
      </div>

      <div class="bg-fade p-2 pb-4" v-if="waiting === 0">
        <b-row cols="2" :cols-xl="colGet">
          <b-col class="mt-3">
              <div align="center">
                <div class="headDiv" style="width:120px;display:inline-block">
                  Words
                </div>
                <div class="spinDiv">
                  <b-form-spinbutton v-if="player === 'p1'" v-model="words" min="6" max="30" step=2 style="width:120px"></b-form-spinbutton>
                  <div v-else class="redDiv">
                    <h5>{{words}}</h5>
                  </div>
                </div>
                <br>
              </div>

              <div align="center" v-if="testType[1] != 'y'">
                <div class="headDiv" style="width:120px">
                  Choices
                </div>
                <div class="spinDiv">
                <b-form-spinbutton v-if="player === 'p1'" v-model="choices" min="3" max="5" style="width:120px"></b-form-spinbutton>
                <div v-else class="redDiv">
                    <h5>{{choices}}</h5>
                </div>
                </div>
                <br>
              </div>

              <div align="center">

                <div class="headDiv" style="width:120px">
                  Timer
                </div>
                <div class="spinDiv">
                <b-form-spinbutton v-if="player === 'p1' && testType[1] === 'r'" v-model="timeReset" min="4" max="12" step=2  style="width:120px"></b-form-spinbutton>
                <b-form-spinbutton v-else-if="player === 'p1' && testType[1] === 'y'" v-model="timeReset" min="15" max="60" step=5 style="width:120px"></b-form-spinbutton>
                <div v-else class="redDiv">
                    <h5>{{timeReset}}</h5>
                </div>
              </div>
              <br>
              </div>
            </b-col>

            <b-col class="mt-3" align="center" v-if="player === 'p2'">
              <div class="headDiv"> Sort </div><br>
              <button class="buttonDiv bg-warn-light text-alert" style="width:120px" disabled> {{sortText}} </button>
              <br>
              <br>
              <div v-if="testType[1] === 'y'">
                <div class="headDiv" style="width:120px"> Assist </div><br>
                <button class="buttonDiv bg-safe text-alert" style="width:120px" disabled> {{spellingText}} </button>
                <br>
                <br>
                <div class="headDiv" style="width:120px"> Feedback </div><br>
                <button class="buttonDiv bg-grape-light text-alert" style="width:120px" disabled> {{feedbackText}} </button>
                <br>
                <br>
              </div>

            </b-col>

            <b-col class="mt-3" align="center" v-if="player === 'p1'">
              <div class="headDiv" style="width:120px"> Sort </div><br>
              <div>
                <b-form-radio-group
                  style="width:120px"
                  v-model="sort"
                  :options="sortOptions"
                  buttons
                  button-variant="outline-warn"
                  stacked
                ></b-form-radio-group>
              </div>
            </b-col>

            <b-col class="mt-3" align="center" v-if="player === 'p1' && testType[1] === 'y'">
              <div class="headDiv" style="width:120px"> Feedback </div><br>
              <div>
                <b-form-radio-group
                  style="width:120px"
                  v-model="feedback"
                  :options="feedbackOptions"
                  buttons
                  button-variant="outline-grape-light"
                  stacked
                ></b-form-radio-group>
              </div>
            </b-col>

            <b-col class="mt-3" align="center" v-if="player === 'p1' && testType[1] === 'y'">
              <div class="headDiv" style="width:120px"> Assist </div><br>
              <div>
                <b-form-radio-group
                  style="width:120px"
                  v-model="spelling"
                  :options="spellingOptions"
                  buttons
                  button-variant="outline-safe"
                  stacked
                ></b-form-radio-group>
              </div>
            </b-col>

        </b-row>
      </div>

    </div>
  </div>
</template>

<script>
import { getTypos, wordFix } from '@/utils'

export default {
  name: 'ToolbarMatch',
  props: {
    toolbarShow: Boolean,
    showToolbar: Boolean,
    showAnswers: Boolean,
    testType: String,
    p1: Number,
    p1name: String,
    p2: Number,
    p2name: String,
    player: String,
    waiting: Number,
    socket: Object
  },
  data () {
    return {
      wordsReset: '12',
      words: 12,
      choices: 4,
      timeReset: 6,
      retry: false,
      testItemsRoot: [],
      amendedList: [],
      toolbarSettings: {},
      optionsA: [{ value: null, text: '---' }],
      sound: 'sdEx',
      soundOptions: [
        { text: 'exam mode', value: 'sdEx' },
        { text: 'auto play', value: 'sdOn' },
        { text: 'None', value: 'sdOff' }
      ],
      spelling: 'blanks',
      spellingText: 'None',
      spellingOptions: [
        { value: 'blanks', text: '---' },
        { value: 'showFL', text: 'first/last' },
        { value: 'const', text: '+ vowels' },
        { value: 'vowels', text: '- vowels' },
        { value: 'scramble', text: 'scramble' },
        { value: 'all', text: 'show all' }
      ],
      sort: '---',
      sortText: '---',
      sortOptions: [
        { value: '---', text: '---' },
        { value: '*', text: 'star vocab' },
        { value: -1, text: 'harder' }
      ],
      feedback: 'fbConst',
      feedbackText: 'Constant',
      feedbackOptions: [
        { text: 'Constant', value: 'fbConst' },
        { text: 'Complete', value: 'fbComp' },
        { text: 'None', value: 'fbNone' }
      ],
      gameNames: {
        null: 'No Game Type',
        TransEng: 'English -> Chinese',
        TransCh: 'Chinese -> English',
        TypeMatch: 'Typing'
      }
    }
  },
  methods: {
    makeTest: function () {
      // reset variables
      // console.log('make test', this.sort)
      this.testItemsRoot = []

      // prepare amended list
      let vocabList = JSON.parse(this.stringItems)

      if (this.sort === '---') {
        this.amendedList = vocabList
      } else if (this.sort === -1) {
        for (let item in vocabList) {
          if (vocabList[item].totalScore <= -1) {
            this.amendedList.push(vocabList[item])
          }
        }
      } else if (this.sort === '*') {
        for (let item in vocabList) {
          if (this.starGet[vocabList[item].English]) {
            this.amendedList.push(vocabList[item])
          }
        }
      }
      if (this.amendedList.length < 6) {
        alert('Not enough words found to test this category')
        this.sort = '---'
        this.makeTest()
        // console.log('few words', this.amendedList)
      } else if (this.amendedList.length < this.words) {
        this.words = this.amendedList.length
        // console.log('few words', this.amendedList)
      }

      if (this.testType === 'TypeMatch') {
        this.makeSpelling()
      } else {
        this.makeChoices()
      }
    },
    makeChoices: function () {
      let question
      let answer
      let sdAns
      let sdQue

      if (this.testType.includes('Eng')) {
        question = 'English'
        answer = 'Chinese'
        sdQue = 'mp3en'
        sdAns = 'mp3ch'
      } else {
        question = 'Chinese'
        answer = 'English'
        sdQue = 'mp3ch'
        sdAns = 'mp3en'
      }

      let i = 0
      while (i < this.words) {
        var randomItem = this.amendedList[Math.floor(Math.random() * this.amendedList.length)]
        // console.log(this.testItems, randomItem)

        if (!this.checkDuplicate(randomItem)) {
          // console.log('pass', randomItem)
        } else {
          let choices = [{
            Question: randomItem[question],
            Answer: randomItem[answer],
            Gr: randomItem.Gr,
            sdQue: randomItem[sdQue],
            sdAns: randomItem[sdAns]
          }]
          let j = 1
          while (j < this.choices) {
            if (this.sound === 'sdTy') {
              choices.push({
                // typo mode not used yet but will need editting
                English: this.typoFix(randomItem.English),
                Gr: randomItem.Gr,
                sdEn: randomItem.mp3en,
                sdCh: randomItem.mp3ch,
                Chinese: randomItem.Chinese
              })
              j++
            } else {
              let randomChoice = this.amendedList[Math.floor(Math.random() * this.amendedList.length)]

              if (!choices.includes(randomChoice)) {
                choices.push({
                  Question: randomChoice[question],
                  Answer: randomChoice[answer],
                  Gr: randomChoice.Gr,
                  sdQue: randomChoice[sdQue],
                  sdAns: randomChoice[sdAns]
                })
                j++
              }
            }
          }
          let shuffChoices = this.shuffle(choices)
          this.testItemsRoot.push({
            Question: randomItem[question],
            Answer: randomItem[answer],
            Gr: randomItem.Gr,
            sdQue: randomItem[sdQue],
            sdAns: randomItem[sdAns],
            Choices: shuffChoices
          })
          i++
        }
      }

      if (this.testType[1] === 'I') {
        this.$emit('ready', {testItems: this.testItemsRoot, timeReset: this.timeReset})
      } else {
        this.socket.emit('ready', {room: (this.p1 + '-' + this.p2).toString(), player: this.player, testItems: this.testItemsRoot, timeReset: this.timeReset})
      }
      // console.log(this.testItemsRoot)
    },
    makeSpelling: function () {
      let i = 0
      while (i < this.words) {
        var randomItem = this.amendedList[Math.floor(Math.random() * this.amendedList.length)]
        // console.log(this.testItems, randomItem)
        if (!this.checkDuplicate(randomItem)) {
          // console.log('pass', randomItem)
        } else {
          // CHANGE MADE new code for spelling set up
          let spell = '              '
          if (this.spelling) {
            spell = wordFix(randomItem.English, this.spelling)
          }

          // console.log('SPELL', spell)
          this.testItemsRoot.push({
            English: randomItem.English,
            Chinese: randomItem.Chinese,
            Spelling: spell,
            Gr: randomItem.Gr,
            sdQue: randomItem.mp3en,
            sdAns: randomItem.mp3ch
          })
          i++
        }
      }

      this.socket.emit('ready', {room: (this.p1 + '-' + this.p2).toString(), player: this.player, testItems: this.testItemsRoot, timeReset: this.timeReset})
      // console.log(this.testItemsRoot)

      if (this.words < 6) {
        this.words = parseInt(this.wordsReset)
      }
    },
    typoFix: function (english) {
      // console.log('typos', english)
      let words = english.split(' ')
      let newString = ''
      for (let index in words) {
        newString += getTypos(words[index])
        newString += ' '
      }
      return newString
    },
    checkDuplicate: function (rand) {
      for (let testEntry in this.testItems) {
        //  console.log(this.testItems[testEntry].English, rand.English)
        if (this.testItems[testEntry].English === rand.English) {
          // console.log('found', rand)
          return false
        }
      }
      return true
    },
    shuffle: function (array) {
      // Fisher-Yates shuffle
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]
      }
      return array
    },
    goTo: function (arg) {
      this.$router.push(arg)
    },
    playerReady: function () {
      if (this.player === 'p1') {
        this.makeTest()
      } else {
        this.socket.emit('ready', {room: (this.p1 + '-' + this.p2).toString(), player: this.player, testItems: this.testItemsRoot, timeReset: null})
      }
    },
    settingsSend: function (arg) {
      console.log('settingsSend')
      let toolbarSettings = {
        type: this.testType,
        sound: this.sound,
        label: this.label,
        words: this.words,
        timeReset: this.timeReset,
        choices: this.choices,
        spelling: this.spelling,
        spellingText: this.spellingText,
        sortText: this.sortText,
        feedbackText: this.feedbackText,
        display: this.display,
        feedback: this.feedback
      }
      console.table(toolbarSettings)
      this.socket.emit('settingsData', {room: (this.p1 + '-' + this.p2).toString(), settingsData: toolbarSettings})
    },
    emitWaiting: function (arg) {
      this.$emit('waitUpdate', {
        wait: arg
      })
    },
    updateSettings: function () {
      if (localStorage.words) {
        this.words = localStorage.words
      }
      if (localStorage.choices) {
        this.choices = localStorage.choices
      }
      if (localStorage.feedback) {
        this.feedback = localStorage.feedback
      }
      if (localStorage.spelling) {
        this.spelling = localStorage.spelling
      }
      if (localStorage.sort) {
        this.sort = localStorage.sort
      }
      if (localStorage.timeReset) {
        this.timeReset = localStorage.timeReset
      }
    }
  },
  watch: {
    words: function () {
      localStorage.setItem('words', this.words)
      if (this.player === 'p1') {
        this.settingsSend()
      }
    },
    choices: function () {
      localStorage.setItem('choices', this.choices)
      if (this.player === 'p1') {
        this.settingsSend()
      }
    },
    timeReset: function () {
      if (this.player === 'p1') {
        localStorage.setItem('timeReset', this.timeReset)
        this.settingsSend()
      }
    },
    feedback: function () {
      let object = this.feedbackOptions.filter(element => element.value === this.feedback)
      console.log(object)
      this.feedbackText = object[0].text
      if (this.player === 'p1') {
        localStorage.setItem('feedback', this.feedback)
        this.settingsSend()
      }
    },
    spelling: function () {
      let object = this.spellingOptions.filter(element => element.value === this.spelling)
      console.log(object)
      this.spellingText = object[0].text
      if (this.player === 'p1') {
        localStorage.setItem('spelling', this.spelling)
        this.settingsSend()
      }
    },
    sort: function () {
      let object = this.sortOptions.filter(element => element.value === this.sort)
      console.log(object)
      this.sortText = object[0].text
      if (this.player === 'p1') {
        localStorage.setItem('sort', this.sort)
        this.settingsSend()
      }
    }
  },
  computed: {
    starGet () {
      console.log('starGet', this.$store.state.setRecord.starRecord)
      return this.$store.getters.starGet
    },
    colGet () {
      if (this.player === 'p2') {
        return 2
      } else if (this.testType === 'TypeMatch') {
        return 4
      } else {
        return 2
      }
    }
  },
  created () {
    this.tableItems = this.$store.getters.makeList
    this.stringItems = JSON.stringify(this.tableItems)
    this.updateSettings()
    console.log(this.testType)
  },
  mounted () {
    if (this.testType[1] === 'r' || this.testType.includes('AI')) {
      this.timeReset = 6
    } else {
      this.timeReset = 30
    }
    let _this = this
    _this.socket.on('newSettings', function (data) {
      console.log('settingsReceived')
      console.table(data)
      if (_this.player === 'p2') {
        for (let set in data.settingsData) {
          _this[set] = data.settingsData[set]
        }
      }
      _this.$emit('settings', {feedback: _this.feedback, sound: _this.sound})
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form-control {
  background-color:#bbe0eb;
}

.headDiv {
  background-color:lightgrey;
  width:120px;
  font-weight:500;
  border-radius: 5px;
  border: 0px solid #73AD21;
}

.redDiv {
    display:inline-block;
    border:0px solid #CCC;
    outline:none;
    color: red;
    border-radius: 50px, 50px, 0px, 0px;
    vertical-align:middle;
    padding: 5px;
    text-align: center;
    width: 100%
}

</style>
