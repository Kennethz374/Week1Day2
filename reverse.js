var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(original) {
  let answer = original.split('');
  return answer.reverse().join('');
}

//reverse is for array
//split is for string
//join return array into string

