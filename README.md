# clone-tabnews

Implementação do https://www.tabnews.com.br para o https://curso.dev

# Paleta de cores

Black: #000000ff;
Oxford-blue: #14213dff;
Orange-web: #fca311ff;
Platinum: #e5e5e5ff;
White: #ffffffff;

# Arquitetura de Pastas

📦 root
├ 📁 pages
│ └ 📃 Index.js
├ 📁 models → Guarda entidades
│ ├ 📃 user.js → Regras de usuário no sistema
│ ├ 📃 content.js → Define o comportamento dos conteúdos publicados
│ └ 📃 password.js → Regras de como esse dado “sensível” é gerado
├ 📁 Infra → Responsável pela infraestrutura
│ ├ 📃 database.js → Biblioteca de conexão com o banco de dados
│ ├ 📁 migrations → será explicado mais tarde
│ ├ 📁 provisioning → será explicado mais tarde
│ │ ├ 📁 staging → será explicado mais tarde
│ │ └ 📁 production → Infra como código, usando Terrafom para subir o banco de dados em outros ambientes
└ 📁 tests → Guarda os testes automatizados
