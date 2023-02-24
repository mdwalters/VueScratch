export async function load_project(id: number): Object {
    let project_metadata: Promise<Object> = await fetch(`https://trampoline.turbowarp.org/proxy/projects/${id}`).then(res => res.json());
    let project: Promise<any> = await fetch(`https://projects.scratch.mit.edu/${id}?token=${project_metadata.project_token}`).then(res => res.arrayBuffer());
    return new TextDecoder("utf-8").decode(new Uint8Array(project));
}

export function run_project(data: Object, canvas: any): void {
    let variables: Object = {};
    let lists: Object = {}

    for (let i in data.targets) {
        for (let j in data.targets[i].variables) {
            variables[data.targets[i].name][data.targets[i].variables[j][0]] = data.targets[i].variables[j][1];
        }
    }
}