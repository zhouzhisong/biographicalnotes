
<template>
  <div class="main-container">
    <div class="content" id="PDF">
      <VueDraggableNext @change="log" :move="checkMove">
        <Base />
        <Education />
        <Skills />
        <Wrok />
        <Project />
        <Evaluation />
        <Theme @changeTheme="onChange" :colors="colors" />
      </VueDraggableNext>
    </div>
  </div>
</template>
<script setup >
import { VueDraggableNext } from "vue-draggable-next";
import { ref, onMounted } from 'vue'
import { useStore } from "vuex";
import Base from './content/Base.vue'
import Skills from './content/Skills.vue'
import Wrok from './content/Wrok.vue'
import Education from './content/Education.vue'
import Project from './content/Project.vue'
import Evaluation from './content/Evaluation.vue'
import Theme from '../components/Theme.vue'
const colors = ref([
  { color: "#062743", background: "background-color:#062743" },
  { color: "#68412C", background: "background-color:#68412C" },
  { color: "#13442A", background: "background-color:#13442A" },
  { color: "#1D6357", background: "background-color:#1D6357" },
  { color: "#9E552E", background: "background-color:#9E552E" },
]);

const store = useStore()
const log = (e) => {
  console.log(e);
}
const checkMove = (e) => {
  console.log(e);
}

const onChange = (color) => {
  store.commit('app/setThemeColor', color)
}





</script>

<style lang='scss' scoped>
.main-container {
  width: 100%;
  background-color: var(--zs-bgcolor-1);
  min-width: 800px;

  .content {
    box-sizing: border-box;
    flex-direction: column;
    display: flex;
    margin: 20px auto;
    min-height: 100vh;
    max-width: 100%;
    width: 756px;
    height: auto;
    overflow: auto;
    padding: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07), 0 6px 20px 0 rgba(0, 0, 0, 0.03);

  }
}
</style>
