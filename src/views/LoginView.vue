<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Login</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'register'}">Doesn't have an account?</router-link>
          </p>

          <ul class="error-messages">
            <li>That email is already taken</li>
          </ul>

          <form @submit.prevent>
            <fieldset class="form-group">
              <input
                  v-model="loginDetail.email"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input
                  v-model="loginDetail.password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password">
            </fieldset>
            <button
                v-on:click="greet"
                class="btn btn-lg btn-primary pull-xs-right">
              Login
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { UserStore } from "@/store/User.vuex";
  import { UserAuthenticationRequest } from "@/utils/apiDataType";

  @Component
  export default class LoginView extends Vue {

    private user: UserStore = UserStore.CreateProxy(this.$store, UserStore);

    public loginDetail: UserAuthenticationRequest = {
      email: '',
      password: '',
    };

    greet() {
      console.log(this.loginDetail);
    }

  }
</script>

<style scoped>

</style>
