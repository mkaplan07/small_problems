// input: string, output: object – k: # chars, v: instances
// split str into an array
// iterate thru, if obj[word.len] += 1, else obj[word.len] = 1

function objectify(str) {
  let obj = {};
  if (str.length) {
    let arr = str.replace(/[^a-z ]/gi, '').split(' ');
                          // non alphas & spaces
    arr.forEach(word => {
      if (obj[word.length]) {
        obj[word.length] += 1;
      } else {
        obj[word.length] = 1;
      }
    });
  }
  return obj;
}

let tests = ['Four score and seven.', 'Hey diddle diddle, the cat and the fiddle!', "What's up doc?", ''];
tests.forEach(el => console.log(objectify(el)));
