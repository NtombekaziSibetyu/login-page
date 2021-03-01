<template>
    <div>
        <v-col
            class="d-flex"
            cols="12"
            sm="12"
        >
        <v-select
          class="select"
          v-model="fields.selected"
          :items="fields.answers"
          :label="fields.label"
          rounded
          outlined
          color="#770000"
          backgground="#F6E1E1"
          :multiple="fields.multiple"
          :value="fields.selected"
        ></v-select>
      </v-col>
    </div>
</template>
<script>
    export default {
        name: 'drop',
        props: ['fields'],
    }
</script>

<style scoped>
</style>