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
                    <th v-for="key in Object.keys(sampleData[0])" class="capitalize">{{key}}</th>
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

                    <table v-if="selectedData['name'] != null">
                        <tr v-for="key in Object.keys(selectedData)">
                            <td class="capitalize heavy">{{key}}</td>
                            <td>{{selectedData[key]}}</td>
                        </tr>
                    </table>
                    
                    <span>Tryk på en "Se mere"-knap fra den dynamiske tabel for at udfylde kortet.</span>

                </div>
            </div>

            <div class="card blue">
                <div class="card-header">
                    Overskrift
                </div>
                <div class="card-body">
                    Tryk på en "Se mere"-knap fra den dynamiske tabel for at udfylde kortet.
                </div>
            </div>

            <div class="card green">
                <div class="card-header">
                    Overskrift
                </div>
                <div class="card-body">
                    Tryk på en "Se mere"-knap fra den dynamiske tabel for at udfylde kortet.
                </div>
            </div>

            <div class="card red">
                <div class="card-header">
                    Overskrift
                </div>
                <div class="card-body">
                    Tryk på en "Se mere"-knap fra den dynamiske tabel for at udfylde kortet.
                </div>
            </div>

            <div class="card orange">
                <div class="card-header">
                    Overskrift
                </div>
                <div class="card-body">
                    Tryk på en "Se mere"-knap fra den dynamiske tabel for at udfylde kortet.
                </div>
            </div>


        </div><!-- /flexbox -->

    </Content>

    <!-- Formular -->
    <Content>
        <template #icon>

        </template>
        <template #heading>Dynamisk formular</template>

        <form @submit.prevent="addDataSample">
            <fieldset>
                <div v-for="key in Object.keys(sampleData[0])">
                    <label :for="key" class="capitalize">{{key}}</label>
                    <input type="text" placeholder="..." :id="key" v-model="newDataSample[key]" required>
                </div>

                <input class="button-primary" type="submit" value="Tilføj">
            </fieldset>
        </form>
    </Content>

    <!--  -->

</template>

<style scoped>
    .lastDivPad:last-of-type
    {
        padding-bottom: 1rem;
    }
</style>