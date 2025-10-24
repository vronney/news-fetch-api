const url = '/api/news';
const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzM0MTU1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmMWY1ZjkiIGZvbnQtc2l6ZT0iMTgiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';

function truncateText(text, maxLength = 100) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function fetchAndDisplayNews(params, titleText) {
    fetch(`${url}?${params}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let title = `<h1>${titleText}</h1>`;
            let output = '';
            data.results.map((article) => {
                let imageOutput = article.image_url === null ? placeholderImage : article.image_url;
                output += `
                <div class="card">
                <h2 class="article-title">${truncateText(article.title)}</h2>
                <a href=${article.link} target="_blank" rel="noopener noreferrer"><img class="article-image" src=${imageOutput}></a>
                <p class="article-description">${truncateText(article.description, 300)}</p>
                </div>
                `;
            });
            document.getElementById('title').innerHTML = title;
            document.getElementById('output').innerHTML = output;
            window.scrollTo(0, 0);
        });
}

/**********************US News *****************************************/

document.addEventListener("DOMContentLoaded", getText);

document.getElementById('getUsNews').addEventListener('click', getText);

function getText() {
    fetchAndDisplayNews('country=us&language=en', 'Top U.S. Stories');
}

/*************** World News *******
 ********************************/

document.getElementById('getWorldNews').addEventListener('click', getWorldNews);

function getWorldNews() {
    fetchAndDisplayNews('category=world&language=en', 'World');
}

/******************** Health ******
 ***********************************/

document.getElementById('getPoliticsNews').addEventListener('click', getPoliticsNews);

function getPoliticsNews() {
    fetchAndDisplayNews('category=health&language=en', 'Health');
}

/***************** Business ***********
 **************************************/

document.getElementById('getBusinessNews').addEventListener('click', getBusinessNews);

function getBusinessNews() {
    fetchAndDisplayNews('category=business&language=en', 'Business');
}


/************************* Financial *************
 **********************************************/

document.getElementById('getEntertainmentNews').addEventListener('click', getEntertainmentNews);

function getEntertainmentNews() {
    fetchAndDisplayNews('category=technology&language=en', 'Technology');
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
        fetchAndDisplayNews(`q=${topic}&language=en`, `${topic} News`);
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
