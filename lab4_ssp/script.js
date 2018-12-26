const getUserData = () => (
    fetch(`https://api.github.com/users/gaearon`)
    .then(result => result.json())
    .then(data => {
        var avatar = document.getElementById('avatar');
        avatar.setAttribute('src', data.avatar_url);
        var empty = 'This field is empty or hidden'
        var userName = document.getElementById('userName');
        userName.innerHTML = data.name || empty;
        var userLogin = document.getElementById('userLogin');
        userLogin.innerHTML = data.login || empty;
        var userBio = document.getElementById('userBio');
        userBio.innerHTML = data.bio || empty;
        var userCompany = document.getElementById('userCompany');
        userCompany.innerHTML = data.company || empty;
        var userLocation = document.getElementById('userLocation');
        userLocation.innerHTML = data.location || empty;
        var userEmail = document.getElementById('userEmail');
        userEmail.innerHTML = data.email || empty;
        var userBlog = document.getElementById('userBlog');
        userBlog.innerHTML = data.blog || empty;
    })
    .catch(err => console.log(err))
);

getUserData();