# Desafio Heróis e Ataques

Este repositório contém a solução para o desafio "**Escrevendo as classes de um Jogo**", realizado como parte do processo de aprendizado na **DIO (Digital Innovation One)**. O objetivo deste projeto é criar um sistema que represente heróis de diferentes tipos, com comportamentos específicos de ataque de acordo com sua classe.

## Desafio

O projeto consiste em criar uma **classe genérica** que represente um herói de uma aventura com as seguintes propriedades:

- `nome`: Nome do herói  
- `idade`: Idade do herói  
- `tipo`: Classe do herói (ex: guerreiro, mago, monge, ninja)

A classe deve conter um **método chamado `atacar()`**, que exibe uma mensagem diferente dependendo do tipo do herói. A mensagem deve seguir o seguinte padrão:

```javascript
O {tipo} atacou usando {ataque}
```


### Regras de ataque:

- Se o tipo for **mago** → ataque: `magia`  
- Se o tipo for **guerreiro** → ataque: `espada`  
- Se o tipo for **monge** → ataque: `artes marciais`  
- Se o tipo for **ninja** → ataque: `shuriken`  

### Saída esperada:

```javascript
O guerreiro atacou usando espada  
O mago atacou usando magia  
O monge atacou usando artes marciais  
O ninja atacou usando shuriken

