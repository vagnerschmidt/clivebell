<template>
  <div id='app'>
    <header>
      <span>PWA com Vue.js</span>
    </header>
    <main>
      <div class='wrapper'>
        <div class='books'>
          <book v-for="list in lists" :key="list.imageUrl" :list="list"></book>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import data from './db.json';
import Book from './components/Books/Book';
import NotificationService from './NotificationService';

export default {
  name: 'app',
  data() {
    return {
      lists: [],
    };
  },
  mounted() {
    NotificationService.notify(
      'O que a humanidade tem mais do que eu?',
      'Humanidade tem que acabar',
    );
  },
  created() {
    this.lists = data;
  },
  components: {
    Book,
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.books {
  column-count: 1;
  column-gap: 1em;
}

@media only screen and (min-width: 500px) {
  .books {
    column-count: 2;
  }
}
@media only screen and (min-width: 700px) {
  .books {
    column-count: 3;
  }
}
@media only screen and (min-width: 900px) {
  .books {
    column-count: 4;
  }
}
@media only screen and (min-width: 1100px) {
  .books {
    column-count: 5;
  }
}
</style>
