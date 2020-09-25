$(document).ready(function() {
    $('.intro-title').hover(function() {
        $('.intro-title').css('color', 'blue');
    })
    $('.intro-title').mouseout(function() {
        $('.intro-title').css('color', 'white');
    })
    $('.section-counter').mouseover(function() {
        $('.section-counter').css('background-image', 'url(/Assete/office2.jpg)');
    })
    $('.section-counter').mouseleave(function() {
        $('.section-counter').css('background-image', 'url(/Assete/office.jpg)');
    })
    $('.intro').mouseover(function() {
        $('.intro').css('background-image', 'url(/Assete/office2.jpg)');
    })
    $('.route').mouseleave(function() {
        $('.intro').css('background-image', 'url(/Assete/office.jpg)');
    })

})
let myimg = document.querySelector('.overflowh');
myimg.addEventListener('mouseover', () => {
    myimg.style.background
})
