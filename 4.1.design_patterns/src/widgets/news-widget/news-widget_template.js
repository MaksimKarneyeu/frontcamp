export default function render() {
  return `<div class="jumbotron">
            <h1 id="news-header"></h1>
          </div>
          <ol class="breadcrumb">
            <li><a href="index.html">Home</a></li>           
            <li class="active"></li>
          </ol>
          <ul class="media-list" id="news-items">
          </ul>
          <div class="panel-footer">Powered by
            <a href="https://newsapi.org/">NewsApi.org</a>
          </div>`
};