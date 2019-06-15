<template>
  <div class="article-actions">
    <div class="article-meta">
      <a href="profile.html">
        <img v-bind:src="author.image">
      </a>
      <div class="info">
        <a href class="author">{{ author.username}}</a>
        <span class="date">{{ publishTime }}</span>
      </div>

      <button class="btn btn-sm btn-outline-secondary">
        <i class="ion-plus-round"></i>
        &nbsp;
        Follow {{ author.username }}
      </button>
      &nbsp;
      <button class="btn btn-sm btn-outline-primary">
        <i class="ion-heart"></i>
        &nbsp;
        Favorite Post
        <span class="counter">({{ article.favoritesCount }})</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {Article, Author} from '@/utils/apiDataType';
  import {toHumanDate} from "@/utils/dateHelper";

  @Component
export default class ArticleAction extends Vue {
  @Prop()
  private article!: Article;

  get publishTime(): string {
    return toHumanDate(this.article.createdAt);
  }

  get author(): Author {
    return this.article.author;
  }
}
</script>

<style>
</style>
