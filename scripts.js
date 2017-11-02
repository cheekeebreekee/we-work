$(function() {
  var projectInputWrapper = $('.buy_form_inner'),
      selectBtn = $('.project-select-btn');

  projectInputWrapper.on('click', '.project-select-budget-btn', function (e) {
    selectBtn.not($(this)).removeClass('expanded');
    $(this).toggleClass('expanded');
  });

  projectInputWrapper.on('click', '.project-select-attachment-btn', function (e) {
    selectBtn.not($(this)).removeClass('expanded');
    $(this).toggleClass('expanded');
  });

  projectInputWrapper.on('click', '.project-select-profession-btn', function (e) {
    selectBtn.not($(this)).removeClass('expanded');
    $(this).toggleClass('expanded');
  });
  $('.clone_wrapper .select-close').click(function() {
    $(this).closest('.clone_wrapper').remove();
  });
  $('.project-select-profession-btn + .proffesions-wrapper .apply-btn').click(function (e) {
    e.preventDefault();
    $('.project-select-profession-btn').removeClass('expanded');
  });
  $('.project-select-attachment-btn + .attachment-wrapper .apply-btn').click(function (e) {
    e.preventDefault();
    $('.project-select-attachment-btn').removeClass('expanded');
  });
  $('.new-category').click(function () {
    $(this).hide();
  });
  // $( ".project-category" ).change(function( event ) {
  //   var newProjectInput = $(this).parent().clone(true, true);
  //   console.log(newProjectInput);
  //   $($(this).parent().parent()).after(newProjectInput);
  //   $(newProjectInput).find('.jq-selectbox').removeClass('opened').removeClass('chanfed').removeClass('focused');
  //   $( this ).off( event );
  // });
  // $('.project-category option').one('click', function () {
  //   var newProjectInput = $(this).parent().parent();
  //   console.log(newProjectInput);
  //   $(this).parent().parent().insertAfter($(this).parent().parent())
  // })
});
