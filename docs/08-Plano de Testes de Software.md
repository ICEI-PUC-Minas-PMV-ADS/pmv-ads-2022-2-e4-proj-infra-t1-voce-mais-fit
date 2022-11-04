# Plano de Testes de Software

Está seção detalha o planejamentos do processo de realização dos Testes de Software.

|Caso de Teste | CT-01 - Funcionamento da API(Application Programming Interface) para os usuários.|
|:--|:--|
|**Requisitos Associados**|RF-001 - A aplicação deverá permitir o cadastro de usuários e suas informações, sendo separados em alunos ou treinadores. <br/> RF-002 - A aplicação deverá permitir a alteração dos dados do usuário. <br> RF-003 - A aplicação deverá permitir a exclusão dos dados do usuário. <br> RF-004 - A aplicação deverá exibir os dados do usuário.|
|**Objetivo do teste**| Verificar e testar o cadastro dos usuários juntamente com outras funcionalidades CRUD(Create, Read, Update, Delete). |
|**Passos**|1 - Incluir dados no Banco de Dados NoSQL através da rota pré-definida. <br/>2 - Alterar dados no Banco de Dados NoSQL através da rota pré-definida.<br/>3 - Excluir dados no Banco de Dados NoSQL através da rota pré-definida. <br/> 4 - Listar dados no Banco de Dados NoSQL através da rota pré-definida.|
|**Critérios de Êxito**| Os usuários e suas informações devem ser cadastrados com sucesso e a aplicação deverá permitir a manipulação de seus dados conforme expecificado com êxito através das rotas. |

|Caso de Teste | CT-02 - Funcionamento da interface do usuário(não logado) com os funcionamentos do lado do servidor. |
|:--|:--|
|**Requisitos Associados**|RF-005 - A aplicação deverá ser acessada pelo usuário sem exigir login por obrigação. <br/> RF-006 - A aplicação deverá mostrar as informações do Menu para criar conta e realizar o Login. <br/> RF-007 - O usuário não logado poderá realizar a criação de conta como aluno ou treinador.  <br/> RF-008 - O usuário não logado poderá realizar o Login. |
|**Objetivo do teste**| Verificar se o usuário não logado terá o acesso primário a aplicação, dando-lhe a opção de realizar o login ou a criação de conta como aluno ou treinador, conforme o usuário deseje. |
|**Passos**|1 - Acessar o navegador.<br/>2 - Informar o endereço do site.<br/>3 - Deverá aparecer a página inicial da aplicação.<br/>4 - Escolher e acessar uma das opções no menu. <br/>5 - realizar o cadastro ou login. <br> 6 - será logado com êxito. |
|**Critérios de Êxito**| O usuário Cliente deverá acessar a página inicial Tendo que aparecer as opções no menu para realizar o cadastro ou login, após preenchidas as opções corretamente o usuário deverá ser logado ou criado a conta com êxito. |

|Caso de Teste | CT-03 - Funcionamento da interface do usuário(logado) com os funcionamentos do lado do servidor. |
|:--|:--|
|**Requisitos Associados**|RF-009 - Poderá acessar a opção para adicionar uma Rotina de treinos <br/> RF-010 - Poderá acessar a opção para adicionar uma dieta e suas calorias <br/> RF-011 - Poderá acessar a opão para adicionar exercicíos para realizar.<br/> RF-012 - Poderá acessar a opção sobre, que irá informar sobre a aplicação e seus desenvolvedores.
|**Objetivo do teste**|Verificar o funcionamento da aplicação para usuários já logados e as funcionalidades que o usuário poderá realizar, utilizando o lado do cliente e do servidor. |
|**Passos**| 1 - Acessar a aplicação<br/> 2 - realizar o login com uma conta já cadastrada<br/> 3 - acessar as opções no menu<br/> 4 - realizar a funcionalidade de acordo com o que será demonstrado(de forma intuitiva para usuários leigos). |
|**Critérios de Êxito**| Possuir uma ótima conjunção do lado do servidor e do cliente com requisições-respostas através das rotas definidas na API. O usuário conseguirá realizar todas as funcionaliades descritas com êxito desde que utilizaas corretamente, caso não bem utilizadas deverá ser exibida mesnagens de aviso para o usuário. |
