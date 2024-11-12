document.addEventListener("DOMContentLoaded", function() {
    const username = "hannasampaio"; 
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Erro ao buscar dados do GitHub");
            }
            return response.json();
        })
        .then(function(json) {
            document.getElementById("profile-avatar").src = json.avatar_url;
            document.getElementById("profile-name").textContent = json.name;
            document.getElementById("profile-username").textContent = `@${json.login}`;
            document.getElementById("repos").textContent = json.public_repos;
            document.getElementById("followers").textContent = json.followers;
            document.getElementById("following").textContent = json.following;
            document.getElementById("profile-link").href = json.html_url;
        })
        .catch(function(error) {
            console.error(error);
            alert("Ocorreu um erro ao carregar os dados do perfil.");
        });
});
