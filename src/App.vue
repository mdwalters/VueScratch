<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import JSZip from "jszip";

    const jszip = new JSZip();
    
    let canvas;
    let app;

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
        <button id="start" onclick="alert('Projects can\'t be started yet')">Start</button>
        <button id="stop" onclick="alert('Projects can\'t be stopped yet')">Stop</button>
        <button id="upload" onclick="alert('Projects can\'t be started yet')">Upload</button>
        <input type="file" id="file-upload" class="hidden"/>
    </div>
    
    <div class="container">
        <p>A project hasn't been loaded yet.</p>
    </div>
</template>