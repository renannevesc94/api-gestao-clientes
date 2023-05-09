<h1>API CLient Management</h1>

<img src="https://img.shields.io/badge/VERSION-1.00-orange"> <img src="https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-brightgreen"> <img src="https://img.shields.io/badge/RELEASE--DATE-MAY--23-orange">
##
Esta **API** tem como objetivo possibilitar o cadastro e gestão de clientes e licenças de uso de software de forma simplificada, fornecendo rotas e métodos que possibilitam a comunicação com praticamente qualquer linguegem de programação, com isso clientes que utilizam linguagens mais antigas podem gerenciar e controlar o acesso a seus sistemas de forma 100% web.

# :hammer: Funcionalidades do projeto

- **`JSON Web Token`:** A API utiliza o JSON Web Token para garantir a segurança das informações, esse token é gerado no login e todas as funções de manipulação de informações precisa desse token de segurança
- **`Cadastro de Clientes`:** Cadastro de cllientes com validação de campos, inclusive com validação de CNPJ
- **`Atualização de Status`:** Método que permite atualizar o *status* do cliente de forma eficaz sem sobrecarregar o tráfego ou o banco de dados enviando um update completo
- **`Edição das Informações`:** Possibilidade de editar as informações do cliente e a mensagem de alerta que é retornada na consulta de status
- **`Validação de Login e Geração do JWT`:** As rotas de login além de validar as informções de login também retornam o token que será utilizado para manipular os demais métodos
- **`Busca de Cliente com Filtros`:** Possibilidade de busca dos clientes aplicando filtros como *status*, *cnpj* ou *razão social*
- **`Paginação das Informações`:** Paginação no mongoDB nas buscas de informação o que permite que as consultas não fiquem pesadas e lentas
- - **`Busca de Status Simplificada`:** método para fazer a **busca de status** do cliente passando apenas o CNPJ no query param, com isso são retornadas duas strings, uma contendo o *status* do cliente e a outra contendo uma *mensagem* que pode ser usada para exibir um alerta para o cliente no caso de bloqueio ou atraso de pagamento por exemplo.


