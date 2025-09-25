const newsContainer = document.getElementById('news-container');
const categoryNavLinks = document.querySelectorAll('.nav-link[data-category]');

function showSpinner() {
  document.getElementById('loading-spinner').classList.remove('d-none');
  newsContainer.style.display = 'none';
}

function hideSpinner() {
  document.getElementById('loading-spinner').classList.add('d-none');
  newsContainer.style.display = 'flex';
}

function renderNews(articles) {
    newsContainer.innerHTML = '';

    if (!articles || articles.length == 0) {
      newsContainer.innerHTML = `
        <div class="alert alert-warning text-center" role="alert">
          No news found.
        </div>
      `;
      return;
    }

    articles.forEach(article => {
        const imageUrl = article.image_url ? article.image_url : './assets/images/fallback_news.png';
        const col = document.createElement('div');
        col.className = 'col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4';

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img alt="News image" class="card-img-top" src="${imageUrl}" />
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description || ''}</p>
                    <a class="btn btn-secondary mt-auto" href="${article.link}" target="_blank">Read More</a>
                </div>
            </div>
        `;
        newsContainer.appendChild(col);
    })
    
}

async function fetchNews(category='top') {
    showSpinner();
    try {
        const response = await fetch(`https://meu-backend.onrender.com/news?category=${category}`);
        const data = await response.json();
        const articles = (data.results || []).slice(0,8);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        renderNews(articles)
    }
    catch (err) {
        console.error('Failed to fetch news:', err);

        newsContainer.innerHTML = `
          <div class="alert alert-danger text-center role="alert">
            Occurred an error to fetch news. Try again later.
          </div>
        `;
    }
    finally {
      hideSpinner();
    }
}

async function loadBreakingNews() {
  try {
    const response = await fetch('https://meu-backend.onrender.com/news?category=world');
    const news = await response.json();

    if (news.results && news.results.length > 0) {
      const headlines = news.results
                        .slice(0, 8)
                        .map(article => article.title)
                        .join('     ■     ');
                        

      document.getElementById('ticker-content').textContent = headlines;
    }

  }
  catch (err) {
    console.error('Failed to load breaking news:', err);
  }
}

categoryNavLinks.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    
    categoryNavLinks.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    fetchNews(category);
  })
})
document.querySelector('.nav-link[data-category="top"]').classList.add('active');

loadBreakingNews();
fetchNews('top');