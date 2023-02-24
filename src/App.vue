<script setup lang="ts">
    import { onMounted, ref } from "vue";
    
    let canvas;
    let app;

    let stage_width = ref(480);
    let stage_height = ref(360); 

    onMounted(() => {
        app = document.getElementById("app");
        canvas = document.getElementById("canvas").getContext("2d");
        
        canvas.fillStyle = "#fcfcfc";
        canvas.fillRect(0, 0, 480, 360);
    });
</script>

<template>
    <h1>VueScratch</h1>
    <p>VueScratch is a Scratch project runner written in Vue. It is currently experimental.</p>

    <canvas id="canvas" width=stage_width height=stage_height></canvas>
    
    <div>
        <button id="start">Start</button>
        <button id="stop">Stop</button>
        <input type="number" id="project-id" class="container">
    </div>
</template>