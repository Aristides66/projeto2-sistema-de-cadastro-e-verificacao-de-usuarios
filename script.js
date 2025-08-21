// 1.cadastro de usuario
const nome = prompt("Digite seu nome:")
let idade = parseInt(prompt("Digite sua idade:"))
let senha = parseInt(prompt("Digite sua senha"))
if(idade >=13){
    alert(`Cadastro permitido`)
//2.login
let nome2 = prompt("Digte seu nome novamente:")
let senha2 = parseInt(prompt("Digite sua senha novamente:"))
  if (nome2 == nome && senha2 == senha){
    alert(`Login realizado com sucesso! Bem vindo,${nome}`)
  } else {
    alert(`Nome ou senhas incorretos. tente novamente `)
  }
} else{
    alert(`Não foi possível se cadastrar!`)
}