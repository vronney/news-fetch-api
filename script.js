const newsApi = 'pub_87471c6119e680aa3bcc00c80a9c778beda6';
const url = `https://newsdata.io/api/1/news?apikey=${newsApi}`;

console.log(url);

/**********************US News *****************************************/

document.addEventListener("DOMContentLoaded", getText);

document.getElementById('getUsNews').addEventListener('click', getText);

function getText() {
    fetch(`${url}&country=us`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let title = '<h1>Top U.S. Stories</h1>';
            let output = ' ';
                       
            data.results.map((article) => {
                let imageOutput = '';

                if ((article.image_url === null) || (article.image_url === 'https:nent should be the starting point of the applic')) {
                    imageOutput = './images/No_img.jpg';
                } else {
                    imageOutput = `${article.image_url}`;
                }
                output += `
            <div class="card">
            <h2 class="article-title">${article.title}</h2>
            <a href=${article.link} target="_blank" rel="noopener referrer"><img class="article-image" src=${imageOutput}></a>
            <p class="article-description">${article.description}</p>
            </div>
            `;
            });

         
            document.getElementById('title').innerHTML = title;
            document.getElementById('output').innerHTML = output;
            // This will have the next window open at the top of the page.  
            window.scrollTo(0, 0);
        });
}

/*************** World News *******
 ********************************/

document.getElementById('getWorldNews').addEventListener('click', getWorldNews);

function getWorldNews() {
    fetch(`${url}&category=world`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let title = '<h1>World</h1>';
            let output = ' ';
            data.results.map((article) => {
                let imageOutput = '';

                if ((article.image_url === null) || (article.image_url === 'https:nent should be the starting point of the applic')) {
                    imageOutput = './images/No_img.jpg';
                } else {
                    imageOutput = `${article.image_url}`;
                }
                output += `
        <div class="card">
        <h2 class="article-title">${article.title}</h2>
        <a href=${article.link} target="_blank" rel="noopener referrer"><img class="article-image" src=${imageOutput}></a>
        <p class="article-description">${article.description}</p>
        </div>
      `;
            });
            document.getElementById('title').innerHTML = title;
            document.getElementById('output').innerHTML = output;
            // This will have the next window open at the top of the page.
            window.scrollTo(0, 0);
        });
}

/******************** Health ******
 ***********************************/

document.getElementById('getPoliticsNews').addEventListener('click', getPoliticsNews);

function getPoliticsNews() {
    fetch(`${url}&category=health`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let title = '<h1>Health</h1>';
            let output = ' ';
            data.results.map((article) => {
                let imageOutput = '';

                if ((article.image_url === null) || (article.image_url === 'https:nent should be the starting point of the applic')) {
                    imageOutput = './images/No_img.jpg';
                } else {
                    imageOutput = `${article.image_url}`;
                }
                output += `
        <div class="card">
        <h2 class="article-title">${article.title}</h2>
        <a href=${article.link} target="_blank" rel="noopener referrer"><img class="article-image" src=${imageOutput}></a>
        <p class="article-description">${article.description}</p>
        </div>
      `;
            });
            document.getElementById('title').innerHTML = title;
            document.getElementById('output').innerHTML = output;
            // This will have the next window open at the top of the page.
            window.scrollTo(0, 0);
        });
}

/***************** Business ***********
 **************************************/

document.getElementById('getBusinessNews').addEventListener('click', getBusinessNews);

function getBusinessNews() {
    fetch(`${url}&category=business`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let title = '<h1>Business</h1>';
            let output = ' ';
            data.results.map((article) => {
                let imageOutput = '';

                if ((article.image_url === null) || (article.image_url === 'https:nent should be the starting point of the applic')) {
                    imageOutput = './images/No_img.jpg';
                } else {
                    imageOutput = `${article.image_url}`;
                }
                output += `
        <div class="card">
        <h2 class="article-title">${article.title}</h2>
        <a href=${article.link} target="_blank" rel="noopener referrer"><img class="article-image" src=${imageOutput}></a>
        <p class="article-description">${article.description}</p>
        </div>
      `;
            });
            document.getElementById('title').innerHTML = title;
            document.getElementById('output').innerHTML = output;
            // This will have the next window open at the top of the page.
            window.scrollTo(0, 0);
        });
}


/************************* Financial *************
 **********************************************/

document.getElementById('getEntertainmentNews').addEventListener('click', getEntertainmentNews);

function getEntertainmentNews() {
    fetch(`${url}&category=technology`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let title = '<h1>Technology</h1>';
            let output = ' ';
            data.results.map((article) => {
                let imageOutput = '';

                if ((article.image_url === null) || (article.image_url === 'https:nent should be the starting point of the applic')) {
                    imageOutput = './images/No_img.jpg';
                } else {
                    imageOutput = `${article.image_url}`;
                }
                output += `
        <div class="card">
        <h2 class="article-title">${article.title}</h2>
        <a href=${article.link} target="_blank" rel="noopener referrer"><img class="article-image" src=${imageOutput}></a>
        <p class="article-description">${article.description}</p>
        </div>
      `;
            });
            document.getElementById('title').innerHTML = title;
            document.getElementById('output').innerHTML = output;
            // This will have the next window open at the top of the page.
            window.scrollTo(0, 0);
        });
}

/******************** My Preference News ********************************/
document.getElementById('getWorldNews').addEventListener('keypress', getAllNews);

function getAllNews() {
    let textInput = document.getElementById('search');

    // Function will capitalize the first letter of every word in the sentence
    
    let topic = textInput.value.toLowerCase().split(/(\s|-)+/).map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(" ");
    textInput.addEventListener('input', function (e) {
        topic = e.target.value;
    });

    let key = event.keyCode || event.which;

    if (key == 13) {

        fetch(`${url}&q=${topic}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                let title = `<h1>${topic} News</h1>`;
                let output = ' ';
                data.results.map((article) => {
                
                let imageOutput = '';

                    if ((article.image_url === null) || (article.image_url === 'https:nent should be the starting point of the applic')) {
                    imageOutput = './images/No_img.jpg';
                } else {
                    imageOutput = `${article.image_url}`;
                }
                    output += `
                <div class="card">
                <h2 class="article-title">${article.title}</h2>
                <a href=${article.link} target="_blank" rel="noopener referrer"><img class="article-image" src=${imageOutput}></a>
                <p class="article-description">${article.description}</p>
                </div>
            `;
            });
                document.getElementById('title').innerHTML = title;
                document.getElementById('output').innerHTML = output;
                // This will have the next window open at the top of the page.
                window.scrollTo(0, 0);

            });
        // clear input
        textInput.value = "";
    }

}



window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

