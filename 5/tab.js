function over(id){
    const obj = document.getElementById(id);
    obj.style.backgroundColor="red"
    msg(id)
}
function out(id) {
    const obj = document.getElementById(id);
    obj.style.backgroundColor="white"
}
function msg(id) {
    document.getElementById("mess").innerText=id;
}