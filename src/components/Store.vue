<template>
  <div class="q-pa-md q-gutter-sm">
    <q-toolbar class="bg-primary text-white">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-toolbar-title shrink>SPORTS STORE</q-toolbar-title>
      <q-space></q-space>
      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>

    <div class="row">
      <div class="col-3 bg-dark q-pa-sm">
        <h4 class="text-white q-ma-sm">Categories</h4>
      </div>
      <div class="col-9 q-pa-sm">
        <product-list />
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from './ProductList';
export default {
  components: {
    ProductList,
  },
};
</script>

<style lang="scss" scoped></style>
