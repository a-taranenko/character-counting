function countLetters(myString) {
  var myLetters = new Object;

  var justLetters = myString.toLowerCase().split(' ').join('');

  var uniqueLetters = buildUnique(justLetters);

  for (var i = 0; i < uniqueLetters.length; i++) {
    myLetters[uniqueLetters[i]] = 0;
  }

  for (var g = 0; g < uniqueLetters.length; g++) {
    for (var h = 0; h < justLetters.length; h++) {
      if (uniqueLetters[g] == justLetters[h]) {
        myLetters[uniqueLetters[g]] += 1;
      }
    }
  }

  return myLetters;
}

function buildUnique(str) {
  var unique = '';

  for (var i = 0; i < str.length; i++) {
    if (unique.indexOf(str[i]) == -1) {
      unique += str[i];
    }
  }

  return unique;
}

var input = process.argv.slice(2).join('');

console.log(countLetters(input));