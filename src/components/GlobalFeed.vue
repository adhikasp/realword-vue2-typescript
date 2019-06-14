<template>
  <div>
    <ArticlePreview v-for="article in articles"
      :key="article.id"
      :author="article.author"
      :date="article.date"
      :heart="article.heart"
      :title="article.title"
      :description="article.description"
      />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ArticlePreview from "@/components/ArticlePreview.vue";

@Component({
  components: {
    ArticlePreview,
  },
})
export default class GlobalFeed extends Vue {
  articles = [
    {
      id: 2,
      author: "Eric Simons",
      date: "January 20th",
      profileImage: "http://i.imgur.com/Qr71crq.jpg",
      heart: "29",
      title: "How to build webapps that scale",
      description: "This is the description for the post.",
    },
    {
      id: 1,
      author: "Eric Simons",
      date: "January 15th",
      profileImage: "http://i.imgur.com/Qr71crq.jpg",
      heart: "123",
      title: "My first post",
      description: "This is the description for the post.",
    },
  ]
}
</script>
