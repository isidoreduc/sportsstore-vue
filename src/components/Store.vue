<template>
    <div>
        <navbar title="SPORTS STORE" />

        <div class="row">
            <div class="col-3 bg-blue-1 q-pa-md">
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
    import CategoryControls from './CategoryControls';
    import Navbar from './Navbar';

    export default {
          
        components: {
            ProductList,
            CategoryControls,
            Navbar,
        },
    };
</script>

<style lang="scss" scoped></style>
