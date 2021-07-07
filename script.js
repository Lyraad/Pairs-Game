//On Document load, set all DOM variables and define 

document.addEventListener('DOMContentLoaded',function(){

    //Card Object constructor defined
    function Card(index, set, shown, matched) {
        this.Index = index;
        this.Set = set;
        this.Shown = shown;
        this.Matched = matched;
    }

    // Initial object intialisation
    var obj_card_1 = new Card(1, 1, false, false);
    var obj_card_2 = new Card(2, 1, false, false);
    var obj_card_3 = new Card(3, 2, true, false);
    var obj_card_4 = new Card(4, 2, false, false);
    var obj_card_5 = new Card(5, 3, false, false);
    var obj_card_6 = new Card(6, 3, false, false);
    var obj_card_7 = new Card(7, 4, false, false);
    var obj_card_8 = new Card(8, 4, false, false);
    var obj_card_9 = new Card(9, 5, false, false);
    var obj_card_10 = new Card(10, 5, false, false);
    var obj_card_11 = new Card(11, 6, false, false);
    var obj_card_12 = new Card(12, 6, false, false);
    var obj_card_13 = new Card(13, 7, false, false);
    var obj_card_14 = new Card(14, 7, false, false);
    var obj_card_15 = new Card(15, 8, false, false);
    var obj_card_16 = new Card(16, 8, false, false);

    //Function to reset objects later if needed
    function fn_reset_cards() {

        var obj_card_1 = new Card(1, 1, false, false);
        var obj_card_2 = new Card(2, 1, false, false);
        var obj_card_3 = new Card(3, 2, true, false);
        var obj_card_4 = new Card(4, 2, false, false);
        var obj_card_5 = new Card(5, 3, false, false);
        var obj_card_6 = new Card(6, 3, false, false);
        var obj_card_7 = new Card(7, 4, false, false);
        var obj_card_8 = new Card(8, 4, false, false);
        var obj_card_9 = new Card(9, 5, false, false);
        var obj_card_10 = new Card(10, 5, false, false);
        var obj_card_11 = new Card(11, 6, false, false);
        var obj_card_12 = new Card(12, 6, false, false);
        var obj_card_13 = new Card(13, 7, false, false);
        var obj_card_14 = new Card(14, 7, false, false);
        var obj_card_15 = new Card(15, 8, false, false);
        var obj_card_16 = new Card(16, 8, false, false);
    
    }



//DOM variable definitions
var all_cards = $('.card_image');
var card_windows = $('.card_container');


//event listenters

$('#debug1').on('click', fn_reset_cards);
$('#debug2').on('click', fn_shuffle_cards);

all_cards.on('click', function (){
    console.log(this.id);

    switch (this.id){
        case 'img_card_1':
            $(this).attr("src","cards/CardDesign1.png");
            break;
        default:
            console.log('switch did not meet a condition')
            break;
    }
});





function fn_shuffle_cards(){

    obj_card_1.Set = 4;

    console.log(obj_card_1);
}



})




