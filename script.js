function changeColorText(){
    if(document.getElementById('change').textContent=="Enable Dark Mode"){
        document.body.style.color="White";
        document.body.style.backgroundColor="Black";
        document.getElementById('change').textContent="Enable Light Mode";
    }
    else{
        document.body.style.color="Black";
        document.body.style.backgroundColor="White";
        document.getElementById('change').textContent="Enable Dark Mode";
    }
}