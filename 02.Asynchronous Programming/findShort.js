function findShort(s){
    let shortest = s;
    s = s.split(' ')
    for (word of s){
        if (word.length < shortest.length){
            shortest = word;
        }
    }
    return shortest.length
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))