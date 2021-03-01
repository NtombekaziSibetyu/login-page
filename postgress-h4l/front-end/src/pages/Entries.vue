<template>
  <div class="Entries">
    <Navbar />
    <div id="content">
      <h1>Records</h1>
      <v-card id="table">
        <v-card-title>
          <v-text-field
            id="search"
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="entries"
          :items-per-page="10"
          :search="search"
        ></v-data-table>
      </v-card>
      <Json />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Json from "../pages/Json";
export default {
  components: { Navbar, Json, Footer },
  data() {
    return {
      search: "",
      headers: [
        // {
        //     text: 'Client',
        //     align: 'start',
        //     sortable: false,
        //     value: 'name',
        //     divider: true,
        // },
        { text: "Site name", value: "site_name", width: "120", divider: true },
        { text: "Site type", value: "site_type", width: "120", divider: true },
        {
          text: "Sub district",
          value: "sub_district",
          width: "120",
          divider: true,
        },
        { text: "Date", value: "date", width: "120", divider: true },
        { text: "Counsellor name", value: "counsellor_name", width: "200", divider: true },
        { text: "Time in", value: "time_in", width: "120", divider: true },
        {
          text: "Client name and surname",
          value: "client_name_and_surname",
          width: "200",
          divider: true,
        },
        { text: "Gender", value: "gender", width: "120", divider: true },
        { text: "Birthdate", value: "birth_date", width: "120", divider: true },
        {
          text: "Age at intake",
          value: "age_at_intake",
          width: "200",
          divider: true,
        },
        { text: "Grade", value: "grade", width: "120", divider: true },
        { text: "Race", value: "race", width: "120", divider: true },
        { text: "Mobile", value: "mobile", width: "120", divider: true },
        {
          text: "Consent to sms",
          value: "consent_to_sms",
          width: "200",
          divider: true,
        },
        {
          text: "Home phone number",
          value: "home_phone_number",
          width: "200",
          divider: true,
        },
        {
          text: "Client community",
          value: "client_community",
          width: "200",
          divider: true,
        },
        {
          text: "First time doing an Hiv test",
          value: "first_time_doing_HIV_test",
          width: "240",
          divider: true,
        },
        {
          text: "First time doing with Life Choices",
          value: "first_time_with_LC",
          width: "240",
          divider: true,
        },
        {
          text: "How many times tested",
          value: "number_times_tested",
          width: "200",
          divider: true,
        },
        {
          text: "Last Hiv test",
          value: "last_HIV_test",
          width: "120",
          divider: true,
        },
        {
          text: "Last test result",
          value: "last_test_result",
          width: "200",
          divider: true,
        },
        {
          text: "Scheduled follow up test",
          value: "scheduled_follow_up_test",
          width: "200",
          divider: true,
        },
        {
          text: "TB screening result",
          value: "TB_screening_result",
          width: "200",
          divider: true,
        },
        {
          text: "Has client ever had sex",
          value: "has_client_ever_had_sex",
          width: "200",
          divider: true,
        },
        {
          text: "Last had unprotected sex",
          value: "last_had_unprotected_sex:",
          width: "200",
          divider: true,
        },
        {
          text: "Blood contact",
          value: "blood_contact",
          width: "200",
          divider: true,
        },
        {
          text: "STI screening result",
          value: "STI_screening_result",
          width: "200",
          divider: true,
        },
        { text: "Time out", value: "time_out", width: "120", divider: true },
        { text: "Last name", value: "Last name", width: "120", divider: true },
        {
          text: "Salesforce Client Code",
          value: "sales_force_client_code",
          width: "200",
          divider: true,
        },
        {
          text: "Receive test results",
          value: "recieved_test_results",
          width: "200",
          divider: true,
        },
        {
          text: "Reason for no test result",
          value: "reason_for_no_result",
          width: "200",
          divider: true,
        },
        {
          text: "Hiv test result",
          value: "HIV_test_results",
          width: "200",
          divider: true,
        },
        {
          text: "Maintenance plan",
          value: "maintance_plan",
          width: "200",
          divider: true,
        },
        {
          text: "Negative client risk 1",
          value: "client_risk1",
          width: "200",
          divider: true,
        },
        {
          text: "Negative client risk 2",
          value: "client_risk2",
          width: "200",
          divider: true,
        },
        {
          text: "Negative client risk 3",
          value: "client_risk3",
          width: "200",
          divider: true,
        },
        {
          text: "Negative client risk 1 stage",
          value: "client_risk1_stage",
          width: "200",
          divider: true,
        },
        {
          text: "Negative client risk 2 stage",
          value: "client_risk2_stage",
          width: "200",
          divider: true,
        },
        {
          text: "Negative client risk 3 stage",
          value: "client_risk3_stage",
          width: "200",
          divider: true,
        },
        {
          text: "Negative client risk 1 plan",
          value: "client_action_plan1",
          width: "200",
          divider: true,
        },
        {
          text: "Negative client risk 2 plan",
          value: "client_action_plan2",
          width: "200",
          divider: true,
        },
        {
          text: "Negative client risk 3 plan",
          value: "client_action_plan3",
          width: "200",
          divider: true,
        },
        // { text: 'Pos client step 1', value: 'Pos client step 1', width:"200", divider: true },
        // { text: 'Pos client step 2', value: 'Pos client step 2', width:"200", divider: true },
        // { text: 'Pos client step 3', value: 'Pos client step 3', width:"200", divider: true },
        // { text: 'Pos client step 4', value: 'Pos client step 4', width:"200", divider: true },
        {
          text: "Pos client step 1 action plan",
          value: "step1_action_plan",
          width: "220",
          divider: true,
        },
        {
          text: "Pos client step 2 action plan",
          value: "step2_action_plan",
          width: "220",
          divider: true,
        },
        {
          text: "Pos client step 3 action plan",
          value: "step3_action_plan",
          width: "220",
          divider: true,
        },
        {
          text: "Pos client step 4 action plan",
          value: "step4_action_plan",
          width: "220",
          divider: true,
        },
        // { text: 'Pos client risk 1', value: 'Pos client risk 1', width:"200", divider: true },
        // { text: 'Pos client risk 2', value: 'Pos client risk 2', width:"200", divider: true },
        // { text: 'Pos client risk 3', value: 'Pos client risk 3', width:"200", divider: true },
        // { text: 'Pos client risk 1 stage', value: 'Pos client risk 1 stage', width:"200", divider: true },
        // { text: 'Pos client risk 2 stage', value: 'Pos client risk 2 stage', width:"200", divider: true },
        // { text: 'Pos client risk 3 stage', value: 'Pos client risk 3 stage', width:"200", divider: true },
        // { text: 'Pos client risk 1 plan', value: 'Pos client risk 1 plan', width:"200", divider: true },
        // { text: 'Pos client risk 2 plan', value: 'Pos client risk 2 plan', width:"200", divider: true },
        // { text: 'Pos client step 3 plan', value: 'Pos client risk 3 plan', width:"200", divider: true },
        { text: "Referral", value: "referred", width: "120", divider: true },
        {
          text: "Referral Point",
          value: "referral_point",
          width: "200",
          divider: true,
        },
        {
          text: "Why was the client referred",
          value: "referral_reason",
          width: "220",
          divider: true,
        },
        {
          text: "End of window period",
          value: "end_of_window_period",
          width: "200",
          divider: true,
        },
        {
          text: "Follow up required",
          value: "follow_up_required",
          width: "200",
          divider: true,
        },
        {
          text: "Reason for follow up",
          value: "follow_up_reason",
          width: "200",
          divider: true,
        },
        { text: "Follow up date", value: "follow_up_date", width: "200" },
      ],
      entries: [],
    };
  },
  methods: {
    getEntries() {
      let URL = "http://localhost:5454/api/dashboard/admin";
      let token = window.localStorage.getItem("token");
      fetch(URL, { method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.entries = json;
          console.log("Entries: ", JSON.stringify(this.entries));
        })  
        .catch((err) => console.log("err->", err));
    },
  },
  created() {
    this.getEntries();
  },
 
};
</script>
<style scoped>
#content{
  top: 300px;
  margin: 50px;
  padding: 20px;
  justify-content: center;
  color: #770000;
  text-align: center;
}
#table {
  margin: 10px;
  padding: 10px;
  /* background: #F6E1E1;
  color: #770000; */
}
#search {
  background:  #F6E1E1;
  border: 1px solid #770000;
  color: #770000;
  border-radius: 15px;
}
#table .cursor:hover {
  cursor: pointer;
  color: #F6E1E1;
}
</style>
