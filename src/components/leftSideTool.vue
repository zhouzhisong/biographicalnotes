
<template>
  <div class="box">
    <div class="content-box" @click="exportToPDF">
      <el-icon>
        <DocumentAdd />
      </el-icon>
      导出简历

    </div>
  </div>
</template>
<script setup >


import { defineEmits } from 'vue';
const emits = defineEmits(['exportPDF'])

const exportToPDF = () => {
  emits('exportPDF')
}

</script>


<style lang='scss' scoped>
.box {
  transition: fill .5s ease;
  box-sizing: border-box;

  .content-box {
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: .8px;
    text-transform: uppercase;
    border: 1px solid hsla(0, 0%, 65%, .397);
    padding: 10px 20px;
    font-size: 12px;
  }
}
</style>