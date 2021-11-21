function duplicateCount(text){
    let result = 0
    let counted = []
    for (let i = 0; i < text.length; i++){
        currentChar = text[i].toLowerCase()
        if (counted.includes(currentChar)){
            continue
        }
        counted.push(currentChar)
      for (let j = 0; j < text.length; j++){
        if (i == j) {
          continue
        }
        
        if (currentChar == text[j].toLowerCase()){
          result += 1;
          break;
        }
      }
    }
    return result;
  }

  console.log(duplicateCount('aabBcde'))