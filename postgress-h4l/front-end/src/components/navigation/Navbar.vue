<template>
    <nav id="nav">
        <v-app-bar
        app
        dark
        id="app-header"
      >
      <v-app-bar-nav-icon v-if="!client" x-large @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
        <!-- Text-->
      <h2 v-if="!client" class="text-center pleft">
        Health For Life
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
        <!-- <template v-slot:activator="{ on, attrs }">
          <v-icon 
            v-bind="attrs"
            v-on="on"
          >
            mdi-account-cog
          </v-icon>
        </template> -->
       <v-list>
        <!-- <v-list-item>
            <v-btn text color="grey" @click="logout">
                <span>Logout</span>
                <v-icon right>mdi-logout</v-icon>
            </v-btn>
        </v-list-item> -->
        <!-- <v-list-item>
            <v-btn text color="grey" @click="logout">
                <span>Login as admin</span>
                <v-icon right>mdi-login</v-icon>
            </v-btn>
        </v-list-item> -->
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
            <v-list-item-title @click="goSurvey" ><h3>New Form</h3></v-list-item-title>
            <v-icon>mdi-folder-plus</v-icon>
          </v-list-item>
          <!-- <v-list-item class="white">
            <v-list-item-title @click="goDashboard"><h3>Form Entries</h3></v-list-item-title>
            <v-icon>mdi-folder</v-icon>
          </v-list-item> -->
         
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
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            viewEntries: false,
            group: null,
            client : false,
        }
    },
    methods:{
    goDashboard(){
      this.$router.push('/entries');
    },
    goSurvey(){
      this.$router.push('/');
    },
    logout(){
      window.localStorage.removeItem("token");
      this.$router.push('/');
    },
    watch: {
        group() {
            this.drawer = false
        }
    },
    start(){
      this.client = true
    },
    }
}
</script>

<style scoped>
#nav {
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
.cursor:hover {
    cursor: pointer;
    color: rgb(255, 195, 195);
}
</style>