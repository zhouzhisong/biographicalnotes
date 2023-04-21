<template>
  <div class="head">
    <div></div>
  </div>
  <Theme @changeTheme="onChange" :colors="colors"></Theme>
</template>
<script setup >
import { ref, onMounted, computed } from 'vue'
import { useStore } from "vuex";
import Theme from "../components/Theme.vue";

const colors = ref([
  { color: "#062743", background: "background-color:#062743" },
  { color: "#68412C", background: "background-color:#68412C" },
  { color: "#13442A", background: "background-color:#13442A" },
  { color: "#1D6357", background: "background-color:#1D6357" },
  { color: "#9E552E", background: "background-color:#9E552E" },
]);
const store = useStore()
const bgColor = computed(() => store.state.app.themeColor)
onMounted(() => {
  // 设置初始化组件颜色
  // document.body.style.setProperty("zs--bgcolor-name", colors.value[0].color);
});
const onChange = (color) => {
  console.log('color change', color);
  store.commit('app/setThemeColor', color)
}
</script>



<style lang='scss' scoped>
.head {
  width: 100%;
  height: 100px;
  background-color: v-bind(bgColor);
}
</style>