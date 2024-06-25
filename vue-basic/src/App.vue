<template>
  <div>
    부모컴포넌트 레이아웃
    <ChildComponent @send-event="parentEvent" />
  </div>
</template>

<script>
import ChildComponent from "./components/ChildComponent.vue";

const baba = "";

export default {
  components: {
    ChildComponent,
  },
  methods: {
    parentEvent(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
