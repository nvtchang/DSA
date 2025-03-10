/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stacks = [];
    const parens = '() {} []'
    let i = 0;
    while ( i < s.length) {
        stacks.push(i);
        i++;
        //pull out last 2 elements in stack
        let open = stacks[stacks.length - 2];
        let closed = stacks[stacks.length - 1];

        let potentialParent = open + closed;
        if(parens.includes(potentialParent)) {
            stacks.pop();
            stacks.pop();
        }
    }   
    return stacks.length === 0;
};

