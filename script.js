document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    document.querySelectorAll(".copyLink").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 
            const textToCopy = this.getAttribute("data-text");

            navigator.clipboard.writeText(textToCopy).then(() => {
                const notification = document.getElementById("copyNotification");
                notification.classList.remove("move-right");
                notification.style.display = "block";

                setTimeout(() => {
                    notification.classList.add("move-right");
                }, 2000);

                setTimeout(() => {
                    if (notification.classList.contains("move-right")) {
                        notification.style.display = "none";
                        notification.classList.remove("move-right");
                    }
                }, 2500);
            }).catch(err => {
                console.error("Ошибка копирования в буфер: ", err);
            });
        });
    });
}); 
