$(function(){

//zmienne
const slideShow = $(".slider"); // wewnetrzny kontener wszystkich slajdów
const slideCount = $(".slide").length; // ilośc slajdów
const slideWidth = 100 / slideCount; // szerokość pojedyńczego slajdu
let slideIndex = 0; // bazowy index slajdu




//szerokość kontenera na wszystkie slajdy
slideShow.css("width",slideCount * 100 + "%");


// iteracja po wszystkich slajdach z ustawieniem właściwości CSS
slideShow.find('.slide').each(function(index){
    $(this).css({width: slideWidth + "%","margin-left": index * slideWidth + "%"});
});

// przycisk poprzedni

$(".prev").on("click",function(e){
    e.preventDefault();
    slide(slideIndex - 1)
});

// przycisk nastepny
$(".next").on("click", function(e){
    e.preventDefault();
    slide(slideIndex + 1)
});

function slide(newSlideIndex) {

    if(newSlideIndex === 0 ) {
        $(".prev").hide();
    } else{
        $(".prev").show();
    }

    if(newSlideIndex >= slideCount -1 ) {
        $(".next").hide();
    } else{
        $(".next").show();
    }
    
    if(newSlideIndex < 0 || newSlideIndex >= slideCount) {
        return;
    }
    let textCaption = $('.caption').eq(newSlideIndex);
    textCaption.hide();

    let marginLeft = (newSlideIndex * (-100) + "%")
    slideShow.animate({"margin-left": marginLeft}, 1000, function(){
        slideIndex = newSlideIndex;
        textCaption.fadeIn('slow');
    });
}

});