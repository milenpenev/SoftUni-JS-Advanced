function solve(area, vol, input) {
    const cubes = JSON.parse(input);
    const result = [];

    for (let cube of cubes){
        const cubeArea = area.apply(cube);
        const cubeVolume = vol.apply(cube);

        result.push({
            area: cubeArea,
            volume: cubeVolume
        });
        
    }
    return result;

}


const data = [];

solve (area, vol, data)

function area(){
    return Math.abs(this.x * this.y);
}

function vol(){
    return Math.abs(this.x * this.y * this.z);
}


