const users = [
    { name: `Joaquim`, idade: 19, city: `Lagoa`, },
    { name: `Ana Caroline`, idade: 20, city: `Nova Russas`,},
    { name: `Heloisa`, idade: 8, city: `São Paulo` }
]

//forEach(item, index, array)
//item - Dados/Informações contidos na posição atual do array
//index - Numero da posição. Sempre começando em 0
//array - Retorna o array completo

users.forEach((item, index) => {
  if(item.idade < 18){
    console.log(`O usuario ${item.name}, é menor de idade`)
  }
});