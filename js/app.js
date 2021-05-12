const openSidebar = document.querySelector('.right-menu');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
openSidebar.addEventListener('click',(e) => {
    openSidebar.classList.toggle("active");
    sidebar.classList.toggle('open-sidebar');
    overlay.classList.toggle('active');

});
if(overlay){
    overlay.addEventListener('click',(e) => {
        openSidebar.classList.remove("active");
        sidebar.classList.remove('open-sidebar');
        overlay.classList.remove('active');
    });
}
// dropdown item
const dropDownMenu = document.querySelectorAll('.has-child');
dropDownMenu.forEach(menu => {
    menu.addEventListener('click',function(e){
        menu.classList.toggle("open");
        const icon = menu.children[0].children[0];
        const menuItem = menu.children[1];
        const height = menuItem.scrollHeight;
        console.log("Height : " + height);
        if(menu.classList.contains("open")){
            console.log("open");
            menuItem.style.maxHeight = height + "px";
            icon.style.transform = "rotate(90deg)";
        }
        else{
            console.log("no open");
            menuItem.removeAttribute("style");
            icon.style.transform = "rotate(0deg)";
        }
        
    });
});