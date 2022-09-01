$('.slider-block').slick({ adaptiveHeight: true, dots: true });




function getActiveLinks() {
    let element = document.getElementById('navigation').querySelectorAll('a');
    let url = document.location.href;
    for (let i = 0; i < element.length; i++) {
        if (url == element[i].href) {
            element[i].className = 'active_menu';
        };
    };
}

getActiveLinks()

