<template>
    <div>
      <v-col
        cols="11"
        sm="5"
      >
      <v-menu
        ref="menu"
        color="#770000"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-top="150"
        :return-value.sync="field.time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="field.time"
            :label="field.label"
            prepend-inner-icon="mdi-clock-time-four-outline"
            outlined
            readonly
            color="#770000"
            rounded
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          color="#770000"
          v-if="menu"
          v-model="field.time"
          full-width
          @click:minute="$refs.menu.save(field.time)"
        ></v-time-picker>
      </v-menu>
    </v-col>
    </div>
</template>

<script>
    export default {
        name: 'clock',
        props: [
            'fields'
        ],
        data() {
        return { 
            menu: false,
            modal: false,
            field: this.fields
            }
        },
        created(){
            this.$emit("fields", this.field);
        }
    }


</script>

<style scoped>

</style>