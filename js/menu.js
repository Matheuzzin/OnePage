$(document).ready(function(){
    $('#btn-menu').click(function(e){
        e.preventDefault()
        $('#menu').toggle('show')
    })

    // Criar uma função para monitorar os cliques nos links
    $('a').click(function(e){
        e.preventDefault()

        // capturar qual é a página que desejo abrir
        let url = $(this).attr('href')
        $('#'+url).show()

        switch(url){
            case 'home':
                $('#home').show()
                $('#about').hide()
                $('#action').hide()
                $('#contact').hide()
            break

            case 'about':
                $('#about').show()
                $('#home').hide()
                $('#action').hide()
                $('#contact').hide()
            break

            case 'action':
                $('#action').show()
                $('#home').hide()
                $('#about').hide()
                $('#contact').hide()
            break

            case 'contact':
                $('#contact').show()
                $('#home').hide()
                $('#about').hide()
                $('#action').hide()
            break

            case 'close':
                $('#home').hide()
                $('#about').hide()
                $('#action').hide()
                $('#contact').hide()
                $('#close').hide()
            break
            
            default: alert('Link não encontrado');
        }
    })
})