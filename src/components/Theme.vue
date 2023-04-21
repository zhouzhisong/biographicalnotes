

<template>
  <div class="toop-tip-box">
    <div class="color-box">
      <div v-for="item in colors">
        <div class="item-color-1 item" :style="item.background" @click="changeTheme(item.color)"></div>
      </div>
      <div class="drapdown-icon">
        <input type="color" class="color-input" :value="colorRef" @change="colorChange($event)"
          @input="colorChange($event)" />
      </div>
    </div>
  </div>
</template>

<script setup >
import { defineProps, defineEmits, ref } from 'vue'
const emits = defineEmits(['changeTheme', 'colorChange'])
const props = defineProps({
  colors: {
    type: Array,
    default: [
      { color: "#062743", background: "background-color:#062743" },
      { color: "#7194a9", background: "background-color:#7194a9" },
      { color: "#795548", background: "background-color:#795548" },
      { color: "#907cb3", background: "background-color:#907cb3" },
    ]
  }
})
const colorRef = ref("#EB5505");
const changeTheme = (color) => {
  document.body.style.setProperty("zs--bgcolor", color);
  emits('changeTheme', color)
}
const colorChange = (e) => {
  emits("changeTheme", e.target.value);
}
</script>

<style lang='scss' scoped>
button {
  width: 100px;
}

.item-color-1 {
  background-color: var(zs--bgcolor);
}

.item-color-1 {
  background-color: #25252a;
}

.item-color-2 {
  background-color: #efb788;
}

.item-color-3 {
  background-color: #7194a9;
}

.item-color-4 {
  background-color: #795548;
}

.item-color-5 {
  background-color: #a487d8;
}

.item-color-6 {
  background-color: #4caf50;
}

.item {
  width: 16px;
  height: 16px;
  margin: 10px 0;
}

.item:hover {
  border: 1px rgb(14, 11, 11) solid;
  cursor: pointer;
}

.toop-tip-box {
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 260px;
  position: fixed;
  border: 1px #e2e1e1 solid;
  right: 50px;
  top: 100px;
  align-items: center;
  justify-content: space-around;

  .color-box {
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .drapdown-icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .drapdown-icon:hover {
    cursor: pointer;
  }

  .menu-btn {
    background-color: transparent;

    &:hover {
      background-color: #928f8a33;
    }
  }
}

.color-input {
  padding: 0;
  width: 20px;
  height: 24px;
  line-height: 30px;
  border: 0px;
  margin: 10px;
  border-radius: 5px;
  background-color: transparent;
}
</style>