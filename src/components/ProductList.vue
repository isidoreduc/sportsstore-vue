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
                <q-card-section>
                    {{ item.description }}
                </q-card-section>
            </q-card>
        </div>
        <page-controls />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import PageControls from './PageControls';

    export default {
        components: { PageControls },
        computed: {
            ...mapGetters({products: "processedProducts"}),
        },
        filters: {
            currency(value) {
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                }).format(value);
            },
        },
    };
</script>

<style lang="scss" scoped></style>
