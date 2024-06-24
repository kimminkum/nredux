<template>
  <div>
    <ChildComponent
      :sendProps1="title"
      :sendProps2="createAt"
      :sendProps3="obj"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import ChildComponent from "./components/ChildComponent.vue";

interface Obj {
  id: numver;
  name: string;
}

const title = ref<string>("부모 컴포넌트에서 선언된 데이터입니다.");
const createAt = ref<number>(2024);
const obj = reactive<Obj>({ id: 2024, name: "john smith" });
</script>

<style lang="scss" scoped></style>
