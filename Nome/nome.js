const nome = prompt("Seu nome completo é?")
const letra = nome.split("")
const contador = 0


letra.forEach(function(espaços){
   if(espaços != " ")
        contador++
})
 
console.log(contador++)