document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenire il comportamento predefinito del form

    // Ottenere i valori dal modulo
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const bio = document.getElementById('bio').value;

    // Creare un nuovo profilo
    const profile = document.createElement('div');
    profile.classList.add('profile');
    profile.innerHTML = `
        <h3>${name}, ${age}</h3>
        <p><strong>Genere:</strong> ${gender}</p>
        <p>${bio}</p>
    `;

    // Aggiungere il profilo all'elenco dei profili
    document.getElementById('profiles').appendChild(profile);

    // Resettare il modulo
    document.getElementById('profile-form').reset();
});
