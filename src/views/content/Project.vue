

<template>
  <div class="project">
    <div class="project-title">
      项目经历
    </div>
    <div class="project-list" v-for="item in list">
      <div class="company">
        <span>{{ item.firstJobCompany }}</span>
        <span>{{ item.firstJobPostion }}</span>
        <span> {{ item.time }}</span>
      </div>
      <div class="project">
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
        <div class="projectName">{{ item.projectName }}</div>
        <div class="projectDesc">{{ item.projectDesc }}</div>
        <div class="projectLink">{{ item.projectLink }}</div>
      </div>
    </div>
  </div>
</template>
<script setup >
import { ref, onMounted, computed } from 'vue'
import { useStore } from "vuex";
import userInfo from '../../utils/userInfo'
const list = ref(userInfo.projectList)
const store = useStore()
const bgColor = computed(() => store.state.app.themeColor)
onMounted(() => {
  console.log(list);
});
</script>
<style lang='scss' scoped>
.project {
  width: 100%;
  background-color: var(zs--bgcolor);

  .project-title {
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

  .project-list {
    margin: 12px;

    .company {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      font-size: 18px;

      span {
        font-weight: bold;

      }
    }

    .project {
      .projectName {
        margin-bottom: 12px;
        font-size: 18px;
        font-weight: bold;
      }

      .projectDesc {
        margin-bottom: 12px;
      }

    }
  }

}
</style>