import Vue from 'vue';
import Vuex from 'vuex';
import { UserStore } from '@/store/User.vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: UserStore.ExtractVuexModule(UserStore),
  },
});
