props:["title"]

<template>
    <div class="q-pa-md q-gutter-sm">
        <q-toolbar class="bg-primary text-white">
            <q-btn flat round dense icon="menu" class="q-mr-sm" />
            <q-toolbar-title shrink class="absolute-center">{{
                title
            }}</q-toolbar-title>
            <q-space></q-space>
            <q-btn flat round dense icon="whatshot" />
        </q-toolbar>
    </div>
</template>

<script>
    export default {
        props:["title"]
    };
</script>

<style lang="scss" scoped></style>
