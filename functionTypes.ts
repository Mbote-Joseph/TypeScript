interface searchFunction {
  (source: string, subString: string): boolean;
}

// const functionSearch = (source: string, subString: string): searchFunction => {
//   var value = false;
//   if (source.indexOf(subString) > -1) {
//     value = true;
//   }else{
//     value = false;
//   }
//   return value;
// };
