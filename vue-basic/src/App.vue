<template>
  <button @click="changeMessage">{{ message }}</button>
  {{ watchMessage }}
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, vue watch",
      watchMessage: "",
    };
  },
  watch: {
    message() {
      // window.alert("message변수에 담긴 데이터가 변경되었습니다. warning");
      this.watchMessage = "Watch 동작";
    },
  },
  methods: {
    changeMessage() {
      this.message = "change";
    },
  },
};
</script>

<style lang="scss" scoped></style>
