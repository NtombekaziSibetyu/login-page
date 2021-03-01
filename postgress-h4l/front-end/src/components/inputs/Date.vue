<template>
    <div>
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <v-menu
        color="#770000"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-top="270"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="field.date"
            :label="field.label"
            prepend-inner-icon="mdi-calendar"
            outlined
            color="#770000"
            rounded
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
          <v-date-picker
          color="#770000"
          style="background: #F6E1E1; border: 1px solid #770000; color:#770000;"
          v-model="field.date"
          @input="menu = false"
          ></v-date-picker>
      </v-menu>
    </v-col>
    </div>
</template>

<script>
    export default {
        name: 'calender',
        props: [
            'fields', "intersect"
        ], 
        data() {
            return {
                menu: false,
                modal: false,
                field: this.fields,
            }
        },
        created(){
            this.$emit("fields", this.field);
        },
        updated(){
           this.intersect();
        }
    }
</script>

<style scoped>

</style>