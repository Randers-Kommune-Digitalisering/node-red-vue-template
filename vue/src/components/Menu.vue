<script setup>
    import { ref } from 'vue'

    // Opsætning af menupunkter

    const menuItems = ref([
        {
            "title": "Start",
            "url": "/",
            "selected": true
        },
        {
            "title": "UI Templates",
            "url": "templates"
        },
        {
            "title": "Vue Info",
            "url": "/vue"
        }
    ])

    // Funktion til visuelt at opdatere menu selection

    function select(item)
    {
        menuItems.value.forEach(x => x.selected = false)
        item.selected = true
    }
</script>

<template>

    <div class="sidebar">

        <div class="randers-logo"></div>
        
        <router-link v-for="item in menuItems" :to="item.url" :class="item.selected ? 'selected' : ''" @click="select(item)">
            <span>{{item.title}}</span>
        </router-link>

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