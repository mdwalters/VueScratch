<script setup lang="ts">
    // @ts-nocheck
    import { onMounted, ref } from "vue";
    
    let canvas: any;
    let app: any;

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

    <canvas id="canvas" width="480" height="360"></canvas>
    
    <div>
        <button id="start">Start</button>
        <button id="stop">Stop</button>
        <input type="number" id="project-id" value="804028943">
    </div>
</template>