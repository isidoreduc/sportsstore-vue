<template>
    <div class="row" v-if="pageCount > 1">
        <div class="col form-group q-ml-xs">
            <select class="form-control select" v-on:change="changePageSize">
                <option value="4">4 per page</option>
                <option value="8">8 per page</option>
                <option value="12">12 per page</option>
            </select>
        </div>

        <div class="col text-right">
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
            ...mapMutations(['setCurrentPage', 'setPageSize']),
            colorButtonCurrentPage(n) {
                return n == this.currentPage ? 'primary' : 'dark';
            },
            changePageSize($event) {
                this.setPageSize(Number($event.target.value));
            },
        },
    };
</script>

<style lang="scss" scoped>
    .select {
        padding: 0.5rem;
        border-radius: 1rem;
        outline: none;
    }
</style>
