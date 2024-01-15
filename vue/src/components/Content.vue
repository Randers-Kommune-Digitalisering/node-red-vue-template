<script setup>
    import Status from './Status.vue'
    import TheWelcome from './TheWelcome.vue'
</script>

<template>

    <div class="content">

        <h2>Main content</h2>
        <TheWelcome />

    </div>

</template>

<style scoped>

.content
{
    background-color: rgb(253, 253, 253);
    border-left: 1px solid rgb(235, 235, 235);
    border-right: 1px solid rgb(235, 235, 235);
    padding: 15px;
}
@media screen and (min-width: 800px)
{
    .content
    {
        width: 800px;
    }
}
@media screen and (max-width: 800px)
{
    .content
    {
        width: 100vw;
    }
}
</style>