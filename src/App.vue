<template>
  <header>
    <router-link to="/">
      <h1><span>Vue</span>Movies</h1>
    </router-link>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;300;400&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
  &::selection {
    background: transparentize($color: #428883, $amount: 0.5);
    color: white;
  }
}
body {
  background-color: #354953;
}
a {
  text-decoration: none;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2c3d43;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);

  h1 {
    color: #fff;
  }
  span {
    color: #428883;
  }
}
</style>
