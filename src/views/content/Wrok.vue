

<template>
  <div class="works">
    <div class="works-title">
      工作经历
    </div>
    <div class="works-list" v-for="item in list">
      <div class="company">
        <span>{{ item.firstJobCompany }}</span>
        <span>{{ item.firstJobPostion }}</span>
        <span> {{ item.time }}</span>
      </div>
      <div class="job">
        <div class="job-desc">{{ item.firstJobDesc1 }}</div>
        <div class="job-desc">{{ item.firstJobDesc2 }}</div>
        <div class="job-desc">{{ item.firstJobDesc3 }}</div>
      </div>
      <!-- <div class="skill" v-for="(item, id) in list" :key="id">{{ `${item.id}.${item.skill}` }} </div> -->
    </div>
  </div>
</template>
<script setup >
import { ref, onMounted, computed } from 'vue'
import { useStore } from "vuex";
import userInfo from '../../utils/userInfo'
const list = ref(userInfo.workExperienceList)
const store = useStore()
const bgColor = computed(() => store.state.app.themeColor)
onMounted(() => {
  console.log(list);
});
</script>
<style lang='scss' scoped>
.works {
  width: 100%;
  background-color: var(zs--bgcolor);

  .works-title {
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

  .works-list {
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

    .job {
      .job-desc {
        margin-bottom: 12px;
      }

    }
  }

}
</style>