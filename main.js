
const btn = document.querySelector('#search');
const input = document.querySelector('#inputText');

btn.addEventListener('click',function(){
    const searchTerm = input.value;
    searchHYFReps(searchTerm);
});

function handleInput(input){
    if(input === ""){
        window.alert("please add he value that you want to search for:-)!");
        console.log("the feild input is empty");
        return false;
    }
    return true;
}
/*function httpGetAsync(theUrl, callback){
    const xmlHttp = new XMLHttpRequest();
     xmlHttp.onreadystatechange = function(){
         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
     }
     xmlHttp.open("GET", theUrl, true);
     xmlHttp.send(null);
}*/

function fetchJSONData(url, callbackFn){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',function(){
        console.log("Data loaded.");
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
        console.lo("Data finished loading");
    });
    xhr.open('GET', url);
    xhr.send();
}

let searchIthemISExist=false;
function searchHYFReps(searchItem){
    const url ="https://api.github.com/search/repositories?q=user:HackYourFuture+" + searchItem;
    const ul = document.querySelector('ul#reposList');
    ul.innerHTML = '';
    fetchJSONData(url,function(searchResult){
        console.log(searchResult);
        renderRepositories(searchResult);
});
}

function renderRepositories(repositories){
    const ul = document.querySelector('#reposList');
    ul.innerHTML=``;
    for (const repo of repositories){
        const li = document.createAttribute('li');
        ul.appendChild(li);
        li.innerHTML =`<a target="_blank" href="${repo.url}">${repo.name}</a>`;
    }
}