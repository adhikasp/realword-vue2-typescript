<template>
  <div class="article-preview">
    <div class="article-meta">
      <router-link :to="{ name: 'article', params: { slug: this.article.author.username }}">
        <img :src="this.article.author.image" alt="Writer profile picture">
      </router-link>
      <div class="info">
        <a href class="author">{{ this.article.author.username }}</a>
        <span class="date">{{ publishDate }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ this.article.favoritesCount }}
      </button>
    </div>
    <router-link :to="{ name: 'article', params: { slug: this.article.slug }}">
      <h1>{{ this.article.title }}</h1>
      <p>{{ this.article.description }}</p>
      <span>Read more...</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { toHumanDate } from "@/utils/dateHelper";
import { Article } from "@/utils/apiDataType";

@Component
export default class ArticlePreview extends Vue {

  @Prop()
  private article!: Article;

  get publishDate() {
    return toHumanDate(this.article.createdAt);
  }
}
</script>
