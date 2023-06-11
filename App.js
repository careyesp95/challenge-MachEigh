function findsPairsOfIntegers(list,target){
    let map = {};
    let results=[];
    let start = -1;
    let end = list.length - 1;
    while(start < end ){
        start++;
        if (map[list[start]]) {
            results += `${target - list[start]},${list[start]}\n`;
            continue;
        };
        map[target - list[start]] = true;
    }
    if(results.length > 0) return results;
    return false;
}
module.exports = findsPairsOfIntegers;


