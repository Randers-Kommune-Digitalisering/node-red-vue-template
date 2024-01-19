<script setup>
import Sidemenu from './components/Menu.vue'
</script>

<template>

  <header>
    <Sidemenu />
  </header>
  
  <main>

    <div class="content">
      <router-view></router-view>
    </div>

  </main>

</template>


<style scoped>
.content
{
    background-color: var(--main-color-bg-light); /* Old: rgb(248, 250, 253); */

    border-left: 1px solid var(--main-color-border); /* Old: rgb(235, 235, 235); */
    border-right: 1px solid var(--main-color-border); /* Old: rgb(235, 235, 235); */

    padding: 25px 35px;
}
@media screen and (min-width: 850px)
{
    .content
    {
        width: 850px;
    }
}
@media screen and (max-width: 850px)
{
    .content
    {
        width: 100vw;
        border-left: 0px;
        border-right: 0px;
    }
}
@media screen and (max-width: 1200px)
{
  /* Add padding for header */
  main {
    padding-top: 60px;
  }
}
</style>