function solve() {
  let text = document.getElementById('text').value;
  let naming = document.getElementById('naming-convention').value;
  let resultContainer = document.getElementById('result');

  const textSplitted = text.split(' ')
  let resultString = ''
  if (naming == 'Pascal Case') {
    for (let i = 0; i < textSplitted.length; i++) {
      resultString += textSplitted[i][0].toUpperCase() + textSplitted[i].slice(1, textSplitted[i].length).toLowerCase();
    }
    resultContainer.textContent = resultString
  } else if (naming == 'Camel Case') {
      resultString += textSplitted[0][0].toLowerCase() + textSplitted[0].slice(1, textSplitted[0].length).toLowerCase();
      for (let i = 1; i < textSplitted.length; i++) {
        resultString += textSplitted[i][0].toUpperCase() + textSplitted[i].slice(1, textSplitted[i].length).toLowerCase();
      }
      resultContainer.textContent = resultString
  } else {
    resultContainer.textContent = 'Error!';
  }
  
}