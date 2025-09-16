# CS50 NewsHub
Harvard CS50 Final Project

* **CS50 NewsHub** é um portal de notícias desenvolvido como projeto full-stack pessoal inspirado pelo curso **CS50**, com o objetivo de consumir a API pública [NewsData.io](https://newsdata.io/) e exibir as últimas manchetes organizadas por categorias (tecnologia, política, esportes, etc.).  

* **CS50 NewsHub** is a news portal developed as a personal full-stack project inspired by the **CS50** course, aimed at consuming the public [NewsData.io](https://newsdata.io/) API and displaying the latest headlines organized by categories (technology, politics, sports, etc.).

* O foco é oferecer uma interface clara e responsiva, trazendo a experiência de um portal jornalístico, tanto em **modo dinâmico** (com backend em Node.js) quanto em **modo estático** (frontend puro em HTML/CSS/JS).  

* The focus is to provide a clear and responsive interface, delivering the experience of a news portal, both in **dynamic mode** (with a Node.js backend) and in **static mode** (pure frontend with HTML/CSS/JS).

---

## 🔧 Tecnologias Utilizadas / Tools & Technologies 

### Frontend
- **HTML5**  
- **CSS3 + Bootstrap**  
- **JavaScript (ES6+)**

### Backend
- **Node.js**  
- **Express.js** 
- **Axios** (para consumo da API / for consuming the API)  
- **Dotenv** (para variáveis de ambiente / for env variables) 

### Outros / Others
- **Trello** (organização de funcionalidades no estilo Kanban / organization of features in a Kanban style)
- **GitHub Pages** (deploy da versão estática / deployment of the static version)

---

## 🚀 Como rodar o projeto / How to Run the Project

### 1. Rodando com Backend (página dinâmica) / Running with Backend (dynamic page) 
* Esse modo usa o **Node.js + Express** para consumir a API NewsData.io e servir as notícias.
* This mode uses **Node.js + Express** to fetch news from the API NewsData.io and serve dynamic pages.

```bash
# Clonar o repositório / Clone the repository
git clone https://github.com/seu-usuario/cs50-newshub.git
cd cs50-newshub/backend

# Instalar dependências / Install dependencies
npm install

# Criar arquivo .env e adicionar sua chave da NewsData.io / Create a .env file inside the backend/ folder and add your NewsData.io API key:
echo "NEWS_API_KEY=sua_chave_aqui" > .env

# Rodar o servidor / Start the server
npm start
```

* O servidor estará disponível em: http://localhost:3000
* Access in the browser: http://localhost:3000

### 1. Rodando sem Backend (página estática) / Running without Backend (static page)
* Esse modo usa a hospedagem do GitHub Pages.
* This mode uses GitHub Pages hosting.

* Acesso disponível em: //link
* Access available at: //link