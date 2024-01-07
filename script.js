function changeText() {
    document.getElementById('demo').innerHTML = 'aaaaaaaa'
}
function add(){
    let data = document.getElementById('data').value
    let texto = document.getElementById("caixatexto").value
    // document.getElementById("lista").innerHTML += `<li>${texto + data }</li>` let
    let element = document.createElement('li')
    element.innerHTML=texto+data
    document.getElementById("lista").appendChild(element)
} 

function remove() {
    let texto = document.getElementById("caixatexto").value
    document.getElementById("lista").innerHTML -= "dawrwre"
}
