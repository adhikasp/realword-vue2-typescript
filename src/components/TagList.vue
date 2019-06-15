<template>
  <div class="tag-list">
    <a v-for="tag in tags"
      :key="tag"
      href=""
      class="tag-pill tag-default">
      {{ tag }}
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ConduitApi from '@/utils/api';
import { Tag } from '@/utils/apiDataType';

@Component
export default class TagList extends Vue {
  tags:Tag[]  = []

  mounted() {
    ConduitApi.getTag()
      .then(response => {
        this.tags = response.data.tags
      });
  }
}
</script>

<style>

</style>
