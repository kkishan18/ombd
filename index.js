function getTitle(){
    var title = document.getElementById("title").value;

    // var url =`http://www.omdbapi.com/?t=${title}&apikey=49806483`;
    var url =`http://www.omdbapi.com/?t=${title}&apikey=49806483`;

    fetch(url)
    .then(function(res){
        return res.json();
        // displayMovie(res.result)
    })

    .then(function (res){
        // console.log(res);
        displayMovie(res);
    })
    .catch(function(err){
        console.log(err);
        image.src ="https://th.bing.com/th/id/OIP.8NjYy8yA5XKy4gEARek5HwHaF7?w=217&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7";
    })
}

function displayMovie(movie){
    console.log(movie)
var div =document.createElement("div")
// movie.forEach(function(el) {
    var title = document.createElement("h1")
    title.innerHTML ="Title:" +" " +movie.Title;
    

    var img = document.createElement("img")
    img.src = movie.Poster

    var relese = document.createElement("p")
    relese.innerHTML="Date:" +" "+movie.Released

    var imb=document.createElement("p")
    imb.innerHTML = "imdbRating:" +" "+movie.imdbRating

    var lan=document.createElement("p")
    lan.innerHTML = "Language:" +" "+movie.Language

    // document.querySelector("#container").append(img,title,relese);
    div.append(img,title,relese,imb,lan)
    document.querySelector('#container').append(div) 
};

