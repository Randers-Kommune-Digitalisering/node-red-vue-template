<script setup>
    import Status from './Status.vue'
    import TheWelcome from './TheWelcome.vue'
</script>

<template>

    <div class="content">

        <h2>Main content</h2>
        <TheWelcome />
        <TheWelcome />

    </div>

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