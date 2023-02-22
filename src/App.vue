<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import JSZip from "jszip";

    const jszip = new JSZip();
    
    let canvas;
    let app;
    let loaded = ref(false);

    onMounted(() => {
        app = document.getElementById("app");
        canvas = document.getElementById("canvas").getContext("2d");
        
        canvas.fillStyle = "#fcfcfc";
        canvas.fillRect(0, 0, 480, 360);
    });
</script>

<template>
    <h1>VueScratch</h1>
    <p>VueScratch is a Scratch project runner written in Vue</p>
    
    <canvas id="canvas" width="480" height="360"></canvas>
    
    <div>
        <button id="start">Start</button>
        <button id="stop">Stop</button>
    </div>

    <div v-if="!loaded" class="container warning">
        <p>A project hasn't been loaded yet</p>
    </div>
</template>