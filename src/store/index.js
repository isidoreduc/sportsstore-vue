import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

const baseUrl = 'http://localhost:3500';
const productsUrls = `${baseUrl}/products`;
const categoriesUrls = `${baseUrl}/categories`;

export default new Vuex.Store({
    strict: true,
    state: {
        products: [],
        categories: [],
        productsTotal: 0,
        currentPage: 1,
        pageSize: 4,
        currentCategory: 'All',
    },
    getters: {
        productsFilteredByCategory: (state) =>
            state.products.filter(
                (p) =>
                    state.currentCategory == 'All' ||
                    p.category == state.currentCategory
            ),
        processedProducts: (state, getters) => {
            let index = (state.currentPage - 1) * state.pageSize;
            return getters.productsFilteredByCategory.slice(
                index,
                index + state.pageSize
            );
        },
        pageCount: (state, getters) =>
            Math.ceil(
                getters.productsFilteredByCategory.length / state.pageSize
            ),
        categories: (state) => ['All', ...state.categories],
    },
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setCurrentCategory(state, category) {
            state.currentCategory = category;
            state.currentPage = 1;
        },
        setPageSize(state, size) {
            state.pageSize = size;
            state.currentPage = 1;
        },
        setData(state, data) {
            state.products = data.pdata;
            state.categories = data.cdata.sort();
            state.productsTotal = data.pdata.length;
        },
    },
    actions: {
        async getData(context) {
            let pdata = (await Axios.get(productsUrls)).data;
            let cdata = (await Axios.get(categoriesUrls)).data;
            context.commit('setData', { pdata, cdata });
        },
    },
});
