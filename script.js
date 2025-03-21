function saveProfile() {
    let profileData = {
        firstName: document.getElementById("firstName").value,
        middleInitial: document.getElementById("middleInitial").value,
        lastName: document.getElementById("lastName").value,
        birthday: document.getElementById("birthday").value,
        aboutMe: document.getElementById("aboutMe").value,
        quote: document.getElementById("quote").value
    };
    localStorage.setItem("profileData", JSON.stringify(profileData));

    let profilePicInput = document.getElementById("profilePic");
    if (profilePicInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (e) {
            localStorage.setItem("profilePic", e.target.result);
            window.location.href = "profile.html";
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        window.location.href = "profile.html";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let profileData = JSON.parse(localStorage.getItem("profileData"));

    if (profileData) {
        document.getElementById("displayName").innerText = 
            `${profileData.firstName} ${profileData.middleInitial} ${profileData.lastName}`;
        document.getElementById("displayBirthday").innerText = profileData.birthday || "N/A";
        document.getElementById("displayAboutMe").innerText = profileData.aboutMe || "N/A";
        document.getElementById("displayQuote").innerText = profileData.quote || "N/A";
    }

    let profilePic = localStorage.getItem("profilePic");
    if (profilePic) {
        document.getElementById("profileImage").src = profilePic;
    }
});

function playClickSound() {
    let audio = new Audio("Clicking - Sound Effect.mp3"); // Make sure the file path is correct
    audio.play();
}

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll("button");
    
    buttons.forEach(button => {
        button.addEventListener("click", playClickSound);
    });
});
