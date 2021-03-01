<template>
  <v-card>
    <v-card-title>
      <h4>Districts</h4>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search district"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <AddDistrict />
    </v-card-title>
     <v-data-table 
      :items-per-page="5"
     :headers="headers" 
     :search="search"
     :items="districts">
      <template v-slot:item="row">
          <tr>
            <td>{{row.item.districts}}</td>
            <td>
                <v-icon class="mx-2"  dark  
                color="black" @click.stop="dialog = true" 
                v-on:click="update = row.item._id">
                  mdi-pencil</v-icon>
                <v-dialog
                  v-model="dialog"
                  max-width="500"
                >
                  <v-card>
                    <v-card-title class="headline">
                      Update District
                    </v-card-title>

                    <v-card-text>
                      <v-text-field
                        label="District Name*"
                        required
                        v-model="edit.districts"
                      ></v-text-field>
                    </v-card-text>
                    
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        color="green darken-1"
                        text
                        @click="updateDistrict(update)"
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
                  <v-icon 
                  class="mx-2" dark color="red" @click="deleteDistrict(row.item._id)">
                    mdi-trash-can
                </v-icon>
            </td>
          </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import AddDistrict from '../adminButtons/addDistrict'
export default {
  name: "District",
  components : { AddDistrict},
    data(){
        return{
           dialog : false,
           search : '',
           headers: [
                    { text: 'District Name', value: 'name'},
                    { text: 'Action', value: 'action'},
                ],
            districts : [],
            edit : {},
            update : ''
    }
  },
    methods: {
    updateDistrict(_id){
      let URL =  `http://localhost:5454/api/districts/${_id}`;
      let token = window.localStorage.getItem('token')
            fetch(URL, {
            method:"PUT",   
            body:  JSON.stringify(this.edit),
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
    deleteDistrict(_id){
      let URL = `http://localhost:5454/api/districts/${_id}`;
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
    getDistrict(){
      let URL = "http://localhost:5454/api/districts";
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
                    this.districts = json;
                    // console.log( 'Districts: ', JSON.stringify(json));
                })
                .catch(err => console.log('err->',err))
    },
  },
  created(){
    this.getDistrict();
  },
  updated(){
    this.getDistrict();
  }
}

</script>