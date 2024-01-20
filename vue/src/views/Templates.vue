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

    function addDataSample()
    {
        sampleData.value.push(newDataSample.value)
        newDataSample.value = {}
    }

    const newDataSample = ref({})
    const selectedData = ref({})

    function clickItem(obj)
    {
        selectedData.value = obj
        console.log(selectedData.value)
        console.log("Clicked item: " + sampleData.value.findIndex(x => x == obj))
    }

</script>

<template>
    <h2>User-Interface Templates</h2>
    
    <!-- Paragraffer -->
    <Content>
        <template #icon>
            <IconAlignLeft />
        </template>
        <template #heading>Paragraffer</template>
        
        Til almindelige paragraffer er lavet et Vue komponent, <code>@/components/Content.vue</code>.
        Komponentet benyttes med <code>&ltContent&gt</code> HTML tagget efter import, og inderholder et <code>#icon</code>,
        en <code>#heading</code>, og subtekst.
    </Content>

    <!-- Dynamisk tabel-->
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

    <!-- Info-kort -->
    <Content>
        <template #icon>

        </template>
        <template #heading>Kort</template>

        <div class="flexbox">
            <div class="card">
                <div class="card-header">
                    <span v-if="selectedData['name'] == null">Overskrift</span>
                    <span v-else>{{selectedData['name']}}</span>
                </div>
                <div class="card-body">
                    <div v-for="key in Object.keys(selectedData)" class="cap lastDivPad">
                        <span class="fw-400">{{key}}</span>:
                        {{selectedData[key]}}
                    </div>
                    Tryk på en "Se mere"-knap fra den dynamiske tabel for at udfylde kortet.
                </div>
            </div>
        </div>
    </Content>

    <!-- Formular -->
    <Content>
        <template #icon>

        </template>
        <template #heading>Dynamisk formular</template>

        <form @submit.prevent="addDataSample">
            <fieldset>
                <div v-for="key in Object.keys(sampleData[0])">
                    <label :for="key" class="cap">{{key}}</label>
                    <input type="text" placeholder="..." :id="key" v-model="newDataSample[key]" required>
                </div>

                <input class="button-primary" type="submit" value="Tilføj">
            </fieldset>
        </form>
    </Content>

    <!--  -->

</template>

<style scoped>
    .cap
    {
        text-transform: capitalize;
    }
    .lastDivPad:last-of-type
    {
        padding-bottom: 1rem;
    }
</style>