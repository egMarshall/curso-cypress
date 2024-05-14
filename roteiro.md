Funcionalidade: Cadastro no site Adopet

_______________________________________________

Cenário 1: Realizar um cadastro no site com sucesso

Passos:

1- O usuário acessa a página de cadastro.
2- O usuário preenche o campo "Nome".
3- O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
4- O usuário preenche o campo "Senha" com uma senha válida.
5- O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
6- O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas.

Regra de Negócio:
E-mail e senha são campos obrigatórios para o cadastro.

_______________________________________________

Cenário 2: Falha na tentativa de cadastro

Passos:

1- O usuário acessa a página de cadastro.
2- O usuário deixa os campos obrigatórios (nome, email, senha e confirmação de senha) em branco.
3- O usuário clica no botão "Cadastrar".

Resultados Esperados:

O sistema valida os campos obrigatórios em branco.
O sistema exibe mensagens de erro indicando que os campos obrigatórios devem ser preenchidos.

_______________________________________________




Funcionalidade: Login no site Adopet

_______________________________________________

Cenário 1: Login no sistema com sucesso

Passos:

1- O usuário acessa a página de login.
2- O usuário insere seu email "abigaildo@email.com" e senha "Senha123" nos campos correspondentes.
3- O usuário clica no botão "Entrar".

Resultados Esperados:

O sistema autentica as credenciais fornecidas.
O sistema redireciona o usuário para a página "/home".

_______________________________________________

Cenário 2: Falha no login do sistema

Passos: 

1- O usuário acessa a página de login.
2-