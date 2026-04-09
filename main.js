import HashMap from './HashMap.js';
import HashSet from './HashSet.js';

console.log('--- TESTING HASH MAP ---');
const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(`Length before overwrite: ${test.length()}`);

test.set('apple', 'green');
test.set('banana', 'brown');
console.log(`Length after overwrite: ${test.length()}`);
console.log(`Get apple: ${test.get('apple')}`);

test.set('moon', 'silver');
console.log(`Length after growth: ${test.length()}`);
console.log(`New Capacity: ${test.capacity}`);

test.set('moon', 'white');
console.log(`Get moon: ${test.get('moon')}`);

console.log(`Has 'frog': ${test.has('frog')}`);
console.log(`Has 'sun': ${test.has('sun')}`);
console.log(`Remove 'dog': ${test.remove('dog')}`);
console.log(`Remove 'dog' again: ${test.remove('dog')}`);
console.log(`Length after removal: ${test.length()}`);

test.clear();
console.log(`Length after clear: ${test.length()}`);


console.log('\n--- TESTING HASH SET ---');
const setTest = new HashSet();

setTest.add('hello');
setTest.add('world');
setTest.add('hello');

console.log(`HashSet length: ${setTest.length()}`);
console.log(`HashSet has 'hello': ${setTest.has('hello')}`);
console.log(`HashSet has 'goodbye': ${setTest.has('goodbye')}`);

setTest.remove('world');
console.log(`HashSet length after remove: ${setTest.length()}`);
console.log('HashSet keys:', setTest.keys());