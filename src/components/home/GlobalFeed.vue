<template>
  <div>
    <ArticlePreview v-for="article in articles"
      :key="article.slug"
      :article="article"
      />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ConduitApi from '@/utils/api';
import { Article } from '@/utils/apiDataType';
import ArticlePreview from '@/components/article/ArticlePreview.vue';

@Component({
  components: {
    ArticlePreview,
  },
})
export default class GlobalFeed extends Vue {
  private articles: Article[] = [];

  public mounted() {
    ConduitApi.getGlobalFeed()
      .then((response) => {
        this.articles = response.data.articles;
      });
  }
}
</script>
