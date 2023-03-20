function updateAge() {
    const birthday = new Date(2007, 6, 7);
    const ageInMilliseconds = Date.now() - birthday.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    const age = ageInYears.toFixed(10);

    document.getElementById("age").textContent = age;
}

updateAge();
setInterval(updateAge, 10);
