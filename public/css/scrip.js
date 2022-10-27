var mobileMenu = document.getElementById('mobile-menu-btn');
var headerHeight = header.clientHeight;

//close/open menu icon mobile
mobileMenu.onclick = function () {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

//auto closed when clicking
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling
            && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}
// ///////////////////////An////////////////////////////
{var modalAn = document.querySelector('.modalAn');
var btnOpenAn = document.querySelector(".open-modal-btn-An")
var iconclose = document.querySelector(".modal-close-An")

function toggleModal(e) {
    modalAn.classList.toggle('hide-An')
}

btnOpenAn.addEventListener('click', toggleModal);
iconclose.addEventListener('click', toggleModal);
modalAn.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleModal();
  });}
  
// //////////////////////////Pinh///////////////////////
{var modalPinh = document.querySelector('.modalPinh');
var btnOpenPinh = document.querySelector(".open-modal-btn-Pinh");
var iconclose = document.querySelector(".modal-close-Pinh");

function toggleModal(e){
    modalPinh.classList.toggle('hide-Pinh')
}

iconclose.addEventListener('click', toggleModal);
btnOpenPinh.addEventListener('click', toggleModal);
modalPinh.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleModal();
  });}


// //////////////////////////LOGIN///////////////////////
{var modalLogin = document.querySelector('.modal-login');
var btnOpenLogin = document.querySelector(".open-btn-login")

function toggleModal(e) {
    modalLogin.classList.toggle('hide-Login')
}


btnOpenLogin.addEventListener('click', toggleModal);

modalLogin.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleModal();
  });
}

{var modalsignup = document.querySelector('.modal-SignUp');
var btnOpensignup = document.querySelector(".open-btn-signup")

function toggleModal(e) {
    modalsignup.classList.toggle('hide-signup')
}


btnOpensignup.addEventListener('click', toggleModal);

modalsignup.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleModal();
  });
}
