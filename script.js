document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".gallery-container img");
    
    images.forEach(img => {
        img.addEventListener("click", () => {
            alert("जय महादेव! यह मंदिर की छवि है।");
        });
    });
});
