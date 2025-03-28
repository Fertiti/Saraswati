document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".copyLink").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      
      var text = this.getAttribute("data-text");
      navigator.clipboard.writeText(text).then(() => {
        var notification = document.getElementById("copyNotification");
        
       
        notification.style.display = "block";
        
      
        setTimeout(function() {
          notification.classList.add("move-right");
        }, 2000); 
        
   
        setTimeout(function() {
          notification.style.display = "none";
          notification.classList.remove("move-right"); 
        }, 3600); 
      }).catch(err => {
        console.error("copy to clipboard error: ", err);
      });
    });
  });
});
