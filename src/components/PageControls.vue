<template>
    <div v-if="pageCount > 1" class="text-right">
        <q-btn-group>
            <q-btn
                v-for="i in pageNumbers"
                v-bind:key="i"
                v-bind:color="colorButtonCurrentPage(i)"
                v-on:click="setCurrentPage(i)"
            >
                {{ i }}
            </q-btn>
        </q-btn-group>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations } from 'vuex';
    export default {
        computed: {
            ...mapState(['currentPage']),
            ...mapGetters(['pageCount']),
            pageNumbers() {
                return [...Array(this.pageCount + 1).keys()].slice(1);
            },
        },
        methods: {
            ...mapMutations(['setCurrentPage']),
            colorButtonCurrentPage(n) {
                return n == this.currentPage ? 'primary' : 'dark';
            },
        },
    };
</script>
