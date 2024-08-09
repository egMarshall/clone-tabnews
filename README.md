# clone-tabnews

Implementação do https://www.tabnews.com.br para o https://curso.dev

nvm install - irá instalar a versão sugerida deste projeto.

## Arquitetura e Pastas
```
📦 root
┣ 📂 pages
┃ ┗ 📜 index.js
┣ 📂 models
┃ ┣ 📜 user.js
┃ ┣ 📜 content.js
┃ ┗ 📜 password.js
┣ 📂 infra
┃ ┗ 📜 database.js
┃ ┣ 📂 migrations
┃ ┣ 📂 provisioning
┃ ┃ ┣ 📂 staging
┃ ┃ ┣ 📂 production
┣ 📂 tests
```
## Explicação

### Pages

Diretório onde contém as páginas da aplicação.

Em frameworks como Next.js, as rotas da aplicação são mapeadas a partir dos arquivos presentes aqui. Por exemplo: o arquivo index.js representa a página inicial da aplicação, isto é, quando a rota raiz ("/") é acessada, o conteúdo deste arquivo é exibido.

### Models

Diretório onde estão definidos os modelos da aplicação. Os modelos geralmente representam a estrutura de dados e as regras de negócio.

### Infra

Diretório que contém arquivos relacionados à configuração e manutenção da infraestrutura da aplicação. Por exemplo: configuração de banco de dados, bibliotecas externas, ambientes (staging/homologação e produção), etc.

### Tests

Diretório onde estão armazenados os testes automatizados da aplicação.
