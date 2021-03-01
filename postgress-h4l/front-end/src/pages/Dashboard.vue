<template>
  <div class="Dashboard">
    <Navbar />
    <div id="content">
      <div>
         <v-select
         class="filter-selector"
           v-model="selected"
           menu-props="auto"
           prepend-inner-icon="mdi-filter"
           style="color = #770000"
          :items="items"
          multiple
          label="Select data collection"
          rounded
        ></v-select>
      </div>
      <div class="table"  v-if="selected.includes('Counsellors')">
        <Counselors />
      </div>
      <!-- <v-divider></v-divider> -->
      <div class="table" v-if="selected.includes('Sites')">
        <Sites />
      </div>
      <!-- <v-divider></v-divider> -->
      <div class="table" v-if="selected.includes('Districts')">
        <Districts />
      </div>
      <!-- <v-divider></v-divider> -->
      <div class="table" v-if="selected.includes('Areas')">
         <Areas />
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Counselors from "./adminOptions/Counselors";
import Sites from "./adminOptions/Sites";
import Districts from "./adminOptions/Districts";
import Areas from "./adminOptions/Areas";
import Footer from "../components/Footer"

export default {
  components: { Navbar, Counselors, Sites, Districts, Areas, Footer },
  data() {
    return {
      items : ['Areas','Counsellors','Districts','Sites'],
      selected :[]
    }
  }
};
</script>
<style scoped>
#content {
  margin: 72px 72px 30px 72px;
}
.filter-selector{
    margin: 30px;
    padding: 10px;
    color: #770000;
    background: #FFFFFF;
    box-shadow: 1px 4px 10px 3px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
}
.table{
  margin: 30px;
  top: 100px;
}
</style>
