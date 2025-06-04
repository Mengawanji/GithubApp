
function getProfile() {

    const apiKey = ''
    const apinameurl = ''



    const githubName = document.getElementById('gitName')
    const errorMessage = document.getElementById('userError')



    fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error fetching current weather data:', error);
        cityErrorInput.textContent = "Please enter a city";
        isValid = false;
        return;
    });
}



document.getElementById('gitName').addEventListener('keyup', function(e) {
    if (e.key == "Enter") {
        getProfile();
    }
});