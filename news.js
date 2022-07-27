window.addEventListener('load', () => {
y = new Date().getFullYear();
m = new Date().getMonth() +1;
d = new Date().getDate();
document.getElementById("date").innerHTML = d + "/0"+ m + "/" + y;

ind();
act();
cur();

})

function ind(){
    document.getElementById('indinc').style.display="contents";
    document.getElementById('global').style.display="none";
}
function glo(){
    document.getElementById('indinc').style.display="none";
    document.getElementById('global').style.display="contents";
}

function act(){
    document.getElementById('active').style.display="contents";
    document.getElementById('gain').style.display="none";
    document.getElementById('lose').style.display="none";
}

function gai(){
    document.getElementById('active').style.display="none";
    document.getElementById('gain').style.display="contents";
    document.getElementById('lose').style.display="none";
}

function los(){
    document.getElementById('active').style.display="none";
    document.getElementById('gain').style.display="none";
    document.getElementById('lose').style.display="contents";
}

function cur(){
    document.getElementById('currency').style.display="contents";
    document.getElementById('commodity').style.display="none";
    document.getElementById('bond').style.display="none";
}

function com(){
    document.getElementById('currency').style.display="none";
    document.getElementById('commodity').style.display="contents";
    document.getElementById('bond').style.display="none";
}

function bon(){
    document.getElementById('currency').style.display="none";
    document.getElementById('commodity').style.display="none";
    document.getElementById('bond').style.display="contents";
}