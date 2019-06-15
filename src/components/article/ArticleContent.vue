<template>
  <div class="row article-content">
      <div class="col-md-12">
        <p>{{ article.body }}</p>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Article } from '@/utils/apiDataType';

@Component
export default class ArticleContent extends Vue {

  @Prop()
  private article!: Article;

}
</script>

<style>

</style>
