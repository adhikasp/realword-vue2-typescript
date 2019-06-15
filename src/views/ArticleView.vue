<template>
  <div class="article-page">
    <ArticleHeader :article="article" />
    <div class="container page">
      <ArticleContent :article="article" />
      <hr />
      <ArticleAction :article="article" />
      <ArticleComment :slug="article.slug" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Article } from '@/utils/apiDataType';
import ConduitApi from '@/utils/api';

import ArticleHeader from '@/components/article/ArticleHeader.vue';
import ArticleContent from '@/components/article/ArticleContent.vue';
import ArticleAction from '@/components/article/ArticleAction.vue';
import ArticleComment from '@/components/article/ArticleComment.vue';

@Component({
  components: {
    ArticleHeader,
    ArticleContent,
    ArticleAction,
    ArticleComment,
  },
})
export default class ArticleView extends Vue {

  private article: Article = {
    slug: '',
    title: '',
    description: '',
    body: '',
    tagList: [],
    createdAt: '',
    updatedAt: '',
    favorited: false,
    favoritesCount: 0,
    author: {
      username: '',
      bio: '',
      image: '',
      following: false,
    },
  };

  public mounted() {
    ConduitApi.getArticle(this.$route.params.slug)
      .then((response) => {
        this.article = response.data.article;
      });
  }
}
</script>
