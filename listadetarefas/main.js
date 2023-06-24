$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomedatarefa = $('input').val();
        const novaTarefa = $('<li style="display: block"></li>');
        $(`<li> ${nomedatarefa}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
    })

    $("ul").on("click", "li", function() {
        $(this).toggleClass("riscado");
    });
})

