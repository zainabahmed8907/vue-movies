<template>
  <div class="movie-detail">
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <img :src="movie.Poster" alt="Movie Poster" class="featured-img" />
    <p>{{ movie.Plot }}</p>
  </div>
</template>

<script>
import env from "@/env";

export default {
  created() {
    fetch(
      `http://www.omdbapi.com/?&apikey=${env.apiKey}&i=${this.$route.params.id}&plot=full`
    )
      .then((response) => response.json())
      .then((data) => {
        this.movie = data;
      });
  },
  data() {
    return {
      movie: {},
    };
  },
  beforeMount() {},
};
</script>

<style scoped lang="scss">
.movie-detail {
  padding: 16px;
  h2 {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .featured-img {
    display: block;
    max-width: 200px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    color: #fff;
    font-size: 18px;
    line-height: 1.4;
  }
}
</style>
