let login = prompt("Insira seu email:")
let senha = prompt("insira sua senha:")
let loginCerto = "jonas@email.com"
let senhaCerta = "batatinha123"

// Validar se login é o login certo e se a senha também é
if (login == loginCerto && senha == senhaCerta) {
    alert("Credemcial validada")
    
    alert("Opção 1: Crédito \n Opção 2: Consignado \n Opção 3: Empréstimo \n Opção 4: Renegociar \n Opção 0: Falar com atendente")


    let opcao = Number(prompt("Escolha a opção:"))

    switch (opcao)
    {
        case 1:
            alert("Você selecionou Crédito, podemos faazer 2x sem juros!")
            break;
        case 2:
            alert("Você selecionou Consignado, será descontado todo dia 5!")
            break;
        case 3:
            alert("Você selecionou Empréstimo, haverá uma parcela de juros de 1.5% ao mês!")
            break;
        case 4:
            alert("Você selecionou Renegociar, entraremos em contato para discutirmos a Renegociação!")
            break;
        case 0:
            alert("Você selecionou Falar com atendente, por farvor aguarde a resposta de um dos nosso atendentes!")
            break;



        default:
            break;
    }
}
// Se o login ou a senha que o usuário inseriu não forem iguais a que temos, ele não pode fazer login no aplicativo
else {
    alert("Login ou senha incorretos!")
    
}