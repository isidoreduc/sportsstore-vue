<template>
  <div class="q-pa-md q-gutter-sm">
    <q-toolbar class="bg-primary text-white">
      <q-btn flat round dense icon="menu" class="q-mr-sm" />
      <q-toolbar-title shrink class='absolute-center'>SPORTS STORE</q-toolbar-title>
      <q-space></q-space>
      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>

    <div class="row">
      <div  class="col-3 bg-blue-1 q-pa-md">
        <category-controls />
      </div>
      <div class="col-9">
        <product-list />
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from './ProductList';
import CategoryControls from "./CategoryControls"

export default {
  components: {
    ProductList, CategoryControls
  },
};
</script>

<style lang="scss" scoped></style>
