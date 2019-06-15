<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">
        {{ comment.body }}
      </p>
    </div>
    <div class="card-footer">
      <a href class="comment-author">
        <img v-bind:src="comment.author.image" class="comment-author-img">
      </a>
      &nbsp;
      <a href class="comment-author">{{ comment.author.username }}</a>
      <span class="date-posted">{{ createdDate }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Comment } from '@/utils/apiDataType';
import { toHumanDate } from '@/utils/dateHelper';

@Component
export default class CommentItem extends Vue {

  @Prop()
  private comment!: Comment;

  get createdDate(): string {
    return toHumanDate(this.comment.createdAt);
  }
}
</script>

<style>
</style>
