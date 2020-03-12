function nanyHandler() {
  debugger;
  // write me!
  strings.displayed = 'NaNy';

  const displayed = strings.displayed;
  const array = strings[displayed];

  const evensList = renderList(array, displayed);

  const listContainer = document.getElementById('selected');
  listContainer.innerHTML = '';
  
  listContainer.appendChild(evensList);
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'NaNy',
    strings: JSON.parse(JSON.stringify(strings))
  })
}
