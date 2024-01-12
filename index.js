// untuk menangani ketika form disubmit
document.getElementById('button-me').addEventListener('click', function (event) {
    event.preventDefault();

    let profileCard = document.getElementsByClassName('profile-card')[0];
    let tableRows = profileCard.getElementsByTagName('td');

    // Mengumpulkan data baru dari form
    let nama = document.getElementById('name').value;
    let role = document.getElementById('role').value;
    let availability = document.getElementById('availability').value;
    let usia = document.getElementById('usia').value;
    let lokasi = document.getElementById('lokasi').value;
    let pengalaman = document.getElementById('pengalaman').value;
    let email = document.getElementById('email').value;

    // Mengupdate data di section profile
    profileCard.getElementsByTagName('h3')[0].textContent = nama;
    profileCard.getElementsByClassName('text-muted')[0].textContent = role;
    tableRows[0].textContent = availability;
    tableRows[1].textContent = usia;
    tableRows[2].textContent = lokasi;
    tableRows[3].textContent = pengalaman;
    tableRows[4].textContent = email;

    hide.hidden=true;

});


function myFunction() {
    document.getElementById("myP").style.visibility = "hidden";
  }