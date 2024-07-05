<template>
  <div>
    <input type="text" v-model="inputValue1" />
    <input type="text" :value="inputValue2" @input="inputValue2" />
  </div>
  <div>{{ inputValue1 }}</div>
  <div>{{ inputValue2 }}</div>
  <ChildComponent :text="inputValue1" />
</template>

<script>
import ChildComponent from "./components/ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      inputValue1: "",
      inputValue2: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
