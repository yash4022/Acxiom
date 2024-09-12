

document.querySelector(".btn").addEventListener("click", () => {
    window.location.href = "home.html";
});

document.querySelector(".btn:nth-child(3)").addEventListener("click", () => {
  
    alert("You have been logged out.");
    window.location.href = "login.html"; 
});

document.querySelector(".btn-action:nth-child(4)").addEventListener("click", () => {
    window.location.href = "maintain-user.html"; 
});

document.querySelector(".btn-action:nth-child(5)").addEventListener("click", () => {
    window.location.href = "maintain-vendor.html"; 
});