let login
let senha 
let loginCerto = "jonas@email.com"
let senhaCerta = "batatinha123"


// Enquanto a senha do usuário inserir for diferente da senha certa continuaremos oedindo para que ele insira a senha novamente.
// Do = Faça While = enquanto. O que da nome a esrutura dowhile, ou seja, faça quanto.
// Dowhile executa o código uma vez antes  de fazer a comparação.

do {
    login = prompt("insira seu email")
    senha = prompt("insira sua senha:")
} while (login != loginCerto && senha != senhaCerta);
  

// Peça a senha certa pelo menos uma vez, caso o usuário não coloque a senha certa, repita o pedido