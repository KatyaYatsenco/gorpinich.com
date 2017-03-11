export const menuIcon = document.getElementById('menuIcon'),
    logo = document.querySelector('.logo_name'),
    navigationLinks = document.querySelectorAll('.navLinks'),
    navMenuImg1 = document.getElementById('menu_img1'),
    navMenuImg2 = document.getElementById('menu_img2'),
    navMenuImg3 = document.getElementById('menu_img3'),
    linkGalleryCategory = document.querySelectorAll('titleGalleryCategory'),



    navBar = document.querySelector('#navList');

//Navigation menu
menuIcon.addEventListener('click', function () {
    const style = window.getComputedStyle(navBar);
    if (style.visibility === 'hidden') {
        navBar.style.visibility = 'visible';
        navMenuImg1.style.animation = 'rotateImg1 0.3s';
        navMenuImg1.style.transform = 'rotate(40deg)';
        navMenuImg1.style.marginTop = '17px';
        navMenuImg2.style.display = 'none';
        navMenuImg3.style.animation = 'rotateImg3 0.3s';
        navMenuImg3.style.transform = 'rotate(-40deg)';
        navMenuImg3.style.marginTop = '-10px';
    }
    else {
        navBar.style.visibility = 'hidden';
        navMenuImg1.style.animation = 'backRotateImg1 0.3s';
        navMenuImg1.style.transform = 'rotate(0deg)';
        navMenuImg1.style.marginTop = '0';
        const showImg2 = delay(show,200);
        showImg2(navMenuImg2);

        navMenuImg3.style.animation = 'backRotateImg3 0.3s';
        navMenuImg3.style.transform = 'rotate(0deg)';
        navMenuImg3.style.marginTop = '0';
    }
});

function show(navMenuImg2) {
    navMenuImg2.style.display = 'flex';
}
function delay(show, ms) {

    return function() {
        const savedThis = this;
        const savedArgs = arguments;

        setTimeout(function() {
            show.apply(savedThis, savedArgs);
        }, ms);
    };

}

/**
 * Function closeNavBarMenu, when navBar open and pages switch
 */
export function closeNavBarMenu() {
    if (navBar.style.visibility === 'visible') {
        menuIcon.click();
    }
}
