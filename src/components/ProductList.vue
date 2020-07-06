<template>
    <div>
        <div v-for="item in products" :key="item.id" class="q-pa-sm ">
            <q-card flat bordered>
                <div class="text-h4 q-pa-sm">
                    {{ item.name }}

                    <q-chip
                        color="primary"
                        text-color="white"
                        icon="payments"
                        class="q-pa-md q-ma-sm float-right"
                    >
                        {{ item.price | currency }}
                    </q-chip>
                </div>
                <q-card-section class="q-ma-sm">
                    {{ item.description }}
                    <q-btn
                        outline
                        class=" float-right"
                        v-on:click="handleProductAdd(item)"
                    >
                        Add To Cart
                    </q-btn>
                </q-card-section>
            </q-card>
        </div>
        <page-controls />
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    import PageControls from './PageControls';

    export default {
        components: { PageControls },
        computed: {
            ...mapGetters({ products: 'processedProducts' }),
        },
        filters: {
            currency(value) {
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                }).format(value);
            },
        },
        methods: {
            ...mapMutations({ addProduct: 'cart/addProduct' }),
            handleProductAdd(product) {
                this.addProduct(product);
                this.$router.push('/cart');
            },
        },
    };
</script>

<style lang="scss" scoped></style>
