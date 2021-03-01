
<template>
    <div>
        <v-col>
          <v-text-field
            id="text-field"
            v-model="field.text"
            :label="field.label"
             rounded
             outlined
             color="#770000"
             background="#F6E1E1"
            :value="field.text"
          ></v-text-field>
        </v-col>
    </div>
</template>

<script>
    export default {
        name: 'txt',
        props:  ['fields'],
        data() {
            return {
                field: this.fields,
            };
        },
        created() {
            this.$emit("fields", this.field);
        },
    }
</script>

<style scoped>
#text-field{
    min-width: 120px;
    background: #F6E1E1;
}
</style>