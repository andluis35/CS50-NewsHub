# CS50 NewsHub
### Harvard CS50 Final Project

* **CS50 NewsHub** é um portal de notícias desenvolvido como projeto full-stack pessoal inspirado pelo curso **CS50**, com o objetivo de consumir a API pública [NewsData.io](https://newsdata.io/) e exibir as últimas manchetes organizadas por categorias (tecnologia, política, esportes, etc.).  

* **CS50 NewsHub** is a news portal developed as a personal full-stack project inspired by the **CS50** course, aimed at consuming the public [NewsData.io](https://newsdata.io/) API and displaying the latest headlines organized by categories (technology, politics, sports, etc.).

* O foco é oferecer uma interface clara e responsiva, trazendo a experiência de um portal jornalístico de maneira **dinâmica** (com backend em Node/Express e frontend em HTML/CSS/JS).  

* The focus is to provide a clear and responsive interface, delivering the experience of a news portal in a **dynamic** way (with a Node backend and HTML/CSS/JS frontend).

---

## 🔧 Tecnologias Utilizadas / Tools & Technologies 

### Frontend
- **HTML5**  
- **CSS3 + Bootstrap**  
- **JavaScript (ES6+)**
- **Media Queries**

### Backend
- **Node.js**  
- **Express.js** 
- **Axios** (para consumo da API / for consuming the API)  
- **Dotenv** (para variáveis de ambiente / for env variables) 

### Outros / Others
- **Trello** (organização de funcionalidades no estilo Kanban / organization of features in a Kanban style)
- **Render** (deploy)

---

## 🚀 Como rodar o projeto / How to run the project

### 1. Rodando localmente / Running locally
* Esse modo você terá CS50 NewsHub rodando localmente na sua máquina, integrando frontend, backend e consumo da API NewsData.io.
* In this mode, you will have CS50 NewsHub running locally on your machine, integrating frontend, backend, and NewsData.io API consumption.

```bash
# Clonar o repositório / Clone the repository
git clone https://github.com/seu-usuario/cs50-newshub.git
cd cs50-newshub/backend

# Instalar dependências / Install dependencies
npm install

# Criar arquivo .env dentro da pasta backend/ e adicionar sua chave API da NewsData.io / Create a .env file inside the backend/ folder and add your NewsData.io API key:
echo "NEWS_API_KEY=sua_chave_aqui" > .env

# Rodar o servidor / Start the server
npm start
```

* O servidor estará disponível em: http://localhost:3000
* Access in the browser: http://localhost:3000

### 2. Rodando com Render / Running with Render
* Esse modo usa a hospedagem no Render.
* This mode uses Render hosting.

* Acesso disponível em: https://cs50-newshub-backend.onrender.com
* Access available at: https://cs50-newshub-backend.onrender.com

## ⏳ Andamento do projeto / Project progress

* **Trello:** https://trello.com/b/ogYrUh95/cs50-newshub