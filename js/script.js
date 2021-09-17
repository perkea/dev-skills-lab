
//Create a function to add a skill

function addSkills() {
    //Get a hold of the input
    let inputVal = $("input").val();
    console.log(inputVal)

    
    //create a new li and add the input value to it.
    const item = $('.list-parent').append(`<li class="list"><button class = "remove-skill">
    <i class="fas fa-trash-alt"></i></button>${inputVal}</li>`);

    inputVal = $("input").val("");
    };


//Add a click function to the button to add a new skill
$(".addSkillsButton").on("click", addSkills);



//Add  a remove skills button
$(".remove-skill").on("click", function(){
    $(".container ul").on("click", "button", function () {
    $(this).closest("li").remove();
    })

});





