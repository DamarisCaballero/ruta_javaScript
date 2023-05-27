var arr = [
    [10, 25, 7],
    [100, 20, 53],
    [1, 12, 13]
   ]; // Initialise arr
// iterate each element
for(var i = 0; i < arr.length; i++){
console.log(arr[i]);
}
console.log("indexing complete");


/******************************** */
/******************************** */
var arr = [
    [10, 25, 7],
    [100, 20, 53],
    [1, 12, 13]
   ]; // Initialise arr
// iterate each element
for(var i = 0; i < arr.length; i++){
console.log(arr[i][0]);
console.log(arr[i][1]);
console.log(arr[i][2]);
}
console.log("indexing complete");

/******************************** */
/******************************** */
var arr = [
    [10, 25, 7],
    [100, 20, 53],
    [1, 12, 13]
   ]; // Initialise arr
// iterate each element
for(var i = 0; i < arr.length; i++){
for (var j = 0;j < arr[i].length; j++){
console.log(arr[i][j]);
}
console.log("row ended.");
}
console.log("indexing complete");



/******************************** */
/******************************** */
var arr = [10, 25, 7, 100, 20]; // initialise arr
// iterate array from start to end
arr.forEach(x => console.log(x));
console.log("indexing complete");


/******************************** */
/******************************** */
var topics = [];
topics.push('Arrays');
topics.push('Stacks');
topics.push('Queues');


/******************************** */
/******************************** */
var topics = [];
console.log('[' + topics + '] has length = ' + 
            topics.length);

topics.push('Arrays');
topics.push('Stacks');
topics.push('Queues');

console.log('[' + topics + '] has length = ' + 
            topics.length);



/******************************** */
/******************************** */

var topics = [];

topics.push('Arrays');
topics.push('Stacks');
topics.push('Queues');

for (var i = 0; i < topics.length; i++) {
    console.log(topics[i]);
}
/******************************** */
/******************************** */

var tutorials = ['Arrays', 'Stacks', 'Queues'];
console.log('Before Splice: ' + tutorials);
tutorials.splice(1,1);
console.log('After Splice: ' + tutorials);