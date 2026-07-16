function isValid(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else if (s[i] === ")") {
            if (stack.pop() !== "(") return false;
        } else if (s[i] === "]") {
            if (stack.pop() !== "[") return false;
        } else if (s[i] === "}") {
            if (stack.pop() !== "{") return false;
        }
    }

    return stack.length === 0;
}

let s = "("

console.log(s.length);

console.log(isValid(s));
