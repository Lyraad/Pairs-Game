//Global Variables
var var_buffer_card = null;
var var_selection_card = 0;
var obj_card = [];
var action_allowed = true;

//On Document load, set all DOM variables and define 

document.addEventListener('DOMContentLoaded',function(){

    //Card Object constructor defined
    class Card {
        constructor(set, shown, matched) {
            this.Set = set;
            this.Shown = shown;
            this.Matched = matched;
        }
    }

    //DOM variable definitions
    var all_cards = $('.card_image');
    var card_windows = $('.card_container');


    // Initial object intialisation

        obj_card.push(new Card(1, false, false));
        obj_card.push(new Card(1, false, false));
        obj_card.push(new Card(2, false, false));
        obj_card.push(new Card(2, false, false));
        obj_card.push(new Card(3, false, false));
        obj_card.push(new Card(3, false, false));
        obj_card.push(new Card(4, false, false));
        obj_card.push(new Card(4, false, false));
        obj_card.push(new Card(5, false, false));
        obj_card.push(new Card(5, false, false));
        obj_card.push(new Card(6, false, false));
        obj_card.push(new Card(6, false, false));
        obj_card.push(new Card(7, false, false));
        obj_card.push(new Card(7, false, false));
        obj_card.push(new Card(8, false, false));
        obj_card.push(new Card(8, false, false));
        all_cards.css('visibility','hidden');

    //Function to reset objects later if needed
    function fn_reset_cards() {
        all_cards.attr("src", 'cards/CardBack.png');
        all_cards.css('visibility','visible');
        $(".card_container").css('background-color','transparent')
        console.log('All cards hidden');
        obj_card = [];
        obj_card.push(new Card(1, false, false));
        obj_card.push(new Card(1, false, false));
        obj_card.push(new Card(2, false, false));
        obj_card.push(new Card(2, false, false));
        obj_card.push(new Card(3, false, false));
        obj_card.push(new Card(3, false, false));
        obj_card.push(new Card(4, false, false));
        obj_card.push(new Card(4, false, false));
        obj_card.push(new Card(5, false, false));
        obj_card.push(new Card(5, false, false));
        obj_card.push(new Card(6, false, false));
        obj_card.push(new Card(6, false, false));
        obj_card.push(new Card(7, false, false));
        obj_card.push(new Card(7, false, false));
        obj_card.push(new Card(8, false, false));
        obj_card.push(new Card(8, false, false));
    }

//event listenters

$('.menu_item_active').on('mouseenter',function(){
    $(this).css('background-color','blue')
});

$('.menu_item_active').on('mouseleave',function(){
    $(this).css('background-color','beige')
});


$('#debug1').on('click', fn_reset_cards);
$('#debug2').on('click', fn_shuffle_cards);
$('#debug3').on('click', function(){
    console.log (obj_card_1.Set);
})


all_cards.on('click', function (){


    console.log(this.id);
    var image_name = this.id;
    var card_select = fn_get_obj(image_name);

        if (obj_card[card_select].Shown == false && action_allowed == true){
            console.log("Card index of:" + card_select + " Card part of set:" + obj_card[card_select].Set);
            $(this).attr("src",'cards/CardDesign'+obj_card[card_select].Set+'.png')
            obj_card[card_select].Shown = true;
            if (var_buffer_card == null){
                var_buffer_card = card_select;
            } else {
                if (fn_compare_cards(card_select, var_buffer_card) == true){
                    console.log('Match Detected')
                    obj_card[card_select].Matched = true;
                    obj_card[var_buffer_card].Matched = true;
                    $('#card_slot_'+ var_buffer_card).css('background-color','green');
                    $('#card_slot_'+ card_select).css('background-color','green');
                    var_buffer_card = null;

                    if(fn_check_for_win()==true){
                        fn_process_win();
                    };

                }else{
                    console.log("No match detected");
                    $('#card_slot_'+ var_buffer_card).css('background-color','red');
                    $('#card_slot_'+ card_select).css('background-color','red');
                    action_allowed = false;

                    setTimeout(function(){
                        $("#img_card_" + var_buffer_card).attr("src",'cards/CardBack.png');
                        $("#img_card_" + card_select).attr("src",'cards/CardBack.png');
                        $('#card_slot_'+ var_buffer_card).css('background-color','transparent');
                        $('#card_slot_'+ card_select).css('background-color','transparent');
                        obj_card[card_select].Shown = false;
                        obj_card[var_buffer_card].Shown = false;
                        var_buffer_card = null;
                        action_allowed = true;
                    }, 1000);
                }
            }
        }else{
            console.log("Card is already shown, input ignored")
        }
    });


function fn_get_obj(image_name){
    switch (image_name){
        case 'img_card_0':
            return 0;
        case 'img_card_1':
            return 1;
        case 'img_card_2':
            return 2;
        case 'img_card_3':
            return 3;
        case 'img_card_4':
            return 4;
        case 'img_card_5':
            return 5;
        case 'img_card_6':
            return 6;
        case 'img_card_7':
            return 7;
        case 'img_card_8':
            return 8;
        case 'img_card_9':
            return 9;
        case 'img_card_10':
            return 10;
        case 'img_card_11':
            return 11;
        case 'img_card_12':
            return 12;
        case 'img_card_13':
            return 13;
        case 'img_card_14':
            return 14;
        case 'img_card_15':
            return 15;
        default:
            console.log("Could not get image ref")
}};

function fn_compare_cards(card_select, var_buffer_card){
    if (obj_card[card_select].Set == obj_card[var_buffer_card].Set){
        return true;
    }else{
        return false;
    }
}

function fn_check_for_win(){
    console.log('Checking win condition');
    for (let i = 0; i < 16; i++) {
        if (obj_card[i].Matched == false){
            console.log("Found an unmatched card, win condition not triggered, exiting check")
            return false;
        }
    }
    console.log("Could not find any unmatched cards, triggering player win function")
    return true;
}

function fn_process_win(){
    console.log("WIN FUNCTION TRIGGERED");
    all_cards.css('visibility','hidden');
};


function fn_shuffle_cards(){
    fn_reset_cards();
    all_cards.attr("src", 'cards/CardBack.png');
    var arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    for(let i = 0; i<obj_card.length; i++){
        obj_card[i].Set = arr[i];
    }
}

});
