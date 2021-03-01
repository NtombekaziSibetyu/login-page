<template>
  <v-row justify="center">
    <v-btn
     class="mx-2" left
     fab dark small color="#770000"
      @click.stop="dialog = true"
    >
       <v-icon dark>mdi-plus-thick</v-icon> 
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card>
        <v-card-title class="headline">
         Add an Area
        </v-card-title>

        <v-card-text>
             <v-text-field
                label="Area Name*"
                required
                v-model="add.areas"
              ></v-text-field>
            </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="saveArea()"
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
        add : { areas : ""}
      }
    },
    
    methods : {
      saveArea(){
          let URL = "http://localhost:5454/api/areas";
          console.log("data ", this.add);
          let token = window.localStorage.getItem("token");
          fetch(URL, {
              method: "POST",
              body: JSON.stringify(this.add),
              mode: "cors",
              headers: {
              "Content-type": "application/json",
              "x-auth-token": token,
              },
          })
              .then((response) => response.json())
              .then((json) => {
                  console.log("json->", json);
                  this.dialog = false
              })
              .catch((err) => console.log("err->", err));
      }
    }
  }
</script>