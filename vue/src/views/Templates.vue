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

    const rangeValue = ref(50)

    function calcRangeBg()
    {
        return "blue";
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
                    <span v-if="selectedData['name']">{{selectedData['name']}}</span>
                    <span v-else>Overskrift</span>
                </div>
                
                <div class="card-body">

                    <table v-if="selectedData">
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
                    Dette kort har klassen <code>blue</code>. Du kan også lave tekst i <code>&lt;span&gt;</code>-elementer <span class="blue">blå</span>.
                </div>
            </div>

            <div class="card green">
                <div class="card-header">
                    Overskrift
                </div>
                <div class="card-body">
                    Dette kort har klassen <code>green</code>. Du kan også lave tekst i <code>&lt;span&gt;</code>-elementer <span class="green">grøn</span>.
                </div>
            </div>

            <div class="card red">
                <div class="card-header">
                    Overskrift
                </div>
                <div class="card-body">
                    Dette kort har klassen <code>red</code>. Du kan også lave tekst i <code>&lt;span&gt;</code>-elementer <span class="red">rød</span>.
                </div>
            </div>

            <div class="card orange">
                <div class="card-header">
                    Overskrift
                </div>
                <div class="card-body">
                    Dette kort har klassen <code>orange</code>. Du kan også lave tekst i <code>&lt;span&gt;</code>-elementer <span class="orange">orange</span>.
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
                <div class="flexbox">
                    <div v-for="key in Object.keys(sampleData[0])">
                        <label :for="key" class="capitalize">{{key}}</label>
                        <input type="text" placeholder="..." :id="key" v-model="newDataSample[key]" required>
                    </div>
                </div>

                <input type="submit" value="Tilføj">
            </fieldset>
        </form>
    </Content>

    
    <!-- Range slider -->
    <Content>
        <template #icon>

        </template>
        <template #heading>Range slider</template>
        
        <h4 class="center"><span class="heavy">{{rangeValue}}</span> %</h4>
        <input v-model="rangeValue" type="range" min="0" max="100" value="50" :style="{ 'background': 'linear-gradient(to right,  var(--randers-color-light) 0%, var(--randers-color-light) '+rangeValue+'%, var(--color-border-dark) '+rangeValue+'%, var(--color-border-dark) 100%)' }">

    </Content>
    <!--  -->

</template>