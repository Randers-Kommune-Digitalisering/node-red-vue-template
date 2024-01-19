<script setup>
    import { ref } from 'vue'

    // Opsætning af menupunkter

    const menuItems = ref([
        {
            "title": "Start",
            "url": "/"
        },
        {
            "title": "UI Templates",
            "url": "/templates"
        },
        {
            "title": "Vue Info",
            "url": "/vue"
        }
    ])

    // Sæt selected = true landing page

    menuItems.value[ menuItems.value.findIndex(x => x.url == new URL(location.href).pathname) ].selected = true


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
        line-height: 40px;

        font-family: Inter;
        
        white-space: nowrap;
    }
        .sidebar a:first-of-type {
            margin-top: 20px;
        }
        .sidebar a:hover {
            border-right: 4px solid var(--main-color-light);
        }
        .sidebar a.selected {
            border-right: 4px solid var(--main-color-dark)!important;
        }

/* Responsive design - menu flyttes til header */
@media screen and (max-width: 1200px)
{
    .randers-logo
    {
        margin-left: 5px;
        background-position: 10px 0px;
    }
    .sidebar
    {
        flex-direction: row;

        padding-top: 0px;

        width: 100vw;
        height: 60px;
        transform: translateX(0px);
        left: 0px;

        background-color: var(--main-color-bg);
        border-bottom: 1px solid var(--main-color-border);

        overflow-x: auto;
    }
    .sidebar a
    {
        border-bottom: 4px solid #ffffff00;
        border-right: 0px;

        padding-right: 12px;
        padding-left: 12px;
    }
        .sidebar a {
            margin-top: 0px!important;
        }
        .sidebar a:hover {
            border-bottom: 4px solid var(--main-color-light);
            border-right: 0px!important;
        }
        .sidebar a.selected {
            border-bottom: 4px solid var(--main-color-dark)!important;
            border-right: 0px!important;
        }
}

/* Logo skjules på meget små skærme */
@media screen and (max-width: 800px)
{
    .randers-logo
    {
        display: none;
    }
}
</style>