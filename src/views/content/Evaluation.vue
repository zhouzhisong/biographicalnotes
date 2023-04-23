

<template>
  <div class="evalution">
    <div class="evalution-title">
      自我评价
    </div>
    <div class="evalution-list">
      <div class="evalution" v-for="item in list">{{ `${item}` }} </div>
    </div>
  </div>
</template>
<script setup >
import { reactive, onMounted, computed } from 'vue'
import { useStore } from "vuex";
import userInfo from '../../utils/userInfo'
const list = reactive(userInfo.evaluations)
const store = useStore()
const bgColor = computed(() => store.state.app.themeColor)
onMounted(() => {
  console.log(list);
});
</script>
<style lang='scss' scoped>
.evalution {
  width: 100%;
  background-color: var(zs--bgcolor);

  .evalution-title {
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

  .evalution-list {
    margin-left: 12px;
  }

}
</style>