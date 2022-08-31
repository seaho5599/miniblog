import {
  createStore
} from 'vuex';
import memoStore from './modules/memoStore.js';

export default createStore({
  modules:{
    memoStore
  }
})