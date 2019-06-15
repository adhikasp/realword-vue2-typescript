<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html">
        <img :src="author.image">
      </a>
      <div class="info">
        <a href class="author">{{author.username}}</a>
        <span class="date">{{publishDate}}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{favoritesCount}}
      </button>
    </div>
    <a href class="preview-link">
      <h1>{{title}}</h1>
      <p>{{description}}</p>
      <span>Read more...</span>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { toHumanDate } from "@/utils/dateHelper";

@Component
export default class ArticlePreview extends Vue {

  @Prop()
  private author!: object;
  @Prop()
  private date!: string;
  @Prop()
  private favoritesCount!: number;
  @Prop()
  private title!: string;
  @Prop()
  private description!: string;

  get publishDate() {
    return toHumanDate(this.date);
  }
}
</script>
