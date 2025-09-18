const newsContainer = document.getElementById('news-container')

function renderNews(articles) {
    newsContainer.innerHTML = "";

    articles.forEach(article => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img alt="News image" class="card-img-top" src="${article.image_url}" />
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description || ''}</p>
                    <a class="btn btn-primary mt-auto" href="${article.link}" target="_blank">Read More</a>
                </div>
            </div>
        `
        newsContainer.appendChild(col);
    })
    
}

async function fetchNews(category='top') {
    try {
        const response = await fetch(`/news?category=${category}`);
        const data = await response.json();
        const articles = data.results || [];

        renderNews(articles)
    }
    catch (err) {
        console.error("Failed to fetch news:", err);
    }
}

fetchNews();