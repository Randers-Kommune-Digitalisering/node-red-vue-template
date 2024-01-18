<script setup>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'
</script>

<template>

  <header>
    <Sidebar />
  </header>
  
  <main>

    <div class="content">
      <Content />
    </div>

  </main>

</template>


<style scoped>
.content
{
    background-color: rgb(248, 250, 253);

    border-left: 1px solid rgb(235, 235, 235);
    border-right: 1px solid rgb(235, 235, 235);

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