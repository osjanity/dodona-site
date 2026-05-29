<template>
  <div>
      <!-- Performances -->
      <div class="container-flavor">
        <h1 class="header-font-left" > Performances </h1>
        <h3 class="header-font-left"> Upcoming </h3>
        <p class="paragraph-font-left indented-list">
          <template v-for="show in store.performances.upcoming" :key="show.date + show.description">
            <strong> ⟡ {{ show.date }} </strong> - {{ show.description }} <br>
          </template>
        </p>
        <h3 class="header-font-left"> Past </h3>
        <p class="paragraph-font-left indented-list">
          <template v-for="show in store.performances.past" :key="show.date + show.description">
            <strong> ⟡ {{ show.date }} </strong> - {{ show.description }} <br>
          </template>
        </p>
    </div>
  </div>
</template>

<script>
import { useContentStore } from '../stores/content';

export default {
  name: 'PerformancesPage',
  setup() {
    const store = useContentStore();
    return { store };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

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
