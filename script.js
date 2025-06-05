const userInput = document.getElementById('gitName');
const infoBox = document.querySelector(".info-box");
const errorMessage = document.getElementById('userError');


 
let getProfile =(username) => {
    const apiUrl =`https://api.github.com/users/${username}`;

    let isValid = true;
    errorMessage.textContent = "";
    
    if (!userInput) {
        errorMessage.textContent = "Please enter a valid Github Username";
        isValid = false;    
        return;  
    }

     fetch(apiUrl).then((res) => res.json()).then(data => { 

        if(data.Response = 'True') {
            const dateData = data.created_at.slice(0, data.created_at.length - 10);
            const location = data.location === "" || data.location === null ? "No location" : data.location; 
            const twitter = data.twitter_username === "" || data.twitter_username === null ? "No X" : data.twitter_username; 
            const website = data.blog === "" || data.blog === null ? "No website" : data.blog; 
            const company = data.company === "" || date.company === null ? "No company" : data.company; 
            const bio = data.bio === "" || data.bio === null? "This profile has no bio" : data.bio;


            infoBox.innerHTML = `

            <div class="user-details"> 
                <div class="img-box">
                    <img src="${data.avatar_url}" alt="">
                </div>
                <div class="details">
                    <h3 class="name"> ${data.name}</h3>
                    <h3 class="username"> ${data.login}</h3>
                    <span class="join-date">${dateData }</span>
                </div>
                <p class="bio">${data.bio}</p>
                <div class="user-profile">
                    <div class="repos">
                        <h2>${data.public_repos}</h2> 
                        <span>Repos</span>
                    </div>
                    <div class="followers">   
                        <h2> ${data.followers}</h2>
                        <span>Followers</span>
                    </div>
                    <div class="following">
                        <h2> ${data.following}</h2>
                        <span>following</span>
                    </div>   
                </div>
                <div class="user-other-details">
                    <p><i class="fa-solid fa-building"></i> ${company}</p>
                    <p><i class="fa-solid fa-location-pin"></i> ${location}</p>
                    <p><i class="fa-solid fa-link"></i>${website}</p>
                    <p><i class="fa-brands fa-x-twitter"></i> ${twitter}</p>
                </div>
            </div>  `;

        }
    })
        .catch(error => {
        console.log('Error fetching user profile;', error);
        errorMessage.textContent = "Please enter a valid username";
        isValid = false;
        return;
    })

}

getProfile("github");






userInput.addEventListener('keyup', function(e) {
    if (e.key == "Enter") {
        getProfile();
    }
});
 










