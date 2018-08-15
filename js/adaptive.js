let doc = document,
    myMenu = doc.getElementById('myMenu'),
    buttonMenu = doc.getElementById('open-menu');


buttonMenu.onclick = function adaptation() {
    if(myMenu.style.display === '') {
        myMenu.style.display = 'block';
    } else {
        myMenu.style.display = '';
    }
};