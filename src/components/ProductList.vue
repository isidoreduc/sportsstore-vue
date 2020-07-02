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
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['products']),
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
