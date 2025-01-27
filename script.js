let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function showMessage() {
    const messages = [
        "You make my heart smile!",
        "Every moment with you is a treasure!",
        "You are the love of my life!",
        "I cherish every moment with you!",
        "Happy birthday to my favorite person!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerText = randomMessage;
    document.getElementById("message").classList.remove("hidden");
}