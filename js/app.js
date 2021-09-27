let principal = $('#principal');
let noticia = $('#notice')

$('.btn-seguir').on('click', function(e){
    e.preventDefault();
    console.log('Click en btn-seguir');

    principal.fadeOut(function(){
        noticia.slideDown(1000);
    });
    
    // noticia.fadeIn('slow', function(){
    //     principal.slideUp(1000)
    // });
});

$('.btn-regresar').on('click', function(){
    noticia.fadeOut(function(){
        principal.slideDown(1000);
    });
});