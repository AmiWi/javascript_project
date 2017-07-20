$(function(){

    var tableau = [];


    //sélectionner le bouton d'ajout et ajout évenement clic
    $('#add').click(function(){
        //console.log($('input').val());

        tableau.push({
            nom: $('#lastname').val(), 
            prenom: $('#firstname').val()
        });

        $("#perso_add").html($('#lastname').val() + " " + $('#firstname').val()) ;


        console.log(tableau[0]) ; 
    });
})                                     