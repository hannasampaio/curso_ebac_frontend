$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(__) _____-____'
    })

    $('#cpf').mask('000.000.000-00',{
        placeholder: '___.___.___-__',
    })

    $('#cep').mask('00000-000',{
        placeholder: '_____-___'
    })

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco:{
                required: true
            },
            cep:{
                required: true
            }
        },
        messages:{
            nome: 'Por favor, insira seu nome completo.',
            email: 'Por favor, insira seu e-mail.',
            telefone: 'Por favor, insira seu telefone.',
            cpf: 'Por favor, insira seu CPF.',
            endereco: 'Por favor, insira seu endereço completo.',
            cep: 'Por favor, insira seu CEP.',
        },
    })
})