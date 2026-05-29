<template>
  <div>
      <!-- Dances and Repertoire-->
      <div class="container-flavor">
        <h1 class="header-font-left" > Dances and Repertoire </h1>
        <p class="header-font-left">{{ store.dance.disclaimer }}</p>
        <p class="paragraph-font-left indented-list">
          <template v-for="entry in store.dance.entries" :key="entry.name + entry.url">
            <template v-if="entry.prefix">
              ⟡ {{ entry.prefix }} - <a class="d-link" :href="entry.url">{{ entry.name }}</a>
            </template>
            <template v-else>
              ⟡ <a class="d-link" :href="entry.url">{{ entry.name }}</a>
            </template>
            <br>
          </template>
        </p>
    </div>
  </div>
</template>

<script>
import { useContentStore } from '../stores/content';

export default {
  name: 'DancePage',
  setup() {
    const store = useContentStore();
    return { store };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.d-link {
  color: #F6A45E;
  text-decoration: underline
}

.d-link:hover {
  color: #FFCD86;
  text-decoration: underline;
}

.header-font-center {
  color: #FFCD86;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 10px;
}
.header-font-right {
    color: #FFCD86;
  text-align: right;
}
.header-font-left{
  color: #FFCD86;
  text-align: left;
}
.paragraph-font-center {
  color: #F6A45E;
  text-align: center;
  font-size:large;
}
.paragraph-font-right {
  color: #F6A45E;
  text-align: right;
  font-size: large;
}
.paragraph-font-left{
  color: #F6A45E;
  text-align: left;
  font-size: large;
}
.container-flavor {
  padding: 50px 5% 50px;
  background-color: #181F2A;
}
.indented-list {
  margin-left: 50px;
  background-color: #181F2A;
  line-height: 2;
}
.link-colors {
  color: #FFCD86;
  display: inline;
  width: 100%;
}
.icon-link-container {
  width: 45px;
  justify-content: center;
  display: inline-flex;
  align-items: center;
}
img {
  height: auto;
  display: block;
}
</style>
