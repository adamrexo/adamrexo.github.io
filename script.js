function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function updateAge() {
    const birthday = new Date(2007, 4, 18);
    const now = new Date();
    
    const options = { timeZone: 'Europe/Prague' };
    const pragueTime = now.toLocaleString('en-GB', options);
    
    const pragueDate = new Date(pragueTime);
    
    const ageInMilliseconds = pragueDate - birthday.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    const age = ageInYears.toFixed(10);

    document.getElementById("age").textContent = age;
}

updateAge();
setInterval(updateAge, 10);
