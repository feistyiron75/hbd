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

function shoAwMessage() {
    const quotes = [
        "You make my heart smile!",
        "Every moment with you is a treasure!",
        "You are the life of the party",
        "I cherish every moment with you!",
        "To more life of success"
		"Happy birthday to my favorite person!"
    ];
	let quoteIndex = 0;
	function showQuote() {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    document.getElementById("quote").innerText = quotes[quoteIndex];
}

setInterval
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerText = randomMessage;
    document.getElementById("message").classList.remove("hidden");
}
