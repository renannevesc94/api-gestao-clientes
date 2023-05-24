<h1>API Gestão de Licenças</h1>

<img src="https://img.shields.io/badge/VERSION-1.00-orange"> <img src="https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-brightgreen"> <img src="https://img.shields.io/badge/RELEASE--DATE-MAY--23-orange">
##
Esta **API** tem como objetivo possibilitar o cadastro e gestão de clientes e licenças de uso de software de forma simplificada, fornecendo rotas e métodos que possibilitem a comunicação com praticamente qualquer linguagem de programação, com isso clientes que utilizam linguagens mais antigas podem gerenciar e controlar o acesso a seus sistemas de forma 100% web.

<h2>Funcionalidades do Projeto </h2>

- **`JSON Web Token`:** A API utiliza o JSON Web Token para garantir a segurança das informações, esse token é gerado no login e todas as funções de manipulação de informações precisam desse token de segurança
- **`Cadastro de Clientes`:** Cadastro de clientes com validação de campos, inclusive com validação de CNPJ
- **`Atualização de Status`:** Método que permite atualizar o *status* do cliente de forma eficaz sem sobrecarregar o tráfego ou o banco de dados enviando um update completo
- **`Edição das Informações`:** Possibilidade de editar as informações do cliente e a mensagem de alerta que é retornada na consulta de status
- **`Validação de Login e Geração do JWT`:** As rotas de login além de validar as informções de login também retornam o token que será utilizado para manipular os demais métodos
- **`Busca de Cliente com Filtros`:** Possibilidade de busca dos clientes aplicando filtros como *status*, *cnpj* ou *razão social*
- **`Paginação das Consultas`:** Paginação no mongoDB nas buscas de informação o que permite que as consultas não fiquem pesadas e lentas
- **`Busca de Status Simplificada`:** método para fazer a **busca de status** do cliente passando apenas o CNPJ no query param, com isso são retornadas duas strings, uma contendo o *status* do cliente e a outra contendo uma *mensagem* que pode ser usada para exibir um alerta para o cliente no caso de bloqueio ou atraso de pagamento por exemplo.

<h2>Tecnologias Utilizadas</h2>
<div>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" style="display: inline-block;">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" style="display: inline-block;">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" style="display: inline-block;">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" style="display: inline-block;">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" style="display: inline-block;">
  <img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white"/>
</div>


<h2>Instruções para Executar o Projeto</h2>
Basta fazer o download o projeto e criar um arquivo **.env** contendo as informações de acesso ao banco de dados da seguinte maneira:<br>
<b>DB_USER = <br>
DB_SENHA = <br>
DB_LINK = <br>
SECRET =  <br>
MONGO_URL = 'mongodb://127.0.0.1/sistema' <br></b>
A variável de ambiente **SECRET** deve conter a chave que será usada na composição do token de segurança

A nível de testes o projeto pode ser executado na plataforma <b>https://dashboard.render.com/</b> com um banco de dados gratuito da <b>MongoDB Atlas</b><br>
##
<h2>Utilidades</h2>
Existe um front-end feito com <b>HTML, CSS, JAVASCRIPT, BULMA</b> Q os recursos dessa API, ele pode ser baixado em:
<b>https://github.com/renannevesc94/frontend_gestao_clientes</b> 
##

<h4>Documentação</h4>
  A documentação pode ser acessada em: <b>https://api-gestao-clientes.onrender.com/docs</b>
  
![print_api](https://github.com/renannevesc94/api-gestao-clientes/assets/19363079/38d3da23-794e-4840-b0b2-fa5557e72a96)






