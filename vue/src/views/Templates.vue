<script setup>
    import Content from '@/components/Content.vue'

    import IconAlignLeft from '@/components/icons/IconAlignLeft.vue';
</script>

<template>
    <h2>User-Interface Templates</h2>
    
    <Content>
        <template #icon>
            <IconAlignLeft />
        </template>
        <template #heading>Paragraffer</template>
        
        Til almindelige paragraffer er lavet et Vue komponent, <code>@/components/Content.vue</code>.
        Komponentet benyttes med <code>&ltContent&gt</code> HTML tagget efter import, og inderholder et <code>#icon</code>,
        en <code>#heading</code>, og subtekst.
    </Content>

</template>