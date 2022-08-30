<template>
  <div class="list-wrap">
    <TransitionGroup name="list" tag="ul">
    <!-- <ul> -->
        <li v-for="(item, index) in items" v-bind:key="index" class="shadow"> 
          <i class="fas fa-edit check-bt" @click="updateMemo(item, index)" :class="{memoComplete:item.complete}"></i>
          
          <span :class="{memoCompleteTxt:item.complete}">{{item.memotitle}}</span>
          <div class="info">
          <span class="icon" :style="{backgroundImage:'url(' + require(`@/assets/images/${item.memoicon}`) + ')'}"></span>
          <span class="date">{{item.memodate}}</span>
          <span class="remove-bt" @click="removeMemo(item.id, index)">
            <i class="far fa-trash-alt"></i>
          </span>
          </div>
        </li>  
    <!-- </ul> -->
    </TransitionGroup>
  </div>
</template>

<script>
import {ref} from 'vue'
import { useStore } from 'vuex'

export default {

  setup() {

    // vuex store 사용
    const store = useStore();
    const items = ref([]);
    items.value = store.state.memoItemArr;

    const removeMemo = (item, index) => {
      // context.emit('removeItem', item, index)
      store.commit('DELETE_MEMO',{item, index})
    }
    const updateMemo = (item ,index) => {
      // context.emit("updateitem",item, index)
      store.commit('UPDATE_MEMO',{item,index})
    }
    
    return {      
      removeMemo,
      updateMemo,
      items
    }

  }
}
</script>

<style scoped>
  li {
    display: flex;
    min-height: 50px;
    line-height: 50px;
    margin: 10px 0;
    background-color: #fff;
    border-radius: 5px;
    padding: 0 20px;
  }
  .info{
    margin-left: auto;

  }
  .icon{
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    background: pink;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .date{

  }
  .remove-bt {
    cursor: pointer;
    margin-left: 10px;
    color: hotpink;
  }
  .check-bt{
    color: #62acde;
    line-height: 50px;
    margin-right: 10px;
    cursor: pointer;
  }
  .memoComplete{
    color: #63adad;

  }
  .memoCompleteTxt{
    color: #63adad;
    text-decoration: line-through;
  }
/* 애니메이션 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>