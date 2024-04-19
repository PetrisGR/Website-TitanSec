function GoBackHome() {
    window.location.href = "/";
}

function BookServiceBtn(service) {
    window.location.href = "/pages/contact.html?subject=" + "Interested in " + service + " Service" + "&message=" + "I am interested in the " + service + " service. Please contact me with more information.";
}

function ApplyNowBtn() {
    const sectionElement = document.getElementById('job_application_form');
    sectionElement.scrollIntoView({behavior: "smooth"});
}


document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menuIcon");
    var navLinks = document.getElementById("navLinks");
    
    // Responsive Menu Icon for Small Dimension Screens (Mobile)
    menuIcon.addEventListener("click", function() {
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        } else {
            navLinks.classList.add("active");
        }
    });

    // Get URL Query Parameters
    const urlParams = new URLSearchParams(window.location.search);
        
    // Fill in the subject and message fields with the URL query parameters
    const subject = urlParams.get('subject');
    const message = urlParams.get('message');

    if (subject === null || message === null) {
        return;
    }

    document.getElementById('subject').value = subject;
    document.getElementById('message').value = message;
});
