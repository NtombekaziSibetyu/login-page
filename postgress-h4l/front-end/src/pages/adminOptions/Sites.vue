<template>
  <v-card>
    <v-card-title>
      <h4>Sites</h4>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search sites"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <AddSite @click="addSite(row.item)"/>
    </v-card-title>
     <v-data-table 
      :items-per-page="5"
     :headers="headers" 
     :search="search"
     :items="sites">
      <template v-slot:item="row">
          <tr>
            <td>{{row.item.sites}}</td>
            <td>{{row.item.type}}</td>
            <td>
                <v-icon 
                class="mx-2" fab dark color="black" 
                @click.stop="dialog = true" 
                v-on:click="update = row.item._id">
                  mdi-pencil</v-icon>
                <v-dialog
                  v-model="dialog"
                  max-width="500"
                >
                <!-- Update -->
                  <v-card>
                    <v-card-title class="headline">
                      Update  Site
                    </v-card-title>
                    <v-card-text>
                      <v-text-field
                        label="Site Name*"
                        required
                        v-model="site.sites"
                      ></v-text-field>
                      <v-text-field
                        label="Site Type*"
                        required
                        v-model="site.type"
                      ></v-text-field>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        color="green darken-1"
                        text
                        @click="updateSite(update)"
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
                <!-- Delete -->

                <v-icon 
                class="mx-2" dark color="red" 
                @click="deleteSite(row.item._id)">
                  mdi-trash-can</v-icon>
            </td>
          </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import AddSite from '../adminButtons/addSite'
export default {
  name: "Site",
  components : { AddSite },
    data(){
        return{
           dialog : false,
           search : '',
           headers: [
                    { text: 'Site Name', value: 'name'},
                    { text: 'Site Type', value: 'type'},
                    { text: 'Action', value: 'action'},
                ],
            sites : [],
            site : {},
            update : ''
    }
  },
    methods: {
    
    updateSite(_id){
      let URL = `http://localhost:5454/api/sites/${_id}`;
      let token = window.localStorage.getItem('token')
            fetch(URL, {
            method:"PUT",   
            body:  JSON.stringify(this.site),
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
    deleteSite(_id){
      let URL = `http://localhost:5454/api/sites/${_id}`;
      let token = window.localStorage.getItem('token')
          fetch(URL, {
          method:"DELETE",   
          body:  JSON.stringify(this.item),
          mode: 'cors',
          
          headers: {
            "Content-type": "application/json",
            "x-auth-token": token
          }
        })
        .then(response => response.json())
            .then(json => {
              console.log('json->', json);
              }
            )
            .catch(err => console.log('err->',err))
    },
    getSites(){
      let URL = "http://localhost:5454/api/sites";
      let token = window.localStorage.getItem('token')
      fetch(URL, {
                method:"GET",   
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    "x-auth-token": token
                }
            })
            .then(response => response.json())
                .then(json => {
                    this.sites = json;
                    // console.log( 'Sites: ', JSON.stringify(json));
                })
                .catch(err => console.log('err->',err))
    },
  },
  created(){
    this.getSites();
  },
  updated(){
    this.getSites();
  },
  mounted(){
   this.getSites();
  },
}
</script>