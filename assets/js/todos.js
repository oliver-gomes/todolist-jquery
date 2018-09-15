//Check off specific todos by clicking
$("ul").on("click", '.p', function () {
  $(this).parent().toggleClass('completed');
});

//click on X to delete
$('ul').on('click', '.fa', function (event) {
  $(this).parent().parent().fadeOut(500, function () {
    $(this).remove();
  })
  event.stopPropagation();
});

$("input[type='text']").on("keypress", function (event) {
  if (event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add ul
    $('ul').append(`<li>
    <span class="p">${todoText}</span>
    <span><i class="fa fa-trash-alt"></i></span>
  </li>`);
  }
})

$('.fa-plus').click(function () {
  $("input[type='text']").fadeToggle();
})