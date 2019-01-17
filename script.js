
document.addEventListener("DOMContentLoaded", getText);

document.getElementById('getUsNews').addEventListener('click', getText);

function getText() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c02ce0b8722e4571b94f800934093ac1')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let title = '<h1>Top U.S. Stories</h1>';
            let output = ' ';
            data.articles.map((article) => {
                output += `
        <div>
        <h2 class="article-title">${article.title}</h2>
        <a href=${article.url} target="_blank" rel="noopener referrer"><img class="article-image" src=${article.urlToImage}></a>
        <p class="article-description">${article.description}</p>
        <hr>
        </div>
        `;
            });
            document.getElementById('title').innerHTML = title;
            document.getElementById('output').innerHTML = output;
        });
}

/*************** World News *******
********************************/

document.getElementById('getWorldNews').addEventListener('click', getWorldNews);

function getWorldNews() {
    fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c02ce0b8722e4571b94f800934093ac1')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let title = '<h1>World</h1>';
            let output = ' ';
            data.articles.map((article) => {
                output += `
        <div>
        <h2 class="article-title">${article.title}</h2>
        <a href=${article.url} target="_blank" rel="noopener referrer"><img class="article-image" src=${article.urlToImage}></a>
        <p class="article-description">${article.description}</p>
        <hr>
        </div>
      `;
            });
            document.getElementById('title').innerHTML = title;
            document.getElementById('output').innerHTML = output;
        });
}

/******************** Politics ******
***********************************/

document.getElementById('getPoliticsNews').addEventListener('click', getPoliticsNews);

function getPoliticsNews() {
    fetch('https://newsapi.org/v2/top-headlines?sources=politico&apiKey=c02ce0b8722e4571b94f800934093ac1')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let title = '<h1>Politics</h1>';
            let output = ' ';
            data.articles.map((article) => {
                output += `
        <div>
        <h2 class="article-title">${article.title}</h2>
        <a href=${article.url} target="_blank" rel="noopener referrer"><img class="article-image" src=${article.urlToImage}></a>
        <p class="article-description">${article.description}</p>
        <hr>
        </div>
      `;
            });
            document.getElementById('title').innerHTML = title;
            document.getElementById('output').innerHTML = output;
        });
}

/***************** Business ***********
**************************************/

document.getElementById('getBusinessNews').addEventListener('click', getBusinessNews);

function getBusinessNews() {
    fetch('https://newsapi.org/v2/everything?sources=business-insider&apiKey=c02ce0b8722e4571b94f800934093ac1')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let title = '<h1>Business</h1>';
            let output = ' ';
            data.articles.map((article) => {
                output += `
        <div>
        <h2 class="article-title">${article.title}</h2>
        <a href=${article.url} target="_blank" rel="noopener referrer"><img class="article-image" src=${article.urlToImage}></a>
        <p class="article-description">${article.description}</p>
        <hr>
        </div>
      `;
            });
            document.getElementById('title').innerHTML = title;
            document.getElementById('output').innerHTML = output;
        });
}

/************************* Sports *************
**********************************************/

document.getElementById('getSportsNews').addEventListener('click', getSportsNews);

function getSportsNews() {
    fetch('https://newsapi.org/v2/everything?sources=fox-sports&apiKey=c02ce0b8722e4571b94f800934093ac1')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let title = '<h1>Sports</h1>';
            let output = ' ';
            data.articles.map((article) => {
                output += `
        <div>
        <h2 class="article-title">${article.title}</h2>
        <a href=${article.url} target="_blank" rel="noopener referrer"><img class="article-image" src=${article.urlToImage}></a>
        <p class="article-description">${article.description}</p>
        <hr>
        </div>
      `;
            });
            document.getElementById('title').innerHTML = title;
            document.getElementById('output').innerHTML = output;
        });
}
