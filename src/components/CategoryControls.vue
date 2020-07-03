<template>
    <div class="q-gutter-md">
        <div  v-for="c in categories" v-bind:key="c">
            <q-btn class="fit"
                v-on:click="setCurrentCategory(c)"
                v-bind:color="colorButtonCurrentPage(c)"
            >
                {{ c }}
            </q-btn>
        </div>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations } from 'vuex';
    export default {
        computed: {
            ...mapState(['currentCategory']),
            ...mapGetters(['categories']),
        },
        methods: {
            ...mapMutations(['setCurrentCategory']),
            colorButtonCurrentPage(n) {
                return n == this.currentCategory ? 'primary' : 'dark';
            },
        },
    };
</script>
