<template>
  <span>This is home page</span>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component
export default class Home extends Vue {}
</script>
