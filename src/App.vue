<script setup lang="ts">
    // @ts-nocheck
    import { onMounted, ref } from "vue";
    
    let canvas: any;
    let app: any;

    async function load_project(id: number = 804028943): Promise<any> {
        let project_metadata: Promise<Object> = await fetch(`https://trampoline.turbowarp.org/proxy/projects/${id}`).then(res => res.json());
        let project: Promise<any> = await fetch(`https://projects.scratch.mit.edu/${id}?token=${project_metadata.project_token}`).then(res => res.arrayBuffer());
        return project;
    }

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