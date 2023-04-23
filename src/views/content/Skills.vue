

<template>
  <div class="skills">
    <div class="skills-title">
      擅长技能
    </div>
    <div class="skills-list">
      <div class="skill" v-for="(item, id) in list" :key="id">{{ `${item.id}.${item.skill}` }} </div>
    </div>
  </div>
</template>
<script setup >
import { reactive, onMounted, computed } from 'vue'
import { useStore } from "vuex";
import userInfo from '../../utils/userInfo'
const list = reactive(userInfo.skillList)
console.log(list);
const store = useStore()
const bgColor = computed(() => store.state.app.themeColor)
onMounted(() => {
});
</script>
<style lang='scss' scoped>
.skills {
  width: 100%;
  background-color: var(zs--bgcolor);

  .skills-title {
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

  .skills-list {
    margin-left: 12px;
  }

}
</style>