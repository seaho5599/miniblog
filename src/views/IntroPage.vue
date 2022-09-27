<template>
<Transition name="fade">
  <div class="intro" @click.stop="gohome">
    <div class="inner">
      <div class="intro-img">      
      </div>
      <p class="intro-txt">miniblog</p>
      <div class="intro-footer"></div>

    </div>
  </div>
  </Transition>
</template>

<script>
  import {
    useRouter
  } from 'vue-router'
export default {
  setup(){
    const router = useRouter()
    const gohome = () => {
        router.push('/page-miniblog/home/')
      }
    return{
      gohome
    }
  }
}
</script>

<style scoped>
  .intro{
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    border: 2px solid #333;
    
    /* background: red; */
  }
  .inner{
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 100px;
    
    /* background: red; */
  }
  .intro-img{
    position: relative;
    display: block;
    width: 500px;
    height: 500px;
    margin: 0 auto;
    background: url('@/assets/images/introimg.png') no-repeat center;
    background-size: cover;
  }
  .intro-txt{
    font-size: 32px;
    text-transform: uppercase;
    text-align: center;
    margin: 50px;
    font-weight: 600;
  }
  .intro-footer{
    position: relative;
    display: block;
    width: 100%;
    height: 150px;
    border: 2px solid #333;
    background: #333;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>