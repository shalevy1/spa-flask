<template>
  <div id="app">
    <b-navbar toggleable>
      <b-navbar-brand @click="goTo('Home')"><span class="text-cream" > VOCAB TRAINER </span> </b-navbar-brand>

      <b-navbar-toggle  target="navbar-toggle-collapse" class="d-block d-lg-none">
        <b-avatar v-if="isAuthenticated" :src="s3 + $store.state.userProfile.userID + '/avatar.jpg'" size="3rem" :text="$store.state.userProfile.username[0]"></b-avatar>
       <b-avatar v-else size="3rem" text="VC"></b-avatar>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
           <div v-if="isAuthenticated">
                <b-nav-item @click="goTo('Account')"><div class="sideBtn"><b-icon-person-fill></b-icon-person-fill>  <span> &nbsp;Account #{{$store.state.userProfile.userID}} </span></div></b-nav-item>
                <b-nav-item @click="goTo('Help')"><div class="sideBtn"><b-icon-question-circle></b-icon-question-circle>  <span> &nbsp;Help </span></div></b-nav-item>
                <hr>

                <Dash :tableItems="tableItems" type="nav"></Dash>

                <hr>
                <b-nav-item @click="logout(), goTo('Home')"><div class="sideBtn bg-alert"><b-icon-power></b-icon-power>  <span text=""> &nbsp;Logout </span></div></b-nav-item>

            </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-row no-gutters>
      <b-col v-if="isAuthenticated" cols="1" class="bg-prime d-none d-lg-block">
        <div :class="navSide('/Dictionary')" @click="goTo('Dictionary')"><b-icon-card-list></b-icon-card-list> <br> <span class="d-none d-xl-inline"> List </span> </div>
        <div :class="navSide('/TransEngTest')" @click="goTo('TransEngTest')"><b-icon-box-arrow-up-right></b-icon-box-arrow-up-right> <br> <span class="d-none d-xl-inline"> Eng-Ch </span> </div>
        <div :class="navSide('/TransChTest')" @click="goTo('TransChTest')"><b-icon-box-arrow-up-left></b-icon-box-arrow-up-left> <br> <span class="d-none d-xl-inline"> Ch-Eng </span></div>
        <div :class="navSide('/TypeTest')" @click="goTo('TypeTest')"><b-icon icon="grid3x3-gap-fill"></b-icon> <br> <span class="d-none d-xl-inline"> Type </span></div>
        <div :class="navSide('/MatchBase')" @click="goTo('Match')"><b-icon icon="fullscreen-exit"></b-icon> <br> <span class="d-none d-xl-inline "> Match </span></div>
      </b-col>
      <b-col v-else cols="1" class="bg-prime d-none d-lg-block">
      </b-col>

      <b-col :class="contClass()" style="min-height:100vh" >
        <b-container fluid v-if="this.$store.state.userRecord || !isAuthenticated">
          <transition name="board">
           <router-view :s3="s3"></router-view>
          </transition>
        </b-container>
        <b-container v-else align="center">
          <div class="mt-5">
              <h4 class="text-prime"> Building Records </h4>
              <b-icon icon="three-dots" animation="cylon" variant="prime" font-scale="6"></b-icon>
          </div>
        </b-container>
      </b-col>

      <b-col cols="2" class="d-none d-lg-block">
          <div class="p-3 bg-warn" style="height:100%">
              <div>
                <b-row no-gutters v-if="isAuthenticated" align="center">
                  <b-col>
                    <b-avatar :src="s3 + $store.state.userProfile.userID + '/avatar.jpg'" size="4rem" :text="$store.state.userProfile.username[0]"></b-avatar>
                </b-col>
                  <b-col class="text-cream">
                    <button class="buttonDiv bg-prime text-cream px-1" style="height:70px; width:100%" @click="goTo('Account')"><b-icon-person-fill></b-icon-person-fill>  <span> #{{ $store.state.userProfile.userID}}<br>
                     {{ $store.state.userProfile.username}}</span> </button>
                  </b-col>
                </b-row>
                <b-row  v-else align="center">
                  <b-col>
                    <b-avatar size="4rem" text="VT" align="center"></b-avatar>
                  </b-col>
                </b-row>

              <hr>
                    <div v-if="isAuthenticated">
                      <Dash :tableItems="tableItems" type="side"></Dash>
                      <hr>
                    </div>

                    <div v-if="isAuthenticated">
                      <button v-if="$store.state.userProfile.instructor" class="buttonDiv mt-2 bg-peel text-prime px-1" style="height:50px; width:100%" @click="goTo('Instructor')"><b-icon-person-fill></b-icon-person-fill>  <span> &nbsp;Instructor </span> </button>
                      <button v-if="$store.state.userProfile.userID === 1" class="buttonDiv mt-2 bg-info text-prime px-1" style="height:50px; width:100%" @click="goTo('JGrabber')"><b-icon-person-fill></b-icon-person-fill>  <span> &nbsp;JGrabber </span> </button>
                      <button v-if="$store.state.userProfile.userID === 1" class="buttonDiv mt-2 bg-success text-prime px-1" style="height:50px; width:100%" @click="goTo('Flash')"><b-icon-person-fill></b-icon-person-fill>  <span> &nbsp;Flash </span> </button>
                      <button class="buttonDiv mt-2 bg-third text-prime px-1" style="height:50px; width:100%" @click="alert('help features coming soon')"><b-icon-question-circle></b-icon-question-circle>  <span text=""> &nbsp;Help </span> </button>
                      <button class="buttonDiv mt-2 bg-grape text-cream px-1" style="height:50px; width:100%" @click="logout()"><b-icon-power></b-icon-power>  <span text=""> &nbsp;Logout </span> </button>
                    </div>
                    <div v-else align="center">
                     <b-card header="Welcome" header-bg-variant="prime" header-text-variant="cream" header-tag="h3">
                        <button class="buttonDiv  bg-warn text-cream" style="width:60%"  @click="$router.push('/login')"><b-icon-power></b-icon-power><span> &nbsp;Log In</span></button>
                        <button class="buttonDiv mt-3 bg-info text-cream" style="width:60%"  @click="$router.push('/register')"><b-icon-person-fill></b-icon-person-fill><span> &nbsp;Join</span></button>
                      </b-card>
                    </div>
              </div>
          </div>
        </b-col>
    </b-row>
    <div v-if="isAuthenticated && !isActiveCheck" class="btnNav d-lg-none" style="z-index: 5">
        <button :class="navStyle('/Dictionary')" @click="goTo('Dictionary')"><b-icon-card-list></b-icon-card-list>  <span class="d-none d-md-inline" text=""> &nbsp; List </span> </button>
        <button :class="navStyle('/TransEngTest')" @click="goTo('TransEngTest')"><b-icon-box-arrow-up-right></b-icon-box-arrow-up-right>  <span class="d-none d-md-inline"> &nbsp; Eng-Ch </span> </button>
        <button :class="navStyle('/TransChTest')" @click="goTo('TransChTest')"><b-icon-box-arrow-up-left></b-icon-box-arrow-up-left>  <span class="d-none d-md-inline"> &nbsp; Ch-Eng </span></button>
        <button :class="navStyle('/TypeTest')" @click="goTo('TypeTest')"><b-icon icon="grid3x3-gap-fill"></b-icon> <span class="d-none d-md-inline"> &nbsp; Type </span></button>
        <button :class="navStyle('/MatchBase')" @click="goTo('Match')"><b-icon icon="gem"></b-icon> <span class="d-none d-md-inline"> &nbsp; Match </span></button>
    </div>
  </div>

</template>

<script>
import router from './router/index'
import Dash from './components/Dash'

export default {
  name: 'app',
  components: {
    Dash
  },
  data () {
    return {
      path: this.$route.path,
      s3: 'https://vocab-lms.s3-ap-northeast-1.amazonaws.com/public/profiles/',
      userProfile: null,
      contColor: 'bg-cream',
      tableItems: [],
      btnCodes: {
        '/TransChTest': this.getClass('third', 'prime'),
        '/TransEngTest': this.getClass('third', 'prime'),
        '/TypeTest': this.getClass('peel', 'prime'),
        '/Match': this.getClass('cream', 'prime'),
        '/Dictionary': this.getClass('cream', 'prime')
      }
    }
  },
  computed: {
    isAuthenticated () {
      if (!this.$store.getters.isAuthenticated) {
        router.push('/home')
      }
      return this.$store.getters.isAuthenticated
    },
    isActiveCheck () {
      return this.$store.getters.isActive
    }
  },
  methods: {
    contClass: function () {
      if (this.getPath() in this.btnCodes) {
        return this.btnCodes[this.getPath()]
      } else {
        return this.contColor
      }
    },
    getPath: function () {
      return this.$route.path
    },
    navStyle: function (arg) {
      let path = this.getPath()
      if (path in this.btnCodes && path === arg) {
        return 'tabLink text-prime ' + this.btnCodes[path]
      } else {
        return 'tabLink bg-prime text-cream'
      }
    },
    navSide: function (arg) {
      let path = this.getPath()
      if (path in this.btnCodes && path === arg) {
        return 'sideLink m-0 h4 text-prime ' + this.btnCodes[path]
      } else {
        return 'sideLink m-0 h5 bg-prime text-cream'
      }
    },
    goTo: function (arg) {
      // router will be disbaled is game is active
      if (!this.$store.state.testActive) {
        this.$router.push(arg)
        // const userId = '123'
        // router.push({ name: 'user', params: { userId } }) // -> /user/123
        // router.push({ path: `/user/${userId}` }) // -> /user/123
      } else {
        alert('You are in a test, please finish or exit first')
        // this.navStyle()
        // this.navSide()
      }
    },
    logout: function (arg) {
      if (!this.$store.state.updateStatus) {
        this.$store.dispatch('saveData')
      }
      this.$store.dispatch('logout')
    },
    currentCount: function () {
      let count = 0
      for (let key in this.$store.state.currentActivity) {
        if (key) {
          count++
        }
      }
      return count
    }
  },
  watch: {
    btnSelect: function () {
      if (this.btnSelect !== null) {
        this.contColor = this.contMode[this.btnSelect]
      }
    },
    $route (to, from) {
      // console.log('path change')
    }
  },
  updated () {
    // check the login status everytime the page is change
    this.$store.dispatch('checkLogin')
    this.userProfile = this.$store.state.userProfile
    if (this.$store.state.userRecord) {
      this.tableItems = this.$store.getters.makeList
    }
  },
  created () {
    if (!this.$store.state.userRecord && this.isAuthenticated) {
      // console.log('created: get api records')
      this.$store.dispatch('apiRecords', { userID: this.$store.state.userProfile.userID })
    }

    let _this = this
    window.onbeforeunload = function () {
      if (_this.isAuthenticated && _this.$store.state.updateStatus === false) {
        _this.$store.dispatch('saveData')
      }
      return undefined
    }
    window.onblur = function () {
      _this.$store.dispatch('saveData')
    }
  }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400&display=swap');
@import "assets/scss/custom.scss";

.board-enter-active, .board-leave-active  {
  transition: opacity 0.3s ease-in-out, transform 0.5s ease;
}

.board-enter-active {
  transition-delay: 0.5s;
}

.board-enter {
  opacity: 0;
}

.board-enter-to {
  opacity: 1;
}

.board-leave {
  opacity: 1;
  transform: translateY(0px);
}

.board-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

body {
  font-family: 'Inconsolata', !important;
}

.navbar {
  background-color: theme-color("prime");
  color: theme-color("cream");
  border-bottom: 4px solid theme-color("warn");
}

.navbar .navbar-toggler:focus {
  border: 0px
}

.btnNav {
  position: sticky;
  bottom: 0px;
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center
}

.sideBtn {
  background-color:theme-color('prime');
  color:theme-color('cream');
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center
}

.tabLink {
  flex: 1;
  text-align: center;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s
}

.tabLink:active {
  color: theme-color('warn');
}

.sideNav {
  display: flex;
}

.sideLink {
  flex: 1;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 30px 5px;
  width:auto;
  transition: 0.3s
}

.sideLink:hover {
  color: theme-color('warn') !important;
  background-color:theme-color('smoke') !important;
}

.select option {
    margin: 40px;
    background-color: rgba(0, 0, 0, 0.3);
    color: red;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}

.selectColor{
    background-color: #e7e7e7;
}

.container-fluid {
    padding: 20px;
}

.head {
  border:0px solid #CCC;
  border-radius: 10px 10px 0px 0px;
}

.headDiv {
    display:inline-block;
    border:0px solid #CCC;
    outline:none;
    border-radius: 50px, 50px, 0px, 0px;
    box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
    vertical-align:middle;
    padding: 5px;
    text-align: center;
    width: 100%
}

.spanDiv {
    display:inline-block;
    color: theme-color('prime');
    height: 15px;
    width: 60%;
    border:0px solid #CCC;
    outline:none;
    border-radius: 5px;
    box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
    vertical-align:middle;
    padding: 1px;
    text-align: center;
}

.buttonDiv {
    display:inline-block;
    color: theme-color('prime');
    border:0px solid #CCC;
    outline:none;
    border-radius: 5px;
    box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
    cursor:pointer;
    vertical-align:middle;
    padding: 5px;
    text-align: center;
}

.buttonDiv:active {
    color: theme-color('warn');
    box-shadow: 0 0 5px -1px rgba(0,0,0,0.6);
    border:0px solid #CCC;
    outline:none;
}

.buttonDiv:hover {
    color: theme-color('cream');
    outline:none
}

.buttonDiv:after {
    outline:none
}

.questionDiv {
    display:inline-block;
    color: theme-color('cream');
    border:0px solid #CCC;
    border-radius: 5px;
    box-shadow: 0 0 5px -1px rgba(0,0,0,0.2);
    cursor:pointer;
    font-size: 30px;
    vertical-align:middle;
    padding: 10px;
    text-align: center;
    width: 100%;
    min-height: 70px
}

.answerBtn {
    display:inline-block;
    background: #eeecec;
    color: theme-color('prime');
    border:0px solid #CCC;
    border-radius: 5px;
    box-shadow: 0 0 5px -1px rgba(0,0,0,0.2);
    cursor:pointer;
    font-size: 25px;
    vertical-align:middle;
    padding: 10px;
    text-align: center;
    width: 100%;
    min-height: 60px
}

.answerBtn:active {
    color: theme-color('warn');
    box-shadow: 0 0 5px -1px rgba(0,0,0,0.6);
}

.answerBtn:disabled {
    color: theme-color('prime');
    background: theme-color('cream');
    opacity: 0.5;
    cursor: none;
    pointer-events: none;
}

.answerBtn:hover {
    color: theme-color('cream');
    background: theme-color('grey');
}
.answerBtn:hover:after {
    color: theme-color('prime');
    background:  #c2c2c2;
    content:"";
}
.answerBtn:active:after {
    color: theme-color('prime');
    background:  #c2c2c2;
    content:"";
}

</style>
