document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        const min = document.getElementById('numero-minimo').value;
        const max = document.getElementById('numero-maximo').value;
        let sort = Math.floor(Math.random()*Math.floor(max))
        while(sort<min){
        sort = Math.floor(Math.random()*Math.floor(max));
    }
    document.getElementById('resultado-valor').innerHTML=sort;
    document.querySelector('.resultado').style.display = 'block';
    })
})


