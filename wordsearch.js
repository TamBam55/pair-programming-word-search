// const wordSearch = (letters, word) => { 
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true
//     }
// }

const transpose = (word) => {
  let newWord = [];
  for (let i = 0; i < word[0].length; i++){
      newWord.push([])
      for (let j = 0; j < word.length; j++) {
          newWord[i][j] = word[j][i]
      }
  }
  return newWord
}

const wordSearch = (letters, word) => {
  if (letters.length === 0) return false

  const verticalJoin = transpose(letters).map(ls => ls.join(''))
  const horizontalJoin = letters.map(ls => ls.join(''))


  for (l of horizontalJoin) {
      if (l.includes(word)) return true
  }

  for (l of verticalJoin) {
      if (l.includes(word)) return true
  }
  return false
}

module.exports = wordSearch;
