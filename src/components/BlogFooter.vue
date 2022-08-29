<template>
  <div class="clear-all-wrap">
    <span class="clear-all-bt" @click="clearAllMemo">Clear All</span>
    <span class="copy">Copyright 2022 by Kim Se Ho</span>
  </div>
</template>

<script>
export default {
  setup(){
    const clearAllMemo = () =>{
      // localStorage 에서 내용 전체 삭제
      // 추후 DB 연동 예정
      localStorage.clear();
    }
    return{
      clearAllMemo
    }
  }
}
</script>

<style>
.clear-all-wrap{
  position: relative;
  display: block;
  width: 50%;
  /* height: 50px; */
  line-height: 50px;
  background-color: #fff;
  text-align: center;
  margin: 0 auto;
  border-radius: 5px;
}
.clear-all-bt{

  display: inline-block;
  widows: 100%;
  height: 50px;
  cursor: pointer;
  border: 1px solid hotpink;
  border-radius: 5px;
  margin: 10px;
  color: #fff;
  background-color: #333;
}
.copy{
  display: block;
  font-size: 9px;
  white-space: nowrap;

}
</style>