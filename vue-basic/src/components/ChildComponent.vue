<template>
  <button @click="sendEvent">자식컴포넌트에서 만든 버튼.</button>
</template>

<script>
export default {
  data() {
    return {
      text: "자식컴포넌트에서 선언된 데이터입니다.",
    };
  },
  methods: {
    sendEvent() {
      this.$emit("send-event", this.text);
    },
  },
};
</script>

<style lang="scss" scoped></style>
