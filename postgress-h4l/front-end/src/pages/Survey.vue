<template>
  <v-app id="app">
    <!--Navbar --> 
    <v-app-bar
      app
      dark
      id="app-header"
    >
      <v-app-bar-nav-icon v-if="!client" x-large @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
        <!-- Text-->
      <h2 v-if="!client" class="text-center pleft">
        Health4Life
      </h2>
      <h2 v-if="client" class="text-center">
        HCT Client Record ({{ progress }}%)
      </h2>
      <v-row
        align="center"
        justify="space-around"
      >
      </v-row>
      <v-menu v-if="!client" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-icon 
            v-bind="attrs"
            v-on="on"
          >
            mdi-account-cog
          </v-icon>
        </template>
       <v-list>
        <v-list-item>
            <v-btn text color="grey" @click="logout">
                <span>Logout</span>
                <v-icon right>mdi-logout</v-icon>
            </v-btn>
        </v-list-item>
        <v-list-item>
            <v-btn text color="grey" @click="logout">
                <span>Login as admin</span>
                <v-icon right>mdi-login</v-icon>
            </v-btn>
        </v-list-item>
       </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-if="!client"
      v-model="drawer" 
      absolute
      width="300"
      left
      id="drawer"
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          class="black--text text--accent-4"
        >
          <v-list-item class="white">
            <v-list-item-title @click="goDashboard"><h3>Forms</h3></v-list-item-title>
            <v-icon>mdi-folder-plus</v-icon>
          </v-list-item>

          <!-- <v-list-item class="white">
            <v-list-item-title><h3>Drafts</h3></v-list-item-title>
            <v-icon>mdi-file-find</v-icon>
          </v-list-item>

           <v-list-item class="white">
            <v-list-item-title><h3>Settings</h3></v-list-item-title>
            <v-icon>mdi-cog</v-icon>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main v-if="!client" center id="app-content">
      <Start :start="start"/>
    </v-main>
    <Survey v-if="client"/>
    <!-- <Options v-if="client"/> -->
    <Footer v-if="!client"/>
  </v-app>
</template>

<script>

import Survey from '../components/survey';
// import Options from '../components/options';
import Start from '../components/start';
import Footer from '../components/Footer'

export default {
  name: 'App',
  components: {
    Survey,
    // Options,
    Start,
    Footer
  },
  data: () => ({
        client : false,
        drawer: false,
        group: null,

  }),
  computed: {
    progress() {
      return this.$store.state.progress;
    }
  },
  methods : {
    start(){
      this.client = true
    },
    goDashboard(){
      this.$router.push('/');
    },
    logout(){
      window.localStorage.removeItem("token");
      this.$router.push('/panel');
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  },
 
};
</script>

<style scoped>
  #app {
    position: absolute;
    width: 100vw;
    height: 100vh;
    font-family: 'Open Sans';
    font-size: 1.2rem;
  }
  #app-header {
    height: 64px;
    left: 0px;
    top: 0px;
    background: #770000;
  }
  #drawer {
    background: #770000;
    color: white;
  }
  .pleft {
    margin-left: -20px;
  }
  #app-content {
    color: black;
    /* background: url(https://media.newyorker.com/photos/59c96974d44dcb788780a8c6/16:9/w_1107,h_1716,c_limit/r30649-tout.png); */
    background-position: center;
    background-repeat: no-repeat;
    
  }
  .cursor:hover {
    cursor: pointer;
    color: rgb(241, 147, 152);
  }
  
</style>