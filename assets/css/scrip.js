var mobileMenu = document.getElementById('mobile-menu-btn');
        var headerHeight = header.clientHeight;

        //close/open menu icon mobile
    mobileMenu.onclick = function(){
        var isClosed = header.clientHeight === headerHeight;
        if(isClosed){
            header.style.height = 'auto';
        }
        else{
            header.style.height = null;
        }
    }

    //auto closed when clicking
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for(var i =0; i<menuItems.length; i++){
        var menuItem = menuItems[i];
        
        menuItem.onclick = function(event){
        var isParentMenu = this.nextElementSibling
        && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            event.preventDefault();
        }else{
            header.style.height = null;
        }
        }
    }

    const btnPinhs = document.querySelectorAll('.js-btnPinh')
    const modalPinh = document.querySelector('.js-Pinh')
    const modalcontainer = document.querySelector('.js-modal-container')
    const modalclose = document.querySelector('.js-modal-close')

    //hiển thị mua ticket
    function ShowImgPinh(){
        modalPinh.classList.add('open')
    }
    //ẩn thị mua ticket
    function hideImgPinh(){
        modalPinh.classList.remove('open')
    }

    //vòng lặp nghe hành vi
    for (const btnPinh of btnPinhs) {
        btnPinh.addEventListener('click', ShowImgPinh)
    }
     
    //nghe hành vi click
    modalclose.addEventListener('click', hideImgPinh)

    modalPinh.addEventListener('click', hideImgPinh)

    modalcontainer.addEventListener('click', function (event){
        event.stopPropagation()
    })

    /////////////////JavaScrip an////////////////////////////
    const btnAns = document.querySelectorAll('.js-btnAn')
    const modalAn = document.querySelector('.js-An')

    //hiển thị mua ticket
    function ShowImgAn(){
        modalAn.classList.add('open')
    }
    //ẩn thị mua ticket
    function hideBuyTickets(){
        modalAn.classList.remove('open')
    }

    //vòng lặp nghe hành vi
    for (const btnAn of btnAns) {
        btnAn.addEventListener('click', ShowImgAn)
    }

    modalAn.addEventListener('click', hideBuyTickets)