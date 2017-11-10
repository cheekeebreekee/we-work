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
    var newProfession = $('.new-project-wrapper .profession-input').val();
    $('.new-project-wrapper .profession-input').val('');
    var proffessionBlock = '<div class="selected-professions-item"><span>' + newProfession + '</span><span class="selected-professions-close"></span></div>';
    if (newProfession.length) {
      $('.project-selected-professions').append(proffessionBlock);
    }
  });
  $('.project-select-attachment-btn + .attachment-wrapper .apply-btn').click(function (e) {
    e.preventDefault();
    $('.project-select-attachment-btn').removeClass('expanded');
  });
  $('.new-category').click(function () {
    $(this).hide();
  });
  // function initDoubleSelect($parentSelect, removeOld){
  //     var parentVal = $parentSelect.val(),
  //         $parentContainer = $parentSelect.parents('.jq-selectbox');
  //
  //     if(removeOld){
  //         $parentContainer.siblings('.select_child').remove();
  //     }
  //
  //     if(!parentVal){
  //         return;
  //     }
  //
  //     var childVal = $parentSelect.data('child-val'),
  //         dataVar = $parentSelect.data('var-name'),
  //         childName = $parentSelect.data('child-name'),
  //         disabled = $parentSelect.attr('disabled') == 'disabled',
  //         childSelect = '';
  //
  //     var bordered = $parentContainer.hasClass('bordered') ? 'bordered' : '';
  //     childSelect += '<select class="select_styler select_child ' + bordered + '" name="' + childName + '" ';
  //     childSelect += disabled ? ' disabled="disabled"' : '';
  //     childSelect += '>';
  //     childSelect += '<option value="">(не выбрано)</option>';
  //     if(typeof dataVar != 'undefined' && dataVar.length > 0 && typeof WW_DBL_SELECT == 'object'){
  //         if(typeof WW_DBL_SELECT[dataVar] == 'object'){
  //             if(typeof WW_DBL_SELECT[dataVar][parentVal] == 'object'){
  //                 $.each(WW_DBL_SELECT[dataVar][parentVal], function(key, optionData){
  //                     childSelect += '<option value="' + optionData.VALUE + '"';
  //                     if(childVal == optionData.VALUE){
  //                         childSelect += ' selected="selected"';
  //                     }
  //                     childSelect += '>' + optionData.LABEL + '</option>';
  //                 });
  //             }
  //         }
  //     }
  //     childSelect += '</select>';
  //
  //     $parentContainer.after(childSelect);
  //     $parentContainer.siblings('.select_child').styler();
  // }

  $('.select_parent').each(function(){
      initDoubleSelect($(this), false);
  });

  $('.select_parent').on('change', function(){
      initDoubleSelect($(this), true);
  });
  $('.btn_hint').on('click', function(){
		$(this).find($('.popover_text')).toggleClass('active');
	});
});
