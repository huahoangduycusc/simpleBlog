const openSidebar = document.querySelector('.right-menu');
const sidebar = document.querySelector('.sidebar');
openSidebar.addEventListener('click',(e) => {
    console.log("yeah, u click me...");
    openSidebar.classList.toggle("active");
    sidebar.classList.toggle('open-sidebar');
});