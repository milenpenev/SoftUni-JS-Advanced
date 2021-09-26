function extract(array) {
    let biggest = Number.MIN_SAFE_INTEGER;

    const result = array.filter((el) => {
        if (el >= biggest) {
            biggest = el;
            return true;
        } else {
            return false;
        }
    })
    return result;
}

extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);