<template>
  <div>{{ rawHtml }}</div>
  <!-- <div>{{ rawHtml2 }}</div> -->
  <div>{{ rawHtml3 }}</div>
  <h1 v-html="rawHtml3"></h1>

  <h2 v-bind:class="{ active: isActive }">Hello Worlds!</h2>
  <h2 :class="{ active: isActive }">Hello Worlds!</h2>
  <button @click="change">버튼</button>

  <h3 style="color: orange; font-size: 24px">스타일 바인딩 테스트 입니다.</h3>
  <h3 :style="{ color: fontColor, fontSize: fontSize + 'px' }">
    스타일 바인딩 테스트 입니다.
  </h3>
</template>

<script>
export default {
  data() {
    return {
      rawHtml: "이것은 우리의 죽음에 관한 이야기다.",
      // rawHtml2: <span style="color:red">이렇게 쓰면 어떻게 되나</span>, 이건 안됨
      rawHtml3: '<span style="color:red">이렇게 쓰면 어떻게 되나</span>',
      isActive: false,
      fontSize: 48,
      fontColor: "orange",
    };
  },
  methods: {
    change() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
h2.active {
  color: green;
}
</style>
