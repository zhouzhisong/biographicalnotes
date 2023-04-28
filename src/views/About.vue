<template>
  <div class="about">
    <div class="content-wrap">
      <div class="avatar">
        <el-avatar :size="300" fit="fill" :src="url" />
      </div>
      <div class="wide">
        <h1>周志松 </h1>
        <h2>Front Engineer</h2>
        <p>爱神的箭静安寺的计算机阿斯加德就爱睡觉觉</p>
      </div>
    </div>
  </div>
</template>

<script  setup>
const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'


</script>

<style lang="scss" scoped>
.about {
  background-color: #2b2d42;
  color: #8d99ae;
  box-sizing: border-box;
  width: 80%;
  margin: 0 auto;

  .content-wrap {
    height: 400px;
    display: flex;

    .avatar {
      display: flex;
      align-items: center;
      justify-content: end;
      flex: 1;
    }

    .wide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      padding: 0 20px;
      flex: 1;

      h1,
      h2 {
        font-family: 'caveat', cursive;
        font-weight: 400;
        color: #edf2f4;
        text-align: center;
        margin-top: 20px;
      }

      h1 {
        font-size: 80px;
      }

      h2 {
        font-size: 40px;
      }

      p {
        text-align: center;
        margin-top: 20px;
      }
    }
  }
}
</style>