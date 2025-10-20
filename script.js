document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('lead-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const scriptURL =https://script.google.com/macros/s/AKfycbzgT0FkgxM9btIewasd-1fZ7UFDT5NH5wt6REIt-bXKzygBPs2YvNQW393d5EnA18ORYw/exec

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                alert('Cadastro enviado com sucesso!');
                form.reset();
            })
            .catch(error => console.error('Erro!', error.message));
    });
});



