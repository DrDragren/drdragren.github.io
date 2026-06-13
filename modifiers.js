//Automatically adds the target="_blank" attribute to all links under the socials class
const socials = document.querySelectorAll(".socials .link");
if (socials.length > 0) {
    socials.forEach(link => {
        link.setAttribute("target", "_blank");
    });
}