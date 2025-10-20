document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('lead-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const scriptURL = https://script.google.com/macros/s/AKfycbw6ukHP1-vNQ9TSIantbHCjPQnLgsFmjk3VLwy3BAq9T34VBS0kycwJlrxcggksbTHNHQ/exec

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                alert('Cadastro enviado com sucesso!');
                form.reset();
            })
            .catch(error => console.error('Erro!', error.message));
    });
});


