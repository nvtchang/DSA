function stringSearch(s, target) {
    let counter = 0;
    let charCounter = 0;
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < target.length; j++) {
            if(s[i] !== target[j]) {
                break;
            }
            charCounter++;
        }
        console.log("charCounter", charCounter)
        if(charCounter === target.length) {
            counter++;
            charCounter = 0;
        }
    }
    return counter;
}

console.log(stringSearch('wwowsomgsefomgv', 'omg'))