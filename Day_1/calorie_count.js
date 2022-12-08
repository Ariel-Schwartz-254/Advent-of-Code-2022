// find the elf carrying the most calories
// (given an array containing subarrays)
    // set initial maximum to 0
    // set highest index to 0
    // Iterate over each item in the array
        // calculate the number of total calories he is carrying
            // use reduce
        // compare it to the highest amount of calories
            // IF higher:
                // set new maximum
                // set heighest index to current index
            // ELSE: continue iterating
    // return the index of the elf carrying the most calories
// return the amount of total calories that elf is carrying
    // sum up the calories in the subarray given the index.

const calculateTotalCalories = (array) => {
    return array.reduce((sum, item) => sum + item, 0);
}

const findElfWithMostCalories = (array) => {
    let max_calories = 0;
    let heighest_elf_index = 0;

    for (let i=0; i < array.length; i++) {
        let total_calories = calculateTotalCalories(array[i]);
        if (total_calories > max_calories) {
            max_calories = total_calories;
            heighest_elf_index = i;
        }
    }
    return heighest_elf_index;
}

elf_array = [[1000,2000,3000], [4000], [5000,6000], [7000,8000,9000], [10000]];
let elf_with_most_calories = findElfWithMostCalories(elf_array);
let calorie_amount = calculateTotalCalories(elf_array[elf_with_most_calories]);

console.log(`The elf in position ${elf_with_most_calories+1} is carrying the most calories in the amount of ${calorie_amount}`);