# JavaScript - Advanced Concepts 🚀

## JavaScript Foundation

### 🦫 Javascript Engine

- The machine can understand what a javascript file speaks about - a translator.
- Many engines - ECMAScript engines
  - Chakra
  - SpiderMonkey - Firefox (_Brendan Eich_)
  - V8 (in C++) - introduced by Google 2008
- The js files gets understood by the engine
- JS used to be **slow**. Google build a browser to control more of the market.
- First Creator => _Brendan Eich_

<img src='images/screen_1.png' width=600>

**AST**: an _abstract syntax tree_ (AST), or just _syntax tree_, is a tree representation of the abstract syntactic structure of source code written in a programming language. Each node of the tree denotes a construct occurring in the source code.
[AST Explorer](https://astexplorer.net/) 🌳

## 2️⃣ ways to run JavaScript ⬇️

### INTERPRETERS

- It translates and reads the files line by line on the flight.
- Taking a set of instructions and returning an answer, doing something with that code.

### COMPILERS

- Works ahead of time to create a translation of the code and compiles it to a language that can be understood by the machine.
- Writes a new program to a new language.
- Lower level language - machine code

<img src='images/screen_2.png' width=600>

### Why use one against the other? 🤔

- **Babel** is a Javascript compiler that takes modern JS code and returns browser compatible JS (older JS code).
- **Typescript** is a _superset_ of Javascript that compiles down to Javascript.
- Both of these do exactly what **compilers** do: Take one language and convert into a different one.

- _Interpreters_ are quick in running. 🏃 BUT, when you're running the same code more than once, it's getting slow! 🐢
- _Compilers_ help with that. Doesn't need to repeat the translation for loops for example => _**OPTIMIZATION**_ ✨

<img src='images/arrow_1.svg' width=90>

## JIT COMPILER! 🤩

- Browsers started mixing compilers to make the engine faster!
- AST -> Interpreter -> Bytecode - not as low level as machine code (Ignition! 🚀)
- Interpreter -> Profiler -> Compiler -> Optimized code!
- The compiler replaces the sections of bytecode that can be improved with optimized code, **constantly**!
- The overall execution speed is improving!

## Is javascript an _interpreted_ language? 🤔

- Yes! In the beginning stages (see _SpiderMonkey_).
- But things have evolved now. Depends on the implementation, so not technically!!

### Code Optimization

- Problematic issues:
  - eval()
  - arguments
  - for in
  - with
  - delete
  - hidden classes
  - inline caching
- We should write code that is predictable and does not confuse the compiler!

### Web Assembly

- The compiling has to happen on the browser.
- All browsers have to agree on an executable format.

                    ⬇️   ⬇️   ⬇️

- **Standard Binary Executable Format**
  - we don't have to do all these steps, interpreting, compiling etc on the engine.

### Call Stack & Memory Heap 🧱

- We need a place to store information and a place where we keep track of what is happening in our code and _where_ we are in the code.
- Both are part of the javascript engine.
- Call Stack -> First In Last Out mode (FILO)
- ⚠️ Simple variables are stored in the stack, and complex structures (eg objects) are stored in the memory heap.
- The call stack can be exceeded and then we have what we call **stack overflow**.

### Garbage Collection 🗑️

- JavaScript is a garbage collected language.
- After allocated memory has been used, it's cleaned when is not needed any more.
- Only the useful data remains.
- The _garbage collector_ prevents memory leak! -> Mark and Sweep! 🌪️
- ⚠️ **False** impression: we don't have to do memory management...🤔

### Memory Leak 💦

- Fill memory heap with more and more data till the program crashes.
- The garbage collection cannot work on a reserved variable.
- _Why we try to avoid using a lot of global variables?_ 🌐
  - These memory slots are always occupied during the execution of the program and cannot be managed by the garbage collector.
- _What about Event Listeners?_
  - We never remove them after we use them! So they constantly keep a place in the memory.
- `setInterval()`
  - The objects inside are never to be picked by the garbage collector, unless we **clear the interval**!
