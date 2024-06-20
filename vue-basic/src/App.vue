<template>
  <div>
    <div v-if="isVisible" class="red box"></div>
    <div v-if="!isVisible" class="blue box"></div>
    <div v-if="isVisible === true" class="green box"></div>
    <div v-else class="black box"></div>
    <div class="">
      <li v-for="(item, index) in sampleArray" :key="item">
        {{ item }} / {{ index }}
      </li>
    </div>
    <div>
      <li
        v-for="(user, index) in otherArray"
        :key="user.name"
        @click="openDialog(index, user)"
      >
        {{ user.name }} / {{ user.id }} / {{ index }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      sampleArray: ["a", "b", "c", "d", "e", "f"],
      otherArray: [
        { id: 0, name: "john" },
        { id: 1, name: "doe" },
        { id: 2, name: "hit" },
      ],
    };
  },
  methods: {
    openDialog: function (index, user) {
      console.log(index);
      console.log(user.id);
      console.log(user.name);
    },
  },
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
.black {
  background-color: black;
}
.flex {
  display: flex;
  justify-content: space-between;
}
li {
  list-style: none;
}
</style>
