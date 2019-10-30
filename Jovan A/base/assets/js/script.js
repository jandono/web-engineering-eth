var menuInformation = new Object();

menuInformation["images/appetizers-pic01.jpg"] = "Bruschette with Tomatoes";
menuInformation["images/appetizers-pic02.jpg"] = "Green Rools";
menuInformation["images/appetizers-pic03.jpg"] = "Eggplants";
menuInformation["images/appetizers-pic04.jpg"] = "Bruschette";
menuInformation["images/appetizers-pic05.jpg"] = "Meatballs";
menuInformation["images/appetizers-pic06.jpg"] = "Spicy Beans";

menuInformation["images/pasta-pic01.jpg"] = "Farfalle";
menuInformation["images/pasta-pic02.jpg"] = "Penne";
menuInformation["images/pasta-pic03.jpg"] = "Campanelle";
menuInformation["images/pasta-pic04.jpg"] = "Angel Hair";
menuInformation["images/pasta-pic05.jpg"] = "Acini di Pepe";
menuInformation["images/pasta-pic06.jpg"] = "Orrechiette";

menuInformation["images/meat-pic01.jpg"] = "Filleto di Manzo";
menuInformation["images/meat-pic02.jpg"] = "Anatra al Forno";
menuInformation["images/meat-pic03.jpg"] = "Filetto di Barramundi";
menuInformation["images/meat-pic04.jpg"] = "Guanciale di vitello brasato";
menuInformation["images/meat-pic05.jpg"] = "Arrosto di vitello ai carciofi";
menuInformation["images/meat-pic06.jpg"] = "Orata lessa con maionese al";

menuInformation["images/dessert-pic01.jpg"] = "Venetian sgroppino";
menuInformation["images/dessert-pic02.jpg"] = "Italian trifle";
menuInformation["images/dessert-pic03.jpg"] = "Amaretti tortoni";
menuInformation["images/dessert-pic04.jpg"] = "Melon salad";
menuInformation["images/dessert-pic05.jpg"] = "Tiramisu gateau";
menuInformation["images/dessert-pic06.jpg"] = "Classic Italian affogato";

$(document).ready(function() {
    fromLeft();
    fromBot();
    
    if ($(window).width() > 768) {
        inCenter();
    }
});

$(document).scroll(function() {
    fromLeft();
    fromBot();
    if ($(window).width() > 768) {
        inCenter();
    }
});

function fromLeft(){
    $(".jq-from-left:in-viewport").each(function(){
        $(this).animate({
            marginLeft: '0px',
            marginRight: '0px'
        }, 1000);
        
        $(this).removeClass("jq-from-left");
    });
}

function fromBot(){
    $(".jq-from-bottom:in-viewport").each(function(){
        $(this).animate({
            marginTop: '0px'
        }, 1000);
        
        $(this).removeClass("jq-from-bottom");
    });
}

function inCenter(){
    
    var minHeight = $(window).scrollTop()
    var maxHeight = $(window).height()
    var middleHeight = minHeight + maxHeight / 2.0;
    var midElement = null;
    var minDistanceFromMid = Number.MAX_VALUE;
    
    $(".in-center:in-viewport").each(function(){
        
        $(this).removeClass('green-background');
        var pos = $(this).offset().top + $(this).height();
        var currDistanceFromMid = Math.abs(pos - middleHeight);
        
        if(currDistanceFromMid < minDistanceFromMid){
            midElement = $(this);
            minDistanceFromMid = currDistanceFromMid;
        }
    });
    
    if(midElement != null){
        midElement.addClass('green-background');
        
        var prefix = midElement.attr('id').split('-')[0];
        
        $('.menu-item img').each(function(){
            var oldSrc = $(this).attr('src');
            var postFix = oldSrc.split('-')[1];
            var newSrc = 'images/' + prefix + '-' + postFix;
            $(this).attr('src', newSrc);
            $(this).parent().parent().find('div > a').html(menuInformation[newSrc]);
        });
    }
}