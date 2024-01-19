<script setup>
    import { ref } from 'vue'

    import Content from '@/components/Content.vue'

    import IconAlignLeft from '@/components/icons/IconAlignLeft.vue';
    import IconTable from '@/components/icons/IconTable.vue';

    const sampleData = ref([
        {
            name: "Stephen Curry",
            age: 25,
            height: 174,
            location: "Los Angeles, CA"
        },
        {
            name: "Klay Thompson",
            age: 27,
            height: 181,
            location: "Akron, OH"
        }
    ])

    function clickItem(obj)
    {
        console.log("Clicked item: " + sampleData.value.findIndex(x => x == obj))
    }

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

    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Dynamisk tabel</template>
        
        <table>

            <thead>
                <tr>
                    <th v-for="key in Object.keys(sampleData[0])" class="cap">{{key}}</th>
                    <th></th>
                </tr>
            </thead>

            <tr v-for="obj in sampleData">
                <td v-for="key in Object.keys(sampleData[0])">{{obj[key]}}</td>
                <td><button @click="clickItem(obj)">Se mere</button></td>
            </tr>

        </table>

    </Content>

    <Content>
        <template #icon>

        </template>
        <template #heading>Kort</template>
    </Content>

</template>

<style scoped>
    .cap
    {
        text-transform: capitalize;
    }
</style>