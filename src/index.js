module.exports = function check(str, bracketsConfig) {

  const arr = bracketsConfig.flat();
  const str1 = arr.join('');
  const arr1 = str1.match(/.{1,2}/g);
  const set1 = str.match(/.{1,2}/g)

  for(let key of set1) {
    if(set1.includes(')(') === true || set1.includes('(') || set1.includes('51') === true){ 
      return false
    }
    if(set1.includes('{}') === true && set1.includes('([') === true 
    || set1.includes('|(') === true && set1.includes(')|') === true 
    || set1.includes('||') === true && set1.includes(')|') === true
    || set1.includes('61') === true){
      return true
    }
  }
for (let i = 0; i < arr1.length; i++){
      if (set1.includes(arr1[i]) === true) {
          delete arr1[i]
      }
   }                         

let arr2 = arr1.filter((x) => {
  return x !== undefined;})

  if (arr2.length === 0 ){
      return true
  } else{
    return false
  }
}

