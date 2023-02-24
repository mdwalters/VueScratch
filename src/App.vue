<script setup lang="ts">
    // @ts-nocheck
    import { onMounted, ref } from "vue";
    import { load_project, run_project } from "./lib/ts/project";
    
    let canvas: any;
    let app: any;

    async function load_project(id: number): Object {
        let project_metadata: Promise<Object> = await fetch(`https://trampoline.turbowarp.org/proxy/projects/${id}`).then(res => res.json());
        let project: Promise<any> = await fetch(`https://projects.scratch.mit.edu/${id}?token=${project_metadata.project_token}`).then(res => res.arrayBuffer());
        return new TextDecoder("utf-8").decode(new Uint8Array(project));
    }

    onMounted(async () => {
        run_project(await load_project(804028943));

        app = document.getElementById("app");
        canvas = document.getElementById("canvas").getContext("2d");

        let p = app.createElement("p").innerText = project;
        app.append(p);
        
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