<template>
 
  <div class="clear-all-wrap">
    <span class="clear-all-bt" @click="clearAllMemo">Clear All</span>
    <span class="copy">Copyright 2022 by KIM SH HO</span>
  </div>

</template>

<script>
import {useStore} from 'vuex'
export default {
  setup() {
    const store = useStore();
    const clearAllMemo = () => {      
      // context.emit('deleteitem')
      // store.commit('CLEAR_MEMO');
      store.dispatch('fetchClearMemo')
    }
    return {
      clearAllMemo      
    }
  }
}
</script>

<style>
.clear-all-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 50px; */
  line-height: 44px;
  background-color: #fff;
  text-align: center;
  margin: 0 auto;
  border-radius: 5px;
}
.clear-all-bt {
  display: inline-block;
  width: 9%;
  height: 44px;
  cursor: pointer;
  border: 1px solid hotpink;
  border-radius: 5px;
  margin: 10px;
  align-self: flex-end;  
}
.copy {
  display: block;
  font-size: 9px;
  white-space: nowrap;
}
</style>