<template>
  <v-row justify="center">
    <v-btn
     class="mx-2" left
     fab dark small color="#770000"
      @click.stop="dialog = true"
    >
       <v-icon dark>mdi-account-plus</v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card>
        <v-card-title class="headline">
          Add a new conselor 
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Legal first name*"
            required
            v-model="item.fullname"
          ></v-text-field>
          
          <v-text-field
            label="Role*"
            required
            v-model="item.role"
          ></v-text-field>
          <v-text-field
            label="Email*"
            required
            v-model="item.email"
          ></v-text-field>
          <v-text-field
            label="Password*"
            type="password"
            required
            v-model="item.password"
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
             @click="saveCounselor()"
          >
            Save
          </v-btn>

          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        item : { fullname: "", role:"", email: "", password: ""}
      }
    },
    methods : {
      saveCounselor(){
      let URL = "http://localhost:5454/api/admin";
      let _data = this.item;
      let token = window.localStorage.getItem('token')
            fetch(URL, {
            method:"POST",   
            body:  JSON.stringify(_data),
            mode: 'cors',
            headers: {
              "Content-type": "application/json",
              "x-auth-token": token
            }
        })
        .then(response => response.json())
            .then(json => {
              console.log('json->', json);
              this.dialog = false;
              }
            )
            .catch(err => console.log('err->',err))
      },
     
    }
  }
</script>