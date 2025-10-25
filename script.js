const url = '/api/news';
const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzM0MTU1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmMWY1ZjkiIGZvbnQtc2l6ZT0iMTgiPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';

function truncateText(text, maxLength = 100) {
    if (text == null) return '';
    if (typeof text !== 'string') text = String(text);
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trimEnd() + '...';
}

function fetchAndDisplayNews(params, titleText) {
    fetch(`${url}?${params}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const titleHtml = `<h1>${titleText}</h1>`;
            const results = Array.isArray(data && data.results) ? data.results : [];

            if (!results.length) {
                document.getElementById('title').innerHTML = titleHtml;
                document.getElementById('output').innerHTML = '<p class="empty-state">No results found.</p>';
                window.scrollTo(0, 0);
                return;
            }

            let output = '';
            results.forEach((article) => {
                const imageOutput = article && article.image_url ? article.image_url : placeholderImage;
                const link = article && article.link ? article.link : '#';
                const title = truncateText(article && article.title ? article.title : 'Untitled');
                const description = truncateText(article && article.description ? article.description : '', 300);

                output += `
                <div class="card">
                  <h2 class="article-title">${title}</h2>
                  <a href="${link}" target="_blank" rel="noopener noreferrer">
                    <img class="article-image" src="${imageOutput}" alt="Article image" />
                  </a>
                  <p class="article-description">${description}</p>
                </div>
                `;
            });

            document.getElementById('title').innerHTML = titleHtml;
            document.getElementById('output').innerHTML = output;
            window.scrollTo(0, 0);
        })
        .catch((err) => {
            console.error('Failed to fetch news:', err);
            document.getElementById('title').innerHTML = `<h1>${titleText}</h1>`;
            document.getElementById('output').innerHTML = '<p class="error-state">Failed to load news. Please try again later.</p>';
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
// Trigger search on Enter key in the search input
const searchInputEl = document.getElementById('search');
if (searchInputEl) {
    searchInputEl.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            getAllNews(e);
        }
    });
}

function getAllNews(event) {
    let textInput = document.getElementById('search');

    // Function will capitalize the first letter of every word in the sentence
    
    let topic = textInput.value.toLowerCase().split(/(\s|-)+/).map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(" ");
    textInput.addEventListener('input', function (e) {
        topic = e.target.value;
    });

    // If called from keypress handler, ensure Enter was pressed
    if (!event || (event && event.key === 'Enter')) {
        const q = encodeURIComponent(topic.trim());
        if (q) {
            fetchAndDisplayNews(`q=${q}&language=en`, `${topic} News`);
        }
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
