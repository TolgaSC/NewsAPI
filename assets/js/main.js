// Selecting the Fields 
let inputField = document.getElementById("inputText");
let section = document.querySelector('section');
let lang = document.querySelector('select');
let inputValue = inputField.value;


// News API Fetch + Function
let getNews = () => {
    if (inputField.value === "") {
        alert('Input field is Empty! Type something to get informed about the News!');
        return;
    };

    fetch(`https://newsapi.org/v2/everything?q=${inputValue}&language=${lang.value}&apiKey=1b17cead30934354ae3e637d14a92ba6`)
        .then(response => response.json())
        .then(data => {

            // Hiding news without images
                data.articles.forEach(news => {
                    if (news.urlToImage != null) {
                        section.innerHTML += 
                        `<article>
                        <h1>${news.title}</h1>
                        <p>By ${news.author}</p>
                        <figure><figcaption><img src="${news.urlToImage}">${news.description} <a href="${news.url}">[Read more]</a> </figcaption></figure>
                        </article>`
                    } else {
                        console.log("Test");
                    }
                    }); 
                });

}



