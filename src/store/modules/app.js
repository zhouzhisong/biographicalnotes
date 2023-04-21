export const app = {
  namespaced: true,
  state: {
    themeColor: "#062743",
  },
  mutations: {
    setThemeColor(state, color) {
      console.log(color);
      state.themeColor = color;
      localStorage.setItem("themeColor", color.toString());
    },
  },
  getters: {
    themeColor: (state) => state.themeColor,
  },
};
