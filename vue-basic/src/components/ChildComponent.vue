<template>
  <div>{{ sendProps1 }}</div>
  <div>{{ sendProps2 }}</div>
  <div>{{ sendProps3.id }}</div>
  <div>{{ sendProps3.name }}</div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
interface Obj {
  id: numver;
  name: string;
}
interface Props {
  sendProps1: string;
  sendProps2: number;
  sendProps3: Obj;
}

const props = defineProps<Props>();
const { sendProps1, sendProps2, sendProps3 } = toRefs(props);
</script>

<style lang="scss" scoped></style>
