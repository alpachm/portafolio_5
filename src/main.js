let icon = document.getElementById('icon_menu');
let menu = document.getElementById('menu_text')

function clickear(){
    menu.classList.toggle('show_menu')
}

icon.addEventListener('click', clickear)

const menuA = document.querySelectorAll('#menu_text a');

for(i of menuA){
    i.addEventListener('click', clickear)
}

console.log(menu);