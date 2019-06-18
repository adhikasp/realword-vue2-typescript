<template>
  <nav class="navbar navbar-light" id="nav">
    <div class="container">
      <router-link to="/" class="navbar-brand">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item" v-if="this.userStore.isLoggedIn">
          <router-link to="" class="nav-link">
            <i class="ion-compose"></i>&nbsp;New Post
          </router-link>
        </li>
        <li class="nav-item" v-if="this.userStore.isLoggedIn">
          <router-link to="" class="nav-link">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            v-if="!this.userStore.isLoggedIn"
            :to="{name: 'login'}"
            class="nav-link">
            Login
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            v-if="!this.userStore.isLoggedIn"
            :to="{name: 'register'}"
            class="nav-link">
            Register
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            v-if="this.userStore.isLoggedIn"
            to=""
            class="nav-link">
            {{ this.userStore.user.username }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { UserStore } from '@/store/User.vuex';

@Component
export default class Header extends Vue {

  private userStore: UserStore = UserStore.CreateProxy(this.$store, UserStore);

}
</script>
