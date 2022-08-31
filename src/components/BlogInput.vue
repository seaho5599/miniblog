<template>
  <div class="input-wrap shadow">
    <input type="text" v-model="newItem" class="input-box" maxlength="30" @keyup.enter="addItem">
    <div class="option">
      <span @click="addicon(0)" class="img1">
        이미지1
      </span>
      <span @click="addicon(1)" class="img2">
        이미지2
      </span>
      <span @click="addItem" class="add-bt">
        <i class="fas fa-feather-alt add-bt-icon"></i>
      </span>
    </div>
    <!-- 안내창 -->
    <ModalView :show="showModal" @closemodal="showModal = false">
      <template #header>
        <h3>안내창</h3>
      </template>
      <template #body>
        <h2>내용을 작성하여 주세요.</h2>
      </template>
      

    </ModalView>
  </div>
</template>

<script>
  import {
    ref
  } from 'vue';
  import ModalView from '@/components/common/ModalVue.vue'
  import {useStore} from 'vuex'

  export default {
    components: {
      ModalView,
    },
    setup() {
      const store = useStore();


      const newItem = ref('');
      const newIcon = ref(0)
      const showModal = ref(false)


      const addItem = () => {
        let temp = newItem.value;
        let icon = newIcon.value
        // 앞쪽 뒷쪽 공백 제거
        temp = temp.trim();
        // 추후 업데이트 예정(정규표현식-문자열체크 문법)
        //  앞자리공백   공백    뒷자리공백
        if (temp !== '') {
          // context.emit("additem", temp, icon)
          // store.commit('ADD_MEMO',{item:temp, index:icon});
          store.dispatch('fetchAddMemo', {item:temp, index:icon})

          resetItem();
        }else{
          showModal.value = true
        }
      }

      // 내용 재설정
      const resetItem = () => {
        newItem.value = '';
      }
      const addicon = (index) => {
        newIcon.value = index;
        console.log(index)
      }


      return {
        newItem,
        addItem,
        addicon,
        showModal,

      }
    }
  }
</script>

<style scoped>
  .input-wrap {
    position: relative;
    display: block;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;
    margin: 20px 0;
  }

  .input-wrap input {
    border-style: none;
  }

  .input-wrap input:focus {
    outline: none;
  }

  .input-box {
    width: calc(93% - 250px);
    font-size: 16px;
    margin-left: 20px;
  }

  .option {
    position: absolute;
    right: 0;
    top: 0;
    display: block;


  }

  .img1 {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url('@/assets/images/animals1.png') no-repeat center;
    background-size: cover;
    font-size: 0;
    cursor: pointer;
  }

  .img2 {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url('@/assets/images/animals2.png') no-repeat center;
    background-size: cover;
    font-size: 0;
    cursor: pointer;
  }

  .img1:active,
  .img2:active,
  .img3:active {
    outline: 3px solid hotpink;
  }

  .add-bt {
    display: inline-block;
    background-color: hotpink;
    cursor: pointer;
  }

  .add-bt-icon {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
    margin: 0 20px;
  }
</style>