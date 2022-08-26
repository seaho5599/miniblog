<template>
  <header class="header">
    <h1>Header</h1>
    <p>
      <span>{{timestamp}}</span>
      </p>
  </header>
</template>

<script>
export default {
  data(){
      return{
      timestamp:""  
      }
    },
    created(){
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const weekList = new Array("Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.");
    const week = weekList[now.getDay()];
    this.timestamp = `${month}/${date} ${week}`;
    },

  setup(){
    
    return{

    }
  }
}
</script>

<style scoped>
  h1{
    font-weight: 700;
    text-align: center; 
  }
  p{
    display: inline-block;
    width: 100%;
    text-align: right;
    
  }
</style>