$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault()

        let Tarefa = $('input').val()
        let AdTarefa =  $(`<li > ${Tarefa} </li>`)
        $(AdTarefa).appendTo('ul')

        $(AdTarefa).on('click', function(){
            $(this).toggleClass('concluida')
        })
    })
})
