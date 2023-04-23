<template>
  <div class="main-container">
    <div class="content" id="PDF">
      <VueDraggableNext @change="log" :move="checkMove">

        <Head />
        <Base />
        <Skills />
        <Wrok />
        <Education />
        <Project />
        <Evaluation />
        <Theme @changeTheme="onChange" :colors="colors" />
      </VueDraggableNext>
      <leftSideTool @exportPDF="exportPDF" />
    </div>

  </div>
</template>
<script setup>
import { VueDraggableNext } from "vue-draggable-next";
import { ref, onMounted } from 'vue'
import { useStore } from "vuex";
import Head from './views/Head.vue'
import Base from './views/Base.vue'
import Skills from './views/Skills.vue'
import Wrok from './views/Wrok.vue'
import Education from './views/Education.vue'
import Project from './views/Project.vue'
import Evaluation from './views/Evaluation.vue'
import Theme from './components/Theme.vue'
import leftSideTool from './components/leftSideTool.vue'

import { ElMessageBox, ElMessage } from 'element-plus'
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";
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
const exportPDF = () => {
  ElMessageBox.confirm(
    '确定导出PDF文件?',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      downloadPdf()
      ElMessage({
        type: 'success',
        message: '导入成功',
      })
    })
    .catch(() => {

    })
}


const downloadPdf = () => {
  return new Promise((resolve, reject) => {
    const htmlElement = document.getElementById('PDF')
    html2canvas(htmlElement, {
      height: htmlElement?.offsetHeight,
      width: htmlElement?.offsetWidth,
      useCORS: true,
      allowTaint: true,
    }).then(canvas => {
      const doc = new jsPDF()
      doc.addImage(canvas, 'image/jpeg', 0, 0, 210, 297)// 单位毫米
      doc.save("zzs.pdf");
    })
  })
}

</script>

<style lang='scss' scoped>
.main-container {
  width: 100%;
  background-color: var(--zs-bgcolor-1);

  .content {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 760px;
    border: 5px #dff0fe solid;
    display: flex;
    justify-content: center;
    margin: 20px auto;

  }
}
</style>