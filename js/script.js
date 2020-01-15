/* curent date */
document.getElementById('today').value = new Date().toISOString().slice(0, 10);
document.getElementById('today2').value = new Date().toISOString().slice(0, 10);

/* mobile menu */

// function toggleMenu(visible) {
//   document.querySelector('.x').classList.toggle('show', visible);
// }
// document.querySelector('.sidebar__toggle-btn').addEventListener('click', function(e) {
//   e.preventDefault();
//   console.log('click');
//   //toggleMenu();
// });

const hamburger = document.querySelector('.mobile__hamburger');
//console.log(hamburger);
const sidebar = document.querySelector('.sidebar__mobile-list');
const topbar = document.querySelector('.mobile-bar__list');
//console.log(sidebar);


hamburger.addEventListener('click', function(e){
  e.preventDefault();
  sidebar.classList.toggle('active');
  topbar.classList.toggle('active');

  console.log('does it work ?');
});