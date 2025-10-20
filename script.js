document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('lead-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const scriptURL = 'COLOQUE_AQUI_A_URL_DO_SEU_SCRIPT_DO_GOOGLE_APPS'; // Substitua pela URL do seu script

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                alert('Cadastro enviado com sucesso!');
                form.reset();
            })
            .catch(error => console.error('Erro!', error.message));
    });
});
