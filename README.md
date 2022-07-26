# Projeto-TypeScript-Dio
Projeto typescript

Tipos:

Boolean;
String;
Listas;
Enums;
Any;
Void;
Função;
Unknown;
Never;
Muitos outros em https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

Setup do ambiente:
->Instalar o Node:
 1º) Abrir a pasta do projeto com o terminal;
 2º) Inserir o comando 'npm init';
->Instalar o typescript:
 1º) No terminal digitar o comando 'npm install -g typescript';
 2º) No terminal digitar o comando 'npm install typescript';
 ->Instalar o lite-server com o comando 'npm install lite-server';
 ->Inicializar o TSC com o comando 'tsc --init;
 ->Startar o lite-server no "package.json" adicionando nos scripts "start": "lite-server";
 ->Startar o script watch no "package.json" adicionando nos scripts "watch": "tsc --watch";

->Rodar o NPM SCRIPTS;

Para organizar o projeto:
->Observar "rootDir": "src", e "outDir": "dist",  e adicionar "include": ["src/**/*.ts"] antes do fechamento final, na penúltima linhas do arquivo tsconfig.json
