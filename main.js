    const form = document.getElementById('form-deposito');
    
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const quantidadeProduto = document.getElementById('quantidadeProduto').value;
        const quantidadeEstoque = document.getElementById('quantidadeEstoque').value;

        if (quantidadeProduto > quantidadeEstoque) {
            document.querySelector('.error-message').style.display = 'block'
        } else {
            document.querySelector('.success-message').style.display = 'block'
        }
    })
    
    console.log(form);























