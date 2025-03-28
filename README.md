# Full Cycle Challenge - NGINX + Node.js + MySQL 🚀

Este projeto é parte do desafio da plataforma **[Full Cycle](https://fullcycle.com.br/)**, onde o objetivo é integrar uma aplicação **Node.js com MySQL**, utilizando o **NGINX como proxy reverso**, tudo orquestrado com Docker Compose.

---

## ✅ Descrição

- Quando acessar `http://localhost:8080`, o NGINX redireciona a requisição para o servidor Node.js.
- O Node.js insere um nome no banco de dados MySQL.
- A resposta contém:
  - A mensagem: `<h1>Full Cycle Rocks!</h1>`
  - Uma lista com os nomes cadastrados no banco.

---

---

## 🐳 Imagem no Docker Hub

A imagem está disponível em:

👉 [https://hub.docker.com/r/devvictorpersike/fullcycle-nginx-node](https://hub.docker.com/r/devvictorvcpersike/fullcycle-nginx-node)

Para rodar diretamente:

```bash
docker run -p 8080:80 devvictorpersike/fullcycle-nginx-node
