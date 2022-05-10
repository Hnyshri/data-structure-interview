var count = 0;
function secondNonRepatingElementString(str) {
    for (let i = 0; i < str.length; i++) {
        let j = str.charAt(i);
        
        console.log(i);
        console.log(j, str.indexOf(j), str.lastIndexOf(j));

        if (str.indexOf(j) == str.lastIndexOf(j)) {
            if (count == 1) {
                return j;
            }
            else {
                count++;
            }
        }
    }
    return null;
}
console.log(secondNonRepatingElementString("aabcpbed")); 