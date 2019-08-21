const agrs = function() {
  return process.argv[2];
};

const ob = function(data) {
  let obfuscate = "";
  for (let i = 0; i <= data.length -1; i++) {
    if (data[i] === "a") {
      obfuscate = obfuscate + "4";
    } else if (data[i] === "e") {
      bfuscate = obfuscate + "3";
    } else if (data[i] === "o") {
      obfuscate = obfuscate + "0";
    } else if (data[i] === "l") {
      obfuscate = obfuscate + "1";
    } else {
      obfuscate = obfuscate + data[i];
    }
  }
  return obfuscate;
};

const inputs = agrs();
console.log(ob(inputs));
