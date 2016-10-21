$(document).ready(function(){
    var adventureOptions_array = [];

    function updateUIwithAPI(array) {
        var cardSelector = "#adventure-card-container .card.card-";
        for(objectIndex in array) {
            var cardNumber = parseInt(objectIndex) + 1;
            $(cardSelector + cardNumber + ' h3').text(array[objectIndex].title);
            $(cardSelector + cardNumber).attr('data-id', array[objectIndex].id);
            $(cardSelector + cardNumber).css('background', "url(" + array[objectIndex].img + ")");
            $(cardSelector + cardNumber).attr('href', array[objectIndex].url);
        }
    }

    $.ajax({
        url: 'http://lukepeters.me/api/adventure-options/',
        dataType: 'text',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded',
        success: function(data) {
            adventureOptions_array = JSON.parse(data);

            updateUIwithAPI(adventureOptions_array);
        },
        error: function(jqXhr, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown)
        }
    });

});






