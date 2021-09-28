function sortByTwo(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.sort((a, b) => {
            return a.length - b.length || a.localeCompare(b)
        })
    }
    console.log(arr.join("\n"))
}

sortByTwo(['alpha',
    'beta',
    'gamma']
)