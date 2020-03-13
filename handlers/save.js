function saveHandler() {
  debugger;
  // write me!
  const newInput = document.getElementById("input").value.trim();

  if (newInput == ""){
    alert ("The field cannot be empty");
  } else if( isNaN(newInput)){
    strings.NaNy.push(newInput);
  } else if(newInput  % 2 === 0){
    strings.evens.push(newInput);
  } else{
    strings.odds.push(newInput);
  }

  const inputBox = document.getElementById("input");
  inputBox.value = "";
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save',
    newInput,
    strings: JSON.parse(JSON.stringify(strings))
  })
}
