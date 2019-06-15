<template>
  <div class="row">
    <div class="col-xs-12 col-md-8 offset-md-2">
      <form class="card comment-form">
        <div class="card-block">
          <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
        </div>
        <div class="card-footer">
          <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img">
          <button class="btn btn-sm btn-primary">Post Comment</button>
        </div>
      </form>

      <CommentItem v-for="comment in comments"
        class="card"
        :key="comment.id"
        :comment="comment">
      </CommentItem>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Comment } from '@/utils/apiDataType';
import ConduitApi from '@/utils/api';
import CommentItem from '@/components/comment/CommentItem.vue';

@Component({
  components: {
    CommentItem,
  },
})
export default class ArticleComment extends Vue {

  @Prop()
  private slug!: string;

  private comments: Comment[] = [{
    id: 0,
    createdAt: '',
    updatedAt: '',
    body: '',
    author: {
      username: '',
      bio: '',
      image: '',
      following: false,
    },
  }];

  @Watch('slug')
  public onSlugChange() {
    ConduitApi.getComments(this.slug)
      .then((response) => {
        this.comments = response.data.comments;
      });
  }
}
</script>

<style>
</style>
