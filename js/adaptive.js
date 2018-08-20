let doc = document,
    myMenu = doc.getElementById('myMenu'),
    buttonMenu = doc.getElementById('open-menu'),
    background = doc.getElementById('fullpage');


buttonMenu.onclick = function adaptation() {
    if(myMenu.style.display === '') {
        myMenu.style.display = 'block';
        background.style.filter = 'blur(25px) brightness(10%)';

    } else {
        myMenu.style.display = '';
        background.style.filter = 'none';
    }
};