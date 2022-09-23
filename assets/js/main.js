$(document).ready(function(){
    // Testimonial Carousel
    let owlNavPrev = '<div class="circle-icon circle-icon-outline-success mt-3 mx-4"><i class="fs-5 fa-solid fa-angle-left"></i></div>'
    let owlNavNext = '<div class="circle-icon circle-icon-outline-success mt-3 mx-4"><i class="fs-5 fa-solid fa-angle-right"></i></div>'
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        nav: true,
        margin: 30,
        navText: [owlNavPrev, owlNavNext],
        responsive: {
            600: {
                items: 2
            }
        }
    });

    // Hero Car Offset
    let lenleft = $(".container").offset().left
    let pictures =  document.getElementById("car-picture")
    let picture = pictures.getElementsByTagName("img")
    picture[0].style.right = "-"+lenleft+"px"

    // FAQ dropdown
    let questions = document.getElementsByClassName("question")
    Array.prototype.forEach.call(questions, function(question) {
        let button = question.getElementsByTagName("button")

        button[0].addEventListener("click", function (event) {
            if(question.classList.contains("active")) {
                question.classList.remove("active")
            } else {
                question.classList.add("active")
            }
        })
    });

    // Navbar Menu
    $('.navbar .navbar-toggler').on('click', function (event) {
        event.preventDefault()
        let target = $($(this).attr('data-bs-target'))
        if(target.hasClass('show')) {
            target.removeClass('show')
        } else {
            target.addClass('show')
        }
    })
    $('.navbar .nav-item').on('click', function (event) {
        let target = $($('.navbar .navbar-toggler').attr('data-bs-target'))
        if(target.hasClass('show')) {
            target.removeClass('show')
        }
    })
});