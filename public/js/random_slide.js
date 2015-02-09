var random_slide = [
    'JDTalks este locul unde poveștile celor mai buni studenți devin motivație și inspirație pentru generațiile următoare, unde ideile și reușitele lor sunt împărtășite. - Șerban Cozma',
    'Eu nu ma pricep la texte. OK?! Nu ma condamnati ca asta nu are niciun comentariu. Sa-si faca.'
];

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var current_slide = random(0, 1);
var timeslide = 10500;

var timeslider;
function slidechange(changewith){ 
    if(changewith!=null)
        current_slide = changewith;
    else
    {
        current_slide++;
        if(current_slide>=random_slide.length) current_slide = 0;
    }
    
    $('#header div.partial_width div.bgimg').addClass('transparent');
    $('#header div.text').html(random_slide[current_slide]);
    $('#header div.partial_width div.bgimg').css('background-image', 'url(\'/img/header/'+(current_slide+1)+'.png\')');
    $('#header div.partial_width div.bgimg').removeClass('transparent');
    
    timeslider = setTimeout(slidechange, timeslide);
}

slidechange();