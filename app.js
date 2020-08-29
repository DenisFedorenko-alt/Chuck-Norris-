const jokeForm = document.getElementById("jokeForm");
const jokeText = document.getElementById("jokeText");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");



jokeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = firstNameInput.value === "" ? "Chuck" : firstNameInput.value;
    const lastName = lastNameInput.value === "" ? "Norris" : lastNameInput.value;

    const url = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
    try {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                jokeText.innerHTML = data.value.joke;
            })
    }
    catch (err) {
        console.log(err)
    }
}) 