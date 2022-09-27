<template>
  <div>
    <BlogHeader/>
    <BlogList/>
    <BlogFooter/>
    <IntroView @closeintro="hideIntro" v-if="introShow"/>
  </div>
</template>

<script>
import {ref} from 'vue';
import BlogHeader from '@/components/BlogHeader.vue'

import BlogList from '@/components/BlogList.vue'
import BlogFooter from '@/components/BlogFooter.vue'
import IntroView from '@/components/IntroView.vue'
export default {
  components: {
    BlogHeader,
    
    BlogList,
    BlogFooter,
    IntroView
  },
  setup() {
    // 첫화면(IntroView) 보여질 여부
    const introShow = ref(false);
    const hideIntro = () => {
      introShow.value = false;
    }
    return {   
      hideIntro,
      introShow
    }
  }
}
</script>

<style>

</style>