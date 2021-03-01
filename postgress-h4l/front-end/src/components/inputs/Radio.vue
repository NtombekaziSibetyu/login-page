<template>
    <div>
        <v-radio-group v-model="selected" row>
            <v-radio
                color="#770000"
                v-for="(item, idx) in fields.answers"
                :key="idx"
                :label="item.text"
                :value="item.text"
            ></v-radio>
        </v-radio-group>
    </div>
</template>

<script>
export default {
    name: "radio",
    props: ["fields", "intersect"],
    data() {
        return {
            selected: null
        };
    },
    updated() {
        this.fields.selected = this.selected;
        this.intersect();
    },
};
</script>

<style scoped></style>
