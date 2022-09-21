<template>
  <header class="header">
    <div class="header-top">
    <h1>{{title}}</h1>
    <p class="date">{{todoDate}}</p>
    </div>
    <BlogTitle/>
    <BlogInput/>
  </header>
</template>

<script>
import {ref} from 'vue';
import {useStore} from 'vuex';
import BlogInput from '@/components/BlogInput.vue'
import BlogTitle from '@/components/BlogTitle.vue'
export default {
  components:{BlogTitle,BlogInput},
  setup() {
    const title = ref('');
    const store = useStore();
    // title.value = computed(() => store.state.memoStore.headerText)
    title.value = store.state.memoStore.headerText
    // console.log(title.value)
    const todoDate = ref('')
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const weekList = new Array("Sun.", "Mon", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.");
    const week = weekList[now.getDay()];
    todoDate.value = `${month}/${date} ${week}`
    return {
      title,todoDate
    }
  }
}
</script>

<style scoped>
  .header{
    display: flex;
    padding: 20px 50px;
    background: skyblue;
    height: 300px;
    flex-direction: column;
    justify-content: space-between;
  }
  .header-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-weight: 700;
    text-align: center;
    font-size: 18px;
  }
  .date{
    /* float: right; */
    /* font-size: 18px; */
    margin: 10px 0;
    line-height: 18px;
  }
</style>