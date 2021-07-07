//Global Variables
var var_buffer_card = null;
var var_buffer_set = null;
var var_selection_card = 0;

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
    var obj_card_3 = new Card(3, 2, false, false);
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
        all_cards.attr("src", 'cards/CardBack.png');
        console.log('All cards hidden');
        obj_card_1 = new Card(1, 1, false, false);
        obj_card_2 = new Card(2, 1, false, false);
        obj_card_3 = new Card(3, 2, false, false);
        obj_card_4 = new Card(4, 2, false, false);
        obj_card_5 = new Card(5, 3, false, false);
        obj_card_6 = new Card(6, 3, false, false);
        obj_card_7 = new Card(7, 4, false, false);
        obj_card_8 = new Card(8, 4, false, false);
        obj_card_9 = new Card(9, 5, false, false);
        obj_card_10 = new Card(10, 5, false, false);
        obj_card_11 = new Card(11, 6, false, false);
        obj_card_12 = new Card(12, 6, false, false);
        obj_card_13 = new Card(13, 7, false, false);
        obj_card_14 = new Card(14, 7, false, false);
        obj_card_15 = new Card(15, 8, false, false);
        obj_card_16 = new Card(16, 8, false, false);
    
    }



//DOM variable definitions
var all_cards = $('.card_image');
var card_windows = $('.card_container');


//event listenters

$('#debug1').on('click', fn_reset_cards);
$('#debug2').on('click', fn_shuffle_cards);
$('#debug3').on('click', function(){
    console.log (obj_card_1.Set);
})


all_cards.on('click', function (){
    console.log(this.id);
    var test = null;
    switch (this.id){
        case 'img_card_1':
            obj_card_1.Shown = true;
            var_selection_card = 1;
            var_selection_set = obj_card_1.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_1.Set + '.png');
            break;
        case 'img_card_2':
            obj_card_2.Shown = true;
            var_selection_card = 2;
            var_selection_set = obj_card_2.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_2.Set + '.png');
            break;
        case 'img_card_3':
            obj_card_3.Shown = true;
            var_selection_card = 3;
            var_selection_set = obj_card_3.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_3.Set + '.png');
            break;
        case 'img_card_4':
            obj_card_4.Shown = true;
            var_selection_card = 4;
            var_selection_set = obj_card_4.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_4.Set + '.png');
            break;
        case 'img_card_5':
            obj_card_5.Shown = true;
            var_selection_card = 5;
            var_selection_set = obj_card_5.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_5.Set + '.png');
            break;
        case 'img_card_6':
            obj_card_6.Shown = true;
            var_selection_card = 6;
            var_selection_set = obj_card_6.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_6.Set + '.png');
            break;
        case 'img_card_7':
            obj_card_7.Shown = true;
            var_selection_card = 7;
            var_selection_set = obj_card_7.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_7.Set + '.png');
            break;
        case 'img_card_8':
            obj_card_8.Shown = true;
            var_selection_card = 8;
            var_selection_set = obj_card_8.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_8.Set + '.png');
            break;
        case 'img_card_9':
            obj_card_9.Shown = true;
            var_selection_card = 9;
            var_selection_set = obj_card_9.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_9.Set + '.png');
            break;
        case 'img_card_10':
            obj_card_10.Shown = true;
            var_selection_card = 10;
            var_selection_set = obj_card_10.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_10.Set + '.png');
            break;
        case 'img_card_11':
            obj_card_11.Shown = true;
            var_selection_card = 11;
            var_selection_set = obj_card_11.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_11.Set + '.png');
            break;
        case 'img_card_12':
            obj_card_12.Shown = true;
            var_selection_card = 12;
            var_selection_set = obj_card_12.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_12.Set + '.png');
            break;
        case 'img_card_13':
            obj_card_13.Shown = true;
            var_selection_card = 13;
            var_selection_set = obj_card_13.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_13.Set + '.png');
            break;
        case 'img_card_14':
            obj_card_14.Shown = true;
            var_selection_card = 14;
            var_selection_set = obj_card_14.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_14.Set + '.png');
            break;
        case 'img_card_15':
            obj_card_15.Shown = true;
            var_selection_card = 15;
            var_selection_set = obj_card_15.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_15.Set + '.png');
            break;
        case 'img_card_16':
            obj_card_16.Shown = true;
            var_selection_card = 16;
            var_selection_set = obj_card_16.Set;
            $(this).attr("src",'cards/CardDesign' + obj_card_16.Set + '.png');
            break;

        default:
            console.log('switch did not meet a condition')
            break;
    }
    fn_check_card();
});

function fn_check_card(){
let var_card_container = '#card_slot_' + var_selection_card
let var_buffer_container = (var_buffer_card == null) ? null : var_buffer_card;

    if (var_buffer_card == null){
        var_buffer_card = var_selection_card;
        var_buffer_set = var_selection_set;
        $(var_card_container).css('background-color', 'cyan');
        
    } else {
        if (var_buffer_set != var_selection_set){
        $(var_card_container).css('background-color', 'cyan');   

        }else if (var_buffer_set == var_selection_set){

        }
    }
  

}




function fn_shuffle_cards(){
    all_cards.attr("src", 'cards/CardBack.png');
    var arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
        obj_card_1.Set=arr[0];
        obj_card_2.Set=arr[1];
        obj_card_3.Set=arr[2];
        obj_card_4.Set=arr[3];
        obj_card_5.Set=arr[4];
        obj_card_6.Set=arr[5];
        obj_card_7.Set=arr[6];
        obj_card_8.Set=arr[7];
        obj_card_9.Set=arr[8];
        obj_card_10.Set=arr[9];
        obj_card_11.Set=arr[10];
        obj_card_12.Set=arr[11];
        obj_card_13.Set=arr[12];
        obj_card_14.Set=arr[13];
        obj_card_15.Set=arr[14];
        obj_card_16.Set=arr[15];
}



})




