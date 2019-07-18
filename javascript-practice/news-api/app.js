const newsDiv = document.getElementById("news");

const newsArticles = news.articles;

const sourceNames = sources.sources.name

const sourceArray = sources.sources

const createArticleElement = (article, index) => {
  return `<div class="article" id="${article.source.id}${index}"><h1>${
    article.title
  }</h1><h2>${article.author}</h2><p>${article.description}</p><a href="${
    article.url
  }>${article.url}</a><a href="${article.urlToImage}>${
    article.urlToImage
  }</a><h6>${article.publishedAt}</h6></div>`;
};

const createSourceElement = (source) => {
    return `<div class="source" id="${source.id}">${source.name}</div>`
}

const displayArticles = articlesArray => {
  articlesArray.forEach((article, index) => {
    const articleElement = createArticleElement(article, index);
    newsDiv.insertAdjacentHTML("beforeend", articleElement);
  });
};

const displaySources = sourcesArray => {
    sourcesArray.forEach(source => {
      const sourceElement = createSourceElement(source);
      newsDiv.insertAdjacentHTML("beforeend", sourceElement);
    });
  };
