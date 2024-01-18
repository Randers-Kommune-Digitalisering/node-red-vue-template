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
    background-color: #fbfbfb; /* Old: rgb(248, 250, 253); */

    border-left: 1px solid #e1e1e1; /* Old: rgb(235, 235, 235); */
    border-right: 1px solid #e1e1e1; /* Old: rgb(235, 235, 235); */

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
    }
}
</style>