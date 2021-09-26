function solve(nums) {
    const oddNums = nums.filter((v, i) => i % 2 == 1);
    const doubled = oddNums.map(x => x * 2);
    doubled.reverse();
    console.log(doubled.join(' '));
}

solve([10, 15, 20, 25])