import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
    foo: 'robot-foo',
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then(result => commit('updateParts', result.data))
        .catch(console.error);
    },
    addRobortToCart({ commit, state }, robort) {
      const cart = [...state.cart, robort];
      return axios.post('/api/cart', cart)
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
    foo(state) {
      return `robot-getter/${state.foo}`;
    },
  },
};
