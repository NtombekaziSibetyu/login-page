<template>
  <v-card>
    <v-card-title>
      <h4>Areas</h4>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search area"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <AddArea @click="addArea(row.item)"/>
    </v-card-title>
     <v-data-table 
      :items-per-page="5"
     :headers="headers" 
     :search="search"
     :items="places">
      <template v-slot:item="row">
          <tr>
            <td>{{row.item.areas}}</td>
            <td>
                <v-icon
                class="mx-2"
                color="black" @click.stop="dialog = true"  
                v-on:click="update = row.item._id"
                  dark>
                  mdi-pencil</v-icon>
                <v-dialog
                  v-model="dialog"
                  max-width="500"
                >
                <!-- Update -->
                  <v-card>
                    <v-card-title class="headline">
                    Update an Area
                    </v-card-title>
                    <v-card-text>
                        <v-text-field
                            label="Area Name*"
                            required
                            v-model="edit.areas"
                          ></v-text-field>
                        </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        color="green darken-1"
                        text
                       @click="updateArea(update)"
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
                <v-icon dark
                class="mx-2" color="red"
                @click="deleteArea(row.item._id)"
                >mdi-trash-can</v-icon>
            </td>
          </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import AddArea from '../adminButtons/addArea'
export default {
  name: "Areas",
  components: { AddArea },
    data(){
        return{
           dialog : false,
           search : '',
           headers: [
                    { text: 'Area Name', value: 'name'},
                    { text: 'Action', value: 'action'},
                ],
            places : [],
            update : '',
            edit : {},
    }
  },
  methods: {
   updateArea(_id){
      let URL = `http://localhost:5454/api/areas/${_id}`;
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
    deleteArea(_id){
       let URL = `http://localhost:5454/api/areas/${_id}`;
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
    getArea(){
      let URL = "http://localhost:5454/api/areas";
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
                    this.places = json;
                })
                .catch(err => console.log('err->',err))
    },
  },
  created(){
    this.getArea();
  },
  updated(){
    this.getArea();
  }
}

</script>