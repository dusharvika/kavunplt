// nav bar
const iconNav = document.querySelector('.nav-icon');
if (iconNav) {
  const navBody = document.querySelector('.nav-body');
  iconNav.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconNav.classList.toggle('_active');
    navBody.classList.toggle('_active');
  });
}