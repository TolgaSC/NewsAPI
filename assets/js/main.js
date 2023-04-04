console.log("Works");

// Selecting the Fields 
let inputField = document.getElementById("inputText");
let section = document.querySelector('section');
let logo = document.createElement('img');
let lang = document.querySelector('select');
console.log(inputField);
console.log(section);




// News API Fetch + Function
let getNews = () => {
    if (inputField.value === "") {
        alert('Input field is Empty! Type something to get informed about the News!');
        return;
    };

    let inputValue = inputField.value;
    console.log(inputValue);
    fetch(`https://newsapi.org/v2/everything?q=${inputValue}&language=${lang.value}&apiKey=1b17cead30934354ae3e637d14a92ba6`)
        .then(response => response.json())
        .then(data => {

            // forEach News Func
            // data.articles.forEach(news => {
            //     section.innerHTML += `<h1>${news.title}</h1>`
            //     if (news.author === "null") {
            //         section.innerHTML += " ";
            //     } else {
            //         section.innerHTML += `<p>By ${news.author}</p>`
            //     }     
            //     if (news.urlToImage === `src="null"`) {
            //         section.innerHTML += " ";
            //     } else {
            //         section.innerHTML += `<figure><figcaption><img src="${news.urlToImage}">${news.description} <a href="${news.url}">[Read more]</a> </figcaption></figure>`
            //     }
            // });        

            data.articles.forEach(news => {
                if (data == null) {
                    section.style.display = "none";
                } else {
                    section.innerHTML += 
                    `<article>
                    <h1>${news.title}</h1>
                    <p>By ${news.author}</p>
                    <figure><figcaption><img src="${news.urlToImage}">${news.description} <a href="${news.url}">[Read more]</a> </figcaption></figure>
                    </article>`
                }
                });  

        });
}

