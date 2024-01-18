<script setup>
    import Content from '@/components/Content.vue'
    import Status from '@/components/Status.vue'

    import IconOK from '@/components/icons/IconOK.vue'
</script>

<template>
    <h2>Node-RED + Vue Template</h2>

    <Content>
        <template #icon>
            <IconOK />
        </template>
        <template #heading>Sådan, det ser ud til at køre!</template>
        
        Du har nu succesfuldt startet et nyt projekt med Randers Kommune's Node-RED + Vue template.
    </Content>

</template>