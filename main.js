// From the brief explanation you send in your email I wrote these lines of code. I'm not sure if this is what you envisioned.

    //predefined database is "users", example user is "John Doe".
let johnDoe = {
    id: 1,
    userName: "John Doe",
    adress: "Evergreen Terrace 742",
    phone: "419-200-2000",
    socialSecurity: "746-00-0000",
    favColor: "blue",
    favWebsites: [
        {website: "Youtube", url:"https://www.youtube.com"},
        {website: "Facebook", url:"https://www.facebook.com"},
        {website: "Bloomingdales", url:"https://www.bloomingdales.com"},
        ]
}
let users = []
users.push(johnDoe)

// I haven't worked with images yet, but I guess when uploading/submitting an image it should have some metadata saved to it. One of this attributes could be a photoId.

    // The HTML input for the Photo ID is just for this code to work now, it will change according to the needs.
photoIdSubmit = document.getElementById("photoIdSubmit")
photoIdSubmit.addEventListener("submit", (e) => {
    e.preventDefault()
    let userFound = searchUser()
    displayProfile (userFound)
})
    // We first need to search in the database for a match of the photoId. If there is a much infomation is logged into console. If there is no much it returns a message saying the ID is not in the database.
function searchUser(){
    photoId = document.getElementById("photoId").value
    console.log(photoId)
    let unknownUser = users.find((el) => el.id === parseInt(photoId))
    
    if (unknownUser === undefined) {
        console.log(`This person is not in our database`)
    } else {
        console.log(`The ID corresponds to ${unknownUser.userName}, his/her adress is: ${unknownUser.adress}, phone number is: ${unknownUser.phone}, and Social Security number is:${unknownUser.socialSecurity}`)
        return unknownUser
    } 
}
    // The previous function returns the search from the database. This is then used as an input for the displayProfile function.
function displayProfile(user){
    let profileMain = document.createElement("div")
    profileMain.setAttribute("class", "d-flex flex-column w-100 p-4 gap-5")

    if (user === undefined) {
        profileMain.innerHTML = `
        no profile was created because the user is not in the database
        `
    } else {
        profileMain.innerHTML = `
        <div class="d-flex align-items-center">
            <div class="w-25 d-flex justify-content-center p-2" style="background-color: ${user.favColor}; opacity: 0.6;">
                <i class="fas fa-portrait" style="font-size: 200px;"></i>
            </div>
            <div class="w-75 d-flex justify-content-end p-5" style="color: ${user.favColor};">
                <h2>${user.userName}</h2>
            </div>
        </div>
        <div class="d-flex flex-column gap-3">
            <h4>These are some websites we think you might like...</h4>
            <div class="d-flex justify-content-around">
                <a href="${user.favWebsites[0].url}" target="_blank">${user.favWebsites[0].website}</a>
                <a href="${user.favWebsites[1].url}" target="_blank">${user.favWebsites[1].website}</a>
                <a href="${user.favWebsites[2].url}" target="_blank">${user.favWebsites[2].website}</a>
            </div>
        </div>
        `
    }
    let container = document.getElementById("container")
    container.innerHTML = ``
    container.append(profileMain)
}