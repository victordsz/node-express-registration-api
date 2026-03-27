
🚀 Projeto Prático: Minha Primeira API REST
Status do Projeto: Concluído ✅ | Foco: Aprendizado e Fundamentos de Backend

<img width="1902" height="1021" alt="Captura de tela 2026-03-26 105135" src="https://github.com/user-attachments/assets/8b51da22-bea9-4059-be20-452f578311fc" />

📝 Sobre o Projeto
Este projeto representa o meu "primeiro passo" oficial no ecossistema de desenvolvimento Backend. A aplicação consiste em uma API de gerenciamento de cadastros, onde pude aplicar conceitos fundamentais de arquitetura de software, protocolos de comunicação e segurança de dados.

O objetivo principal foi transitar da camada visual (Front-end) para a "inteligência invisível" (Back-end), entendendo como os dados são recebidos, validados e servidos para o cliente.


🛠️ Tecnologias e Ferramentas
Para a construção desta API, utilizei as seguintes tecnologias:

Runtime: Node.js (Motor de execução Javascript no servidor).

Framework: Express (Gerenciamento de rotas e middlewares).

Versionamento: Git & GitHub.

Ambiente de Testes: Cliente HTTP integrado ao VS Code e Navegador Edge (com JSON Viewer).


🏗️ Arquitetura e RotasA API foi estruturada seguindo os princípios do REST, garantindo uma comunicação clara e previsível.Endpoints Disponíveis:MétodoRotaDescriçãoStatus CodeGET/Home - Verificação de status do servidor.200 OKGET/cadastrosRetorna a lista completa de usuários cadastrados.200 OKPOST/cadastrosCria um novo usuário após validação dos campos.201 Created.


🛡️ Camada de Validação e Regras de Negócio
Um dos grandes diferenciais deste projeto foi a implementação de uma camada de segurança e integridade de dados, garantindo que apenas informações válidas entrem no sistema:

Validação de Nome: Obrigatoriedade de preenchimento com no mínimo 3 caracteres.

Validação de E-mail: Uso de Regex (Expressão Regular) para garantir um formato de e-mail autêntico.

Gerenciamento de ID: Atribuição automática de identificadores únicos (proximoId++).

Tratamento de Nulos: Lógica para campos opcionais (Mensagens), prevenindo erros de leitura no JSON.

🚀 Como Executar a Aplicação
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Acesse a pasta:

Bash
cd nome-do-repositorio
Instale as dependências:

Bash
npm install
Inicie o servidor (Modo Desenvolvimento):

Bash
npm run dev
Acesse no navegador:
http://localhost:3000 ou http://localhost:3000/cadastros


📈 Evolução e Aprendizados
Durante o ciclo de desenvolvimento, superei desafios técnicos que ampliaram minha visão como desenvolvedor:

Middlewares: Entendi a importância do app.use(express.json()) como tradutor de dados para o servidor.

Protocolos HTTP: Aprendi na prática a diferença semântica entre os métodos e a importância dos códigos de status (400 vs 201).

Debbuging: Ganhei agilidade no uso do terminal e do Nodemon para identificar erros de sintaxe em tempo real.


"A tecnologia é apenas uma ferramenta, a solução real nasce do entendimento do problema."
