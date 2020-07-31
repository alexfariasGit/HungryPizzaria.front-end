# WebTicket

O projeto WebApi foi concebido  no modelo CQRS em core e o projeto Web em angular 7

## GERANDO BANCO DE DADOS

Para geração do banco e necessário abrir o Projeto BackeEnd e e alterar o arquivo do appsettings.json do projeto 02 - Api e apontar o ConnectionStrings para 
seu server apos efetuado esse procedimento abra o Package Manage Console e exectue o comando "Update-Database"

## RODANDO APLICAÇÃO

Execute a aplicação Ticket.Api, abra o projeto web no visual studio code e execute o comando ng serve --open e necessario as duas aplicações estarem rodando juntas. Caso o projeto web apresente erro. digitar os seguinte comandos.
npm i --only=dev

npm install

ng serve --open

e necessario devido ao fato do git não subir os arquivos do node_modulo


## CONSIDERAÇÕES FINAIS

Não forma feitas algumas validações na regra entao se faz necessario o cadastro das classificações para efetuar o cadastro do contato.

Foi desenvolvido apenas uma tabela para email e telefone para eveitar a criação de mais uma entidade e consequentemente a digitação de mais linha de codigo
e devido ao tempo do teste foi concebido dessa maneira

qualquer duvidas estou a disposição

att,
Alexandre
