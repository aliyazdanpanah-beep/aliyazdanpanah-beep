let Menu = document.getElementById('Icon')
let Side_Nav = document.getElementById('Side_Nav')
let first_img = document.getElementById('tiwch__section_img')


Menu.onclick = function () {

    if (Side_Nav.style.right == '-90px') {

        Side_Nav.style.right = '0'
        Side_Nav.style.transition = 'all ease-in 0.5s'
    } 
    else {
        Side_Nav.style.right = '-90px'
    }
}


function Scroll_E (e) {

    if (first_img.style.left == '-620px') {

        first_img.style.left = '60px'
        first_img.style.opacity = '1'
        first_img.style.transition = 'all ease-in 2s'
    } 
    else {
        first_img.style.left = '-620px'
    }
}

window.addEventListener('scroll', Scroll_E)