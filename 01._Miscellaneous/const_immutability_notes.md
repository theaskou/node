When we say "const is constant in the **assignment**," it means the **binding** (the reference/pointer) can't be changed, but the **content** of what it points to can still be modified.

**What const prevents:**

javascript

`const x = 5;
x = 10; // ❌ Error: Assignment to constant variable

const arr = [1, 2, 3];
arr = [4, 5, 6]; // ❌ Error: can't reassign`

**What const does NOT prevent:**

javascript

`const arr = [1, 2, 3];
arr.push(4);        // ✅ Works fine
arr[0] = 99;        // ✅ Works fine
console.log(arr);   // [99, 2, 3, 4]

const obj = { name: 'Alice' };
obj.name = 'Bob';   // ✅ Works fine
obj.age = 30;       // ✅ Works fine
console.log(obj);   // { name: 'Bob', age: 30 }`

**Think of it like this:** `const` makes the variable a permanent label on a box, but it doesn't lock the contents of the box. You can't point the label at a different box, but you can rearrange what's inside.

**If you want true immutability**, you need:

javascript

`const obj = Object.freeze({ name: 'Alice' });
obj.name = 'Bob'; // Silently fails (or throws error in strict mode)`

Though `Object.freeze()` is shallow—nested objects can still be modified unless you deep freeze them.