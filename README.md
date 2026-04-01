# Projeto IEXFY

## 📌 Sobre o Projeto

Este projeto faz parte de um teste técnico para vaga de Desenvolvedor Full Stack.

A aplicação simula o funcionamento de um painel (crud) e permite o gerenciamento de:

- Criação  
- Edição 
- Exclusão
- Visualização detalhada via (Filtros, modais)

O sistema é estruturado a partir de **1 tela central**, permitindo visualizar e controlar os objetos (oportunidades).

O objetivo principal é demonstrar organização de código, integração entre frontend e backend e controle de estado em uma aplicação React moderna.

---

## 🏗️ Arquitetura do Projeto

Este repositório contém **Front e Back** da aplicação.

⚠️ Não é necessário o uso de nenhum banco de dados para o funcionamento desta aplicação.

---

## 🚀 Como Rodar o Projeto

### ✅ Pré-requisitos

- Node.js instalado
- NPM instalado

---

### 🔧 Passo a Passo

1. Clone este repositório:

```bash
git clone https://github.com/ArthurHallack/IEXFY-Teste.git
```

2. Acesse a pasta raiz do projeto

```

3. Acesse a pasta backend e rode:

```bash
npm install
```

4. Ainda na mesma pasta inicie o servidor:

```bash
npm start
```

5. Abra outro terminal e acesse a Raiz do projeto nele

```

6. Acesse a pasta frontend e rode:

```bash
npm install
```

6. Ainda na mesma pasta, rode:

```bash
npm run dev
```

5. Abra o navegador e acesse:

```
http://localhost:5173/
```

---

## ⚠️ Decisões Técnicas

Optei por **NÃO útilizar** um banco de dados (Postgres, MySQL), por fins de praticidade e agilidade no desenvolvimento, além de facilitação e agilizar para rodar o projeto localmente para quem fosse clona-lo.

**Framework Backend:** Decidi utilizar o framework **Express** no servidor Node.js, pois ele agiliza a construção de um servidor sólido e escalável, o que otimizou meu tempo de entrega.

* **Arquitetura:** Realizei a separação das funções do backend seguindo uma **arquitetura de camadas**. Essa escolha visa facilitar uma futura implementação de persistência de dados (PostgreSQL, MySQL e afins), mantendo a lógica de negócio isolada da infraestrutura.

* **Gerenciamento de Estado:** Optei pela utilização do **Context API (useContext)** para gerenciar o fluxo de dados entre os componentes do frontend. Essa abordagem evita o *prop drilling*, tornando a manutenção mais simples e o código mais limpo.

* **Linguagem e Extensão:** Escolhi utilizar **JSX** em vez de TSX (TypeScript) por fins de **agilidade**. Dado que o projeto é de pequeno porte, consegui manter a consistência dos dados de forma mais rápida e menos verbosa, focando na entrega das funcionalidades principais.

---

## ⚠️ Melhorias Futuras

* **Feedback Visual:** Com mais tempo disponível, implementaria um sistema robusto de notificações via mensagens em tela, utilizando componentes reutilizáveis e um contexto global para gerenciar os alertas de sucesso e erro.

* **Temas Customizáveis:** Realizaria a implementação de um sistema de modo *Light* e *Dark* via Context API, utilizando persistência em `localStorage` ou `cookies` para manter a preferência do usuário entre sessões.

* **Persistência de Dados:** Implementaria um banco de dados robusto (como PostgreSQL ou MySQL) e utilizaria uma ferramenta de ORM (como Prisma ou Sequelize) para versionar o esquema do banco via *Migrations*.

* **Segurança e Autenticação:** Tornaria o sistema de camadas do backend ainda mais robusto, implementando autenticação via JWT (JSON Web Token) ou similar para proteção das rotas e dados.

---

## 🛠️ Tecnologias Utilizadas

- React.js  
- Vite  
- Node.js 
- Lucide (ícones)  
- FontAwesome (ícones)  
- JavaScript  

---

## 🎯 Objetivo Técnico

- Integração frontend ↔ backend  
- Organização de componentes  
- Gerenciamento de estado  

---

Desenvolvido como parte de processo seletivo técnico.