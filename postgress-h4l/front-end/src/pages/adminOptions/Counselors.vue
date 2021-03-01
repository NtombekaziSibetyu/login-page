<template>
  <v-card>
      <v-card-title>
          <h4>Counselors</h4>
          <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search counselor"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <AddCounsellor />
      </v-card-title>
      <v-data-table 
        :items-per-page="5"
      :headers="headers" 
      :search="search"
      :items="counselors">
      <template v-slot:item="row">
          <tr>
            <td>{{row.item.fullname}}</td>
            <td>{{row.item.email}}</td>
            <td>{{row.item.role}}</td>
            <td>
                <v-icon 
                class="mx-2" dark color="black" @click.stop="dialog = true" v-on:click="update = row.item._id"
                >mdi-account-edit</v-icon>
             
                <v-dialog
                  v-model="dialog"
                  max-width="500"
                >
                <!-- Update -->
                  <v-card>
                    <v-card-title class="headline">
                      Update counselor 
                    </v-card-title>

                    <v-card-text>
                      <v-text-field
                        label="Legal fullname*"
                        required
                        v-model="user.fullname"
                      ></v-text-field>
                      <v-text-field
                        label="Email*"
                        required
                        v-model="user.email"
                      ></v-text-field>

                      <v-text-field
                        label="Position*"
                        required
                        v-model="user.role"
                      ></v-text-field>
                    
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        color="green darken-1"
                        text
                        @click="updateCounselor(update)"
                      >
                        Save
                      </v-btn>

                      <v-btn
                        color="red darken-1"
                        text
                        @click="dialog = false"
                      >
                        
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!-- Delete -->
              
                <v-icon 
                class="mx-2" dark color="red" @click="deleteCounselor(row.item._id)"
                >mdi-trash-can</v-icon>
               
            </td>
          </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import AddCounsellor from '../adminButtons/addCounsellor'
export default {
  name: "Counsellor",
  components : { AddCounsellor },
    data(){
        return{
           dialog : false,
           search : '',
           headers: [
                    { text: 'Counselor Name', value: 'fullname'},
                    { text: 'Email', value: 'email'},
                    { text: 'Position', value: 'role'},
                    { text: 'Action', value: 'action'},
                ],
            counselors : [],
            user : {},
            update : ''
    }
  },
    methods: {
    updateCounselor(_id){
      let URL = `http://localhost:5454/api/admin/${_id}`;
      let token = window.localStorage.getItem('token')
            fetch(URL, {
            method:"PUT",   
            body:  JSON.stringify(this.user),
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
            .catch(err => console.log('err->>>',err))
    },
     deleteCounselor(_id){
      let URL = `http://localhost:5454/api/admin/${_id}`;
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
            .catch(err => console.log('err->>>',err))
    },
    getCounsellor(){
      let URL = "http://localhost:5454/api/admin";
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
                    this.counselors = json;
                    // console.log( 'Counsellors: ', JSON.stringify(json));
                })
                .catch(err => console.log('err->',err))
    },
  },
  created(){
    this.getCounsellor();
  },
  updated(){
    this.getCounsellor();
  },
  // mounted(){
  //   this.getCounsellor();
  // },
}
</script>