export default {
  created() {
    this.$store.dispatch('roborts/getParts');
  },
  computed: {
    parts() {
      return this.$store.state.roborts.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
