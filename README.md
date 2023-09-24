# Alura-Tracker
 Projeto do programa de aceleração Dev do Bling

 Para rodar o projeto: npm rum serve

APP Publicado: https://alura-tracker-gustavo-richter.vercel.app/#/

![image](https://github.com/gustavorichter/Alura-Tracker/assets/11951380/9b30dd72-484a-4781-a7ce-235aa85b764a)


Tive um erro ao buildar para produção, resolvi com os comandos:
On Windows command prompt:

```set NODE_OPTIONS=--openssl-legacy-provider```

On PowerShell:

```$env:NODE_OPTIONS = "--openssl-legacy-provider"```


Esse problema pode ocorrer na Versel, para corrigir segui os seguintes passos:

Faça login na sua conta da Vercel.
Selecione o projeto que você está implantando.
Navegue até as configurações do projeto ou configurações de implantação.
Procure uma seção onde você possa definir variáveis de ambiente.
Adicione uma variável de ambiente chamada ```NODE_OPTIONS``` com o valor ```--openssl-legacy-provider```.