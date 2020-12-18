// script.js

$(document).ready(function(){
    $("form").submit(function(event){
        $("input, textarea").each(function(){
            if($(this).val().length === 0){
                $(this).css("border", "2px solid red");
                $(this).after("<span>Merci de remplir ce champ.</span>");
                event.preventDefault();
            }else{
                let chaine = $("form").serialize();
            }
        });
        
    });
});