
function insertIntoArray() {
    let array = []
    let i;
    for (i = 1; i <= 100; i++) {
        array.push(i);
    }
    const newArray = array.map(i => {
        return Math.pow(i, 2)
    })

    console.log(newArray)
}

insertIntoArray();

