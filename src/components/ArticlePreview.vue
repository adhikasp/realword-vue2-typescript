<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html">
        <img src="http://i.imgur.com/Qr71crq.jpg">
      </a>
      <div class="info">
        <a href class="author">{{author}}</a>
        <span class="date">{{date}}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{heart}}
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
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ArticlePreview extends Vue {

  @Prop()
  private author!: string;
  @Prop()
  private date!: string;
  @Prop()
  private heart!: number;
  @Prop()
  private title!: string;
  @Prop()
  private description!: string;
}
</script>
