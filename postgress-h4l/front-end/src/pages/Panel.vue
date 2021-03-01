<template>
    <div id="panel-container">
        <Navbar/>
        <v-card id="panel-card">
            <div v-if="admin" id="p_login">
                <!-- <v-icon color="#1867c0" right class="icon-virus">mdi-virus</v-icon>  -->
                <div class="text-center">
                    <h1 > Welcome | Login</h1>
                </div>
                     <div >
                         <v-text-field
                            id="text-field1"
                            label="Email"
                            solo
                            prepend-inner-icon="mdi-email"
                            :rules="emailRules"
                            v-model="login.email"
                            required
                        ></v-text-field>
                        <v-text-field
                            id="text-field2"
                            label="Password"
                            solo
                            prepend-inner-icon="mdi-lock"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            :rules="passwordRules"
                            v-model="login.password"
                            required
                            @click:append="show = !show"
                        ></v-text-field>
                     </div>
                <div class="panel-btns">
                    <!-- <v-btn
                        depressed
                        rounded
                        style="color: #1867c0 !important;"
                        @click="() => admin = false"
                    >
                        Sign Up
                    </v-btn> -->
                    <v-btn
                        
                        rounded
                        style="background: #770000 ; color: #FFFFFF"
                        
                        class="go-btn"
                        @click="handleLogin"
                    >
                        Log In
                    </v-btn>
                </div>
                <a class="link" href="#">Forgot password?</a>
            </div>
            <div v-if="!admin" id="p_signup">
                <h1>HCT<v-icon color="#1867c0" right class="icon-virus">mdi-virus</v-icon> REGISTRATION</h1>
                <!-- <br> -->
                <!-- <v-divider></v-divider> -->
                <v-text-field
                    label="Enter name"
                    v-model="register.fullname"
                    :rules="nameRules"
                    required
                ></v-text-field>
                    <v-text-field
                    label="Enter email"
                     :rules="[v => !!(v || '').match(/@/) || 'Please enter a valid email',]"
                     v-model="register.email"
                     required
                ></v-text-field>
                    <v-text-field
                    label="Enter password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                     :type="show1 ? 'text' : 'password'"
                    :rules="passwordRules"
                    v-model="register.password"
                    required
                     @click:append="show1 = !show1"
                ></v-text-field>
                <v-text-field
                    label="Confirm password"
                    :type="show2 ? 'text' : 'password'"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="confirmpasswordRules"
                    v-model="confirmpassword"
                    required
                    @click:append="show2 = !show2"
                ></v-text-field>
                <div class="panel-btns">
                    <v-btn
                        depressed
                        rounded
                        style="color: #1867c0 !important;"
                        @click="() => admin = true"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        depressed
                        rounded
                        class="go-btn"
                        @click="handleRegister"
                    >
                        Sign Up
                    </v-btn>
                </div>
            </div>
        </v-card>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/Footer'
export default {
    components : {
        Navbar, Footer
    },
    data() {
        return {
            admin: true,
            register: {
                fullname: "",
                email: "",
                password: "",
            },
            login: {
            },
            nameRules:[
                v => !!v || 'Name is required',

            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            show: false,
            show1: false,
            show2: false,
            passwordRules: [
                    v => !!v || 'This field is required',
            ], 
            confirmpassword: '',
            confirmpasswordRules: [
                () => this.confirmpassword === this.login.password || this.confirmpassword === this.register.password || "Password must match",
            ],
    }
    },
    methods: {
        handleRegister() {
            let URL = "http://localhost:5454/api/admin";
            let token = window.localStorage.getItem("token");
            fetch(URL, {
                method: "POST",
                body: JSON.stringify(this.register),
                mode: "cors",

                headers: {
                "Content-type": "application/json",
                "x-auth-token": token,
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log("json->", json);
                    window.location.reload();
                })
                .catch((err) => console.log("err->", err));
        },
        handleLogin(){
            let URL = "http://localhost:5454/api/user";
            console.log("data ", JSON.stringify(this.login));
            fetch(URL, {
                method: "POST",
                body: JSON.stringify(this.login),
                mode: "cors",
                headers: {
                    "Content-type": "application/json",
                },
            })
                .then(response => response.json())
                .then(json => {
                    window.localStorage.removeItem('token');
                    window.localStorage.setItem('token', json.token)
                    console.log("Token:", json.token)
                    this.$router.push('/entries')
                })
                .catch((err) => console.log("err->", err));
        }
    }
}
</script>

<style scoped>
#panel-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* background: url(https://cph.temple.edu/sites/cph/files/styles/tu_is_banner_image_medium/public/images/news/thumb/iStock-1164501571.jpg?itok=OJeW41-G&timestamp=1608153279);
    background-size: auto;
    background-repeat: repeat-y repeat-x; */
}
#panel-card {
    /* width: 800px;
    height: auto;  
    background-color: rgba(255, 255, 255, 0.781); */

    position: absolute;
    text-align: center;
    padding: 40px;
    width: 800px;
    height: 400px;
    /* left: 313px;
    top: 153px; */

    justify-content: center;
    align-self: center;
    background: #FFFFFF;
    box-shadow: 2px 4px 8px 3px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
}
.go-btn {
    padding: 0px 19px;
    background: #770000;
    box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    color: #FFFFFF;
    width: 100px;
    height: 80px;
}
#text-field1{
    margin: 30px;
    width: 486px;
    height: 100px;
    left: 487px;
    padding: 20px;
    /* top: 445px; */
    background: #f6e1e1;
    color: #770000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}
#text-field2{
    margin: 30px;
    width: 486px;
    height: 100px;
    left: 487px;
    padding: 20px;
    /* top: 445px; */
    background: #f6e1e1;
    color: #770000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

/* .panel-btns {
    width: 100%;
    display: flex;
    justify-content: space-between;
} */

.link {
    /* color: #D21F3C;
    font-size: 14px;
     */
    margin-top: 50px;
    font-family: 'Poppins';
    text-decoration: none;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    color: #770000;
}

h1 {
    color: #770000;
    width: 502px;
    height: 51px;
    /* left: 550px;
    top: 164px; */
    font-family: 'Poor Story';
    font-style: normal;
    font-weight: normal;
    font-size: 41px;
    line-height: 51px
    

}
/* .icon-virus{
    height: 70px;
} */
</style>
