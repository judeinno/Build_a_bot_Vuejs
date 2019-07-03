import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    parts: null,
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then(result => commit('updateParts', result.data))
        .catch(console.error);
    },
    addRobortToCart({ commit, state }, robort) {
      const cart = [...state.cart, robort];
      axios.post('/api/cart', cart)
        .then(() => commit('addRobortToCart', robort));
    },
  },
  mutations: {
    addRobortToCart(state, robort) {
      state.cart.push(robort);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    },
  },
});
