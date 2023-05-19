$(document).ready(function(){

    $('form').on('submit',  function(e){
        e.preventDefault()

        const tarefa = $('#adiciona-tarefa').val();

        const novaTarefa = $('<ul style="display: none"></ul>')

        $(`<li> ${tarefa}</li>`).appendTo(novaTarefa)
        $(novaTarefa).appendTo('body')

        $(novaTarefa).slideToggle(750)
        
        $('#adiciona-tarefa').val('')

        $('li').click(function(){
            $(this).css('text-decoration','line-through')
        })

        $('li').on('dblclick', function(){
            $(this).css('text-decoration','none')
        })

    })



})