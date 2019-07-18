const newsDiv = document.getElementById("news");

const newsArticles = news.articles;

const sourceNames = sources.sources.name;

const sourceArray = sources.sources;

const createArticleElement = (article, index) => {
  return `<div class="article" id="${article.source.id}${index}"><h1>${
    article.title
  }</h1><h2>${article.author}</h2><p>${article.description}</p><a href="${
    article.url
  }">${article.url}</a><a href="${article.urlToImage}">${
    article.urlToImage
  }</a><h6>${article.publishedAt}</h6></div>`;
};

const createSourceElement = source => {
  return `<div class="source" id="${source.id}">${source.name}</div>`;
};

const addArticleElement = (article, index, targetDiv) => {
  const articleElement = createArticleElement(article, index);
  targetDiv.insertAdjacentHTML("beforeend", articleElement);
};

const displayArticles = articlesArray => {
  articlesArray.forEach((article, index) => {
    addArticleElement(article, index, newsDiv);
  });
};

const displaySources = sourcesArray => {
  sourcesArray.forEach(source => {
    const sourceElement = createSourceElement(source);
    newsDiv.insertAdjacentHTML("beforeend", sourceElement);
  });
};

const displayBySource = (sourceId, articlesArray) => {
  articlesArray.forEach((article, index) => {
    articleSource = article.source.id;
    if (articleSource != sourceId) {
      return;
    } else {
      addArticleElement(article, index, newsDiv);
    }
  });
};
