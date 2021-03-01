<template>
    <v-container fluid>
        <v-col sm="12">
            <v-textarea 
                :label="field.label"
                v-model="field.answer"
                rounded
                outlined
                color="#770000"
                :value="field.answer"
                rows="2"
            ></v-textarea>
        </v-col>
    </v-container>
</template>

<script>
    export default {
        name: 'text-area',
        props:  [
            'fields', 'label'
        ],
        data() {
            return {
                field: this.fields
            };
        },
        created() {
            this.$emit("fields", this.field);
        },
    }
</script>

<style scoped>

</style>