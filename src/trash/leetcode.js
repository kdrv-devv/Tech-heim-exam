// var romanToInt = function (s) {
//   const symbols = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let total = 0;

//   for (let i = 0; i < s.length; i++) {
//     let curr = s[i];
//     let next = s[i + 1];

//     if (symbols[curr] < symbols[next]) {
//       total -= symbols[curr];
//     } else {
//       total += symbols[curr];
//     }
//   }

//   return total;
// };

// console.log(romanToInt("XIV"));

// var longestCommonPrefix = function(strs) {

// };

// console.log(longestCommonPrefix(["flower","flow","flight"]));

// multiple pointer

// let arr = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7];

// function uniqueValues(arr) {
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1
// }

// console.log(uniqueValues(arr))




// prefix


var longestCommonPrefix = function(strs) {
      if(strs.length === 0) return ""
      let prefix = ''
      for(let i = 0 ; i < strs[0].length ;i++){
        prefix = strs[0][i]
        for(let j = 0 ; j < strs.length; j++){
          if(strs[j][i] !== prefix){

          }

        }


      }

};

let strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs));
