function firstLast(strings) {
    const first = Number([...strings].shift());
    const last = Number([...strings].pop()); // the dots, makes a copy of the array

    return first + last
}