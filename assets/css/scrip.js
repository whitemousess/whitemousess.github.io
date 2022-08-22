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

    const buyBtns = document.querySelectorAll('.js-buy-tickets')
    const modal = document.querySelector('.js-modal')
    const modalcontainer = document.querySelector('.js-modal-container')
    const modalclose = document.querySelector('.js-modal-close')

    //hiển thị mua ticket
    function showBuyTickets(){
        modal.classList.add('open')
    }
    //ẩn thị mua ticket
    function hideBuyTickets(){
        modal.classList.remove('open')
    }
 
    //vòng lặp nghe hành vi
    for (const buyBtn of buyBtns) {
        buyBtn.addEventListener('click', showBuyTickets)
    }
     
    //nghe hành vi click
    modalclose.addEventListener('click', hideBuyTickets)

    modal.addEventListener('click', hideBuyTickets)

    modalcontainer.addEventListener('click', function (event){
        event.stopPropagation()
    })
