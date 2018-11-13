export function newsTemplate( news ) { 
    return `<li class="media">
    <a class="pull-left" href="${news.url}">
    <img class="media-object image-size" src="${news.urlToImage}">
    </a>
    <div class="media-body">
    <h4 class="media-heading"><a href="${news.url}">${news.title}</a></h4>
    <p>${news.description === null ? " " : news.description}</p>    
    </div>
    </li>`
  };       