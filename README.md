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

## 📂 Estrutura do Projeto / Project Structure
* O projeto está organizado em duas pastas principais:
* The project is organized into two main folders:

```bash
cs50-newshub/
├─ backend/                   # Código do servidor Node.js / Node.js server code
│  ├─ app.js                  # Arquivo principal do backend, define rotas e integração com a API NewsData.io / Main backend file, defines routes and integration with the NewsData.io API
│  ├─ package.json            # Dependências e scripts do Node / Node dependencies and scripts
│  ├─ package-lock.json       # Lockfile do npm / NPM lockfile
│  ├─ node_modules/           # Dependências instaladas pelo npm / Installed npm dependencies
│  └─ .env                    # Variáveis de ambiente, incluindo a chave da API / Environment variables, including the API key
├─ frontend/                  # Código do frontend / Frontend code
│  ├─ index.html              # Página principal / Main page
│  ├─ css/                    # Arquivos de estilos / Stylesheets
│  ├─ js/                     # Scripts JS, incluindo fetch das notícias, renderização e ticker / JS scripts, including news fetching, rendering, and ticker
│  └─ assets/
│      └─ images/             # Imagens utilizadas na página / Images used in the page
└─ .gitignore                 # Arquivo para ignorar arquivos/pastas no Git / File to ignore files/folders in Git
└─ README.md                  # Documentação do projeto / Project documentation
```

## ⚙️ Decisões de Design / Design Decisions

* **Node.js + Express:** Escolhido por ser leve, fácil de integrar com APIs externas e amplamente usado em projetos full-stack. Chosen for being lightweight, easy to integrate with external APIs, and widely used in full-stack projects.

* **Axios:** Preferido em relação ao fetch nativo devido a melhor tratamento de erros, suporte a timeout e facilidade de configuração. Preferred over native fetch because of better error handling, timeout support, and configuration simplicity.

* **Separação frontend/backend / Frontend/backend separation:** Permite deploy flexível (frontend pode ser estático no GitHub Pages e backend no Render) e facilita manutenção do código. Allows flexible deployment (frontend on GitHub Pages, backend on Render) and easier maintenance.

* **Bootstrap + Media Queries:** Garante responsividade rápida, sem necessidade de criar todo o grid manualmente. Provides responsive layout quickly without manual grid creation.

* **Render para deploy do backend / Render for backend deployment:** Fornece hospedagem gratuita para Node.js com integração direta ao GitHub e suporte a variáveis de ambiente. Free hosting for Node.js, with GitHub integration and environment variable support.

## 🌟 Funcionalidades Principais & Futuras / Key Features & Future Work

### 1. Funcionalidades principais / Key Features

* **Listagem de notícias por categoria / Category-based news listing:** O usuário pode navegar entre categorias como tecnologia, política, esportes, saúde, entre outras, e visualizar as notícias mais recentes. Users can navigate between categories such as technology, politics, sports, health, and more, and view the latest news.

* **Carregamento dinâmico com spinner / Dynamic loading spinner:** Feedback visual enquanto notícias são carregadas. Visual feedback while news are loading.

* **Ticker de notícias / Breaking News**: Um feed contínuo de manchetes destacadas é exibido no topo da página. A continuous feed of highlighted headlines is displayed at the top of the page.

* **Fallback de imagens / Images fallback:** Caso a notícia não tenha imagem, uma imagem padrão é exibida. If the new has no image, a default image is displayed

* **Responsividade com mudança de layout / Responsive layout:** Em telas grandes, é exibido um sidemenu lateral; em telas menores, ele se transforma em navbar superior para melhor usabilidade. On large screens, a side menu is displayed; on smaller screens, it switches to a top navbar for better usability.

* **Acessibilidade para todos os usuários / Accessibility for all users:** O site foi desenvolvido considerando boas práticas de acessibilidade, incluindo navegação por teclado, uso correto de ARIA labels, contraste adequado de cores e elementos focáveis, garantindo que usuários com diferentes necessidades possam acessar todas as funcionalidades. The site has been developed following accessibility best practices, including keyboard navigation, proper use of ARIA labels, sufficient color contrast, and focusable elements, ensuring that users with different needs can access all features.

### 2. Funcionalidades Futuras / Future Features

* **Favoritos / Saved News:** Implementar a capacidade de salvar notícias favoritas utilizando localStorage. Implement the ability to save favorite news using localStorage.

* **Notificações de novas notícias / Real-time news notifications:** Alertas em tempo real quando surgirem manchetes importantes. Alerts when important headlines appear.

* **Filtros avançados e pesquisa / Advanced search and filters**: Permitir busca por palavras-chave e filtros mais detalhados por categoria ou data. Allow keyword search and more detailed filters by category or date.

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