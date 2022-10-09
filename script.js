// FACTORY FUNCTION

function criarNote1(marcaNote1, anoNote1, memoriaNote1, sisOpNote1){
  return{
    marcaNote1,
    anoNote1,
    memoriaNote1,
    sisOpNote1,
  }
}

const note1 = criarNote1('positive', 2010, '300gb', 'Ubuntu 22.04')
console.log(note1)

// CONSTRUCTOR FUNCTION

function Note(marcaNote2, anoNote2, memoriaNote2, sisOpNote2){
  this.marcaNote2 = marcaNote2
  this.anoNote2 = anoNote2
  this.memoriaNote2 = memoriaNote2
  this.sisOpNote2 = sisOpNote2
}
const note2 = new Note('dell', 2018, '800gb', 'Windows 10')
console.log(note2)