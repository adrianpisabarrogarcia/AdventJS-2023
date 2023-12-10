function findNaughtyStep(original, modified) {
    if (original === modified) return ''
    if (original.length > modified.length) {
        for(let i = 0; i < original.length; i++) {
            if (original[i] !== modified[i]) {
                return original[i]
            }
        }
    }
    if(original.length < modified.length) {
        for(let i = 0; i < modified.length; i++) {
            if (original[i] !== modified[i]) {
                return modified[i]
            }
        }
    }
}


console.log(findNaughtyStep('abcd', 'abcde')) // 'e'
console.log(findNaughtyStep('stepfor', 'stepor')) // 'f'
console.log(findNaughtyStep('abcde', 'abcde')) // ''
