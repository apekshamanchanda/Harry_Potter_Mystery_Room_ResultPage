let json;

let xhr = new XMLHttpRequest();

xhr.open('GET', "./csvjson.json", false);

xhr.onload = function(){
    json=JSON.parse(this.responseText)
}
xhr.send();






