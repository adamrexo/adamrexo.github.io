function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function updateAge() {
    const birthday = new Date(2007, 4, 18);
    const today = new Date();
    
    let age = today.getFullYear() - birthday.getFullYear();
    
    if (today < new Date(birthday.setFullYear(today.getFullYear()))) {
        age--;
    }
    
    const ageInMilliseconds = today - birthday;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    age += ageInYears.toFixed(10) - Math.floor(ageInYears);
    
    document.getElementById("age").textContent = age.toFixed(10);
}

updateAge();
setInterval(updateAge, 10);
