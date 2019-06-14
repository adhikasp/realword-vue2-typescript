<template>
  <div>
    <ArticlePreview v-for="article in articles"
      :key="article.slug"
      :author="article.author"
      :date="article.date"
      :favoritesCount="article.favoritesCount"
      :title="article.title"
      :description="article.description"
      />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Axios from "axios";
import ArticlePreview from "@/components/ArticlePreview.vue";

@Component({
  components: {
    ArticlePreview,
  },
})
export default class GlobalFeed extends Vue {
  articles = []

  mounted() {
    Axios.get("https://conduit.productionready.io/api/articles")
      .then(response => {
        this.articles = response.data.articles;
      })
  }
}
</script>
