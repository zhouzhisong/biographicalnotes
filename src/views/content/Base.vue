<template>
  <div class="base">

    <div class="info">
      <h2>周志松</h2>
      <div class="basic-info">
        <div class="sex">性别:男 </div>
        <div class="age">年龄:32 </div>
        <div class="mobile">手机号:15517139110 </div>
        <div class="email">邮箱:15517139110@163.com </div>
      </div>
      <div class="status">
        <div class="address">北京 </div>
        <div class="job">在职 </div>
      </div>
    </div>
    <div class="avatar">
      <el-image style="width: 80px; height: 80px;border-radius: 2px;" :src="url" />
    </div>
  </div>
</template>
<script setup >
import { ref, onMounted, computed } from 'vue'
import { useStore } from "vuex";

const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

const store = useStore()
onMounted(() => {

});
const onChange = (color) => {
  console.log('color change', color);
  store.commit('app/setThemeColor', color)
}
</script>



<style lang='scss' scoped>
.base {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    font-size: 12px;

    h2 {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 10px;
    }

    .basic-info {
      display: flex;
      margin-bottom: 15px;

      .sex {
        margin-right: 15px;
      }

      .age {
        margin-right: 15px;
      }

      .mobile {
        margin-right: 15px;
      }

      .email {
        margin-right: 15px;
      }
    }

    .status {
      display: flex;

      .job {
        margin-right: 15px;
      }

      .address {
        margin-right: 15px;
      }
    }
  }

  .avatar {
    padding: 5px;
  }
}
</style>