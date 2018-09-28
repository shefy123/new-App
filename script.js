function initiaize(){
    $.ajax({
        url:`https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=1a1a19046dca4c008672529c0697b778`,

        success: function(data){
            console.log(data);

            for(let i = 0; i < data.articles.length; i++){
                document.querySelector(".cards-of-news").innerHTML += `<div class="card">
                <div class="card-body">
                    <div class="one" style="background-image:url('${data.articles[i].urlToImage}')">
                    </div>
                    <div class="two">
                    <h5 class="card-title">
                    <a href="${data.articles[i].url}" target="_blank">
                    ${data.articles[i].title.slice(0, 100) + "..."}</a>
                    </h5>
                    <p class="card-text">${data.articles[i].description.slice(0, 80) + "..."}</p>
                    <p class="card-text">Author : ${data.articles[i].author.slice(0, 80) + "..."}</p>
                    </div>
                </div>
            </div>`;
            }
        },

        error: function(err){
            document.querySelector(".cards-of-news").innerHTML += `if some error occur`;            
        }
    });
}

