function switchOfStuff(value) {
  let answer="";
  switch (value){
    case "a":
      answer ="apple";
      break;
    case "b":
      answer="bird"
      break;
    case "c":
      answer="cat"
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));
