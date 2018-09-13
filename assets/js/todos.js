//Check off specific todos by clicking
$("li").on("click", function () {
  $(this).toggleClass('completed')
});

//click on X to delete
$('span').click(function () {
  $(this).parent().fadeOut(500, function () {
    $(this).remove()
  })
  event.stopPropagation()
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    //create a new li and add ul
    $('ul').append(`<li>${todoText}</li>`);
  }
})