<script setup>
    const menuItems = [
        {
            "title": "Start",
            "url": "start",
            "selected": true
        },
        {
            "title": "Hjælp",
            "url": "help"
        }
    ]
</script>

<template>

    <div class="sidebar">

        <div class="randers-logo"></div>
        
        <a v-for="item in menuItems" :href="item.url" :class="item.selected ? 'selected' : ''">{{item.title}}</a>

    </div>

</template>

<style scoped>
.sidebar
{
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    padding-top: 25px;

    position: fixed;
    right: 50%;
    transform: translateX(-425px);
    }
    .sidebar a
    {
        padding-right: 15px;
        border-right: 4px solid #ffffff00;
        line-height: 35px;

        font-family: Inter;
    }
        .sidebar a:first-of-type {
            margin-top: 25px;
        }
        .sidebar a:hover {
            border-right: 4px solid #6f7eb4;
        }
        .sidebar a.selected {
            border-right: 4px solid #243576!important;
        }
</style>