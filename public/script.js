function loadPage(page) {
    let content = '';

    if (page === 'yritys') {
        content = '<h2>Yritysesittely</h2><p>Tässä on tietoa yrityksestä.</p>';
    } else if (page === 'yhteystiedot') {
        content = '<h2>Yhteystiedot</h2><p>Tässä ovat yhteystiedot.</p>';
    } else if (page === 'henkilokunta') {
        fetch('/henkilokunta')
            .then(response => response.json())
            .then(data => {
                let table = '<h2>Henkilökunta</h2><table><tr><th>Nimi</th><th>Titteli</th></tr>';
                data.forEach(employee => {
                    table += `<tr><td>${employee.name}</td><td>${employee.title}</td></tr>`;
                });
                table += '</table>';
                document.getElementById('main_alue').innerHTML = table;
            });
        return; // Lopeta, jotta sisältöä ei ylikirjoiteta ennen kuin data on ladattu
    }

    document.getElementById('main_alue').innerHTML = content;
}