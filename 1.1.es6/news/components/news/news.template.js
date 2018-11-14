export function render(news) {
  return `<li class="media">
            <a class="pull-left" href="${news.url}">
              <img class="media-object preview-image" src="${news.urlToImage}">
            </a>
            <div class="media-body">
              <h4 class="media-heading"><a href="${news.url}">${news.title}</a></h4>
              ${!news.description ? "" : `<p>${news.description}</p>`}   
            </div>
          </li>`
};       