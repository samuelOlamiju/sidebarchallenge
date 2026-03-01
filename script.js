const menuBtn = document.getElementById('sidebar-toggle');
const closeBtn = document.getElementById('cancel');
const sidebar = document.getElementById('sidebar');

// Opens the sidebar
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
});

// Closes the sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});