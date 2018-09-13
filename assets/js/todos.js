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