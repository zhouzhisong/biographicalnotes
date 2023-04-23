
<template>
  <div class="box">
    <div class="content-box" @click="exportToPDF">
      <el-icon>
        <FolderAdd />
      </el-icon>
      <span>
        导出为PDF
      </span>
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
  position: fixed;
  right: 50px;
  top: 350px;
  height: 240px;
  display: flex;
  align-items: center;


  .content-box {
    width: 80px;
    background-color: aliceblue;
    border: 1px #e1e1f1 solid;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .el-icon {
      margin: 12px 0;
    }

    span {
      font-size: 12px;
      margin-bottom: 12px;
    }
  }
}
</style>