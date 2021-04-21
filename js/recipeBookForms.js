

$('#buttonPopup').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipe = button.data('recipe')
    var modal = $(this)
    modal.find('.modal-title').text(`Let's add ` + recipe)
})

$('#editPopup').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipeUpdate = button.data('recipe')
    var modal = $(this)
    modal.find('.modal-other-title').text(`Time to update ` + recipeUpdate)
    modal.find('.modal-body input').val(recipeUpdate)
})