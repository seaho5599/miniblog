<template>
  <div class="title">
    <p class="title__message">{{ message }}</p>
    <p class="title__task">
      You've got
      <span class="title__task-total">{{ taskTotal }}</span> tasks today.
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchReadMemo");
    const message = ref("");
    message.value = "Good Moring Bro";
    const taskTotal = ref("");
    const total = store.state.memoStore.memoItemArr.length;
    taskTotal.value = total;
    console.log(taskTotal.value);

    return {
      message,
      taskTotal,
    };
  },
};
</script>

<style>
.title {
  color: #fff;
}
</style>
