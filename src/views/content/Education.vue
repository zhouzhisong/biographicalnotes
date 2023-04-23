

<template>
  <div class="edu">
    <div class="edu-title">
      教育背景
    </div>
    <div class="edu-details">
      <div class="edu-school">学校：{{ firstSchool }} </div>
      <div class="edu-time">时间：{{ time }} </div>
      <div class="edu-subject">学历：{{ education }} </div>

    </div>
  </div>
</template>
<script setup >
import { reactive, onMounted, computed, } from 'vue'
import { useStore } from "vuex";
import userInfo from '../../utils/userInfo'
const { firstSchool, time, education } = reactive(userInfo.educationList[0])
const store = useStore()
const bgColor = computed(() => store.state.app.themeColor)
</script>
<style lang='scss' scoped>
.edu {
  width: 100%;

  .edu-title {
    height: 30px;
    background-color: v-bind(bgColor);
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: aliceblue;
    margin: 15px 0;
  }

  .edu-details {
    /* background-color: aquamarine; */
    margin-left: 12px;

    .edu-school {
      margin-bottom: 15px;
    }

    .edu-time {
      margin-bottom: 15px;
    }

    .edu-subject {
      margin-bottom: 15px;
    }
  }
}
</style>