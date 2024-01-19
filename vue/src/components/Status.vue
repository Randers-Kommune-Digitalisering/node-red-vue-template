<script setup>
import { ref } from 'vue';
const statusExpress = ref(null);
const statusNodered = ref(null);

// Express status
fetch('/status')
    .then(response => response = response.json())
    .then(data => statusExpress.value = data);

// Node-RED status (uses /api/ proxy defined in Vite config)
fetch('/api/status')
    .then(response => response = response.json())
    .then(value => statusNodered.value = value.success ? "Connected" : null)
    .then(value => console.log(value));
</script>

<template>
    Herunder kan du se om din Node-RED backend kører, og hvorvidt du bruger Express server. Vær opmærksom på at Express serveren ikke kører hvis du bruger Vite i udviklingsmiljø.
    
    <div>
        <span>Node-RED</span>:
        <span v-if="statusNodered" class="fc-green fw-400">{{statusNodered}}</span>
        <span v-else="statusNodered" class="fc-red fw-400">Not connected</span>
    </div>

    <div>
        <span>Express</span>:
        <span v-if="statusExpress" class="fc-green fw-400">{{statusExpress}}</span>
        <span v-else="statusExpress" class="fc-red fw-400">Not running</span>
    </div>
</template>

<style scoped>
    div
    {
        margin-top: 10px;
        padding-left: 15px;
        border-left: 1px solid var(--main-color-border);
    }
</style>
