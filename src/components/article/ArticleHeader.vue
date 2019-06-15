<template>
  <div class="banner">
    <div class="container">

      <h1>{{ article.title }}</h1>

      <div class="article-meta">
        <a href=""><img v-bind:src="article.author.image" /></a>
        <div class="info">
          <a href="" class="author">{{ article.author.username }}</a>
          <span class="date">{{ publishTime }}</span>
        </div>
        <button class="btn btn-sm btn-outline-secondary">
          <i class="ion-plus-round"></i>
          &nbsp;
          Follow {{ article.author.username }}
        </button>
        &nbsp;&nbsp;
        <button class="btn btn-sm btn-outline-primary">
          <i class="ion-heart"></i>
          &nbsp;
          Favorite Post <span class="counter">{{ article.favoritesCount }}</span>
        </button>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {Article, Author} from '@/utils/apiDataType';
  import {toHumanDate} from "@/utils/dateHelper";

  @Component
  export default class ArticleHeader extends Vue {

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
