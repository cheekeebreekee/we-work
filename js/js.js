// Widget Date
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "../widgets/datepicker" ], factory );
	} else {
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

	datepicker.regional.ru = {
		closeText: "Закрыть",
		prevText: "&larr;",
		nextText: "&rarr;",
		currentText: "Сегодня",
		monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
		"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
		monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
		"Июл","Авг","Сен","Окт","Ноя","Дек" ],
		dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
		dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
		dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
		weekHeader: "Нед",
		dateFormat: "dd.mm.yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
		datepicker.setDefaults( datepicker.regional.ru );

		return datepicker.regional.ru;

	} ) );


$(document).ready(function(){

	// Main CSS

	function mainCSS () {
		var introHeight = window.innerWidth > 640 ? $(window).innerWidth()*0.484375 : $(window).innerWidth()*1.23,
		introPad = window.innerWidth > 640 ? $(window).innerWidth()*0.47*0.5 : $(window).innerWidth()*0.28;
		$('#intro').length && $('#intro').css({
			'height': introHeight,
			'padding-top': introPad
		});
		if (window.innerWidth <= 640) {
			$('#map_markers .container').css({'height':$(window).innerWidth()*0.66});
		}
	};
	mainCSS();
	$(window).resize(mainCSS);

	$('.optional_tab').click(function(){
		$('.optional_list').fadeToggle(150);
	});

	// Burger King

	$('body').on('click tap', '#burger', function(){
		$('#mask').fadeIn(250);
		$('#menu').addClass('active');
		$('html').addClass('fancybox-lock');
	});

	$('body').on('click tap', '#mask', function(e){
		if ($(e.target).closest('#menu').length) return;
		$(this).add('.push_list').fadeOut(250);
		$('.push_to_shop').removeClass('.z_indexed');
		$('#menu').removeClass('active');
		$('html').removeClass('fancybox-lock');
	});

	// Trigger top form

	$('body').on('click tap', '#form_trigger', function(e){
		if ($(this).hasClass('opened')) {
			return true;
		} else {
			$(this).add('#search_top').addClass('opened');
			return false;
		}
	});

	// Close top form

	$('#form_closer').click(function(){
		$('#form_trigger, #search_top').removeClass('opened');
	});

	// mess-contact opts !!!SCROLL!!!
	if ($('.mess-contact').length) {
		$('.mess-contact').each(function(){
			$(this).mCustomScrollbar({
				theme:"light-thick",
				scrollbarPosition:"inside",
				scrollInertia: 100,
				mouseWheel:{ scrollAmount: 50 }
			});
		});
	};

	// chat-contact opts
	if ($('.chat-contact').length) {
		$('.chat-contact').each(function(){
			$(this).mCustomScrollbar({
				theme:"light-thick",
				scrollbarPosition:"inside",
				scrollInertia: 100,
				mouseWheel:{ scrollAmount: 50 }
			});
		});
	};

	// category_select opts
	if ($('.category_select').length) {
		$('.category_select').each(function(){
			$(this).mCustomScrollbar({
				theme:"light-thick",
				scrollbarPosition:"inside",
				scrollInertia: 100,
				mouseWheel:{ scrollAmount: 50 }
			});
		});
	};
	$('.m_popup_ul').mCustomScrollbar({
		theme:"light-thick",
		scrollbarPosition:"inside",
		scrollInertia: 100,
		mouseWheel:{ scrollAmount: 50 }
	});

	// Info mini windows opts

	if ($('.info_mini_window').length) {
		$('.info_mini_window').each(function(){
			$(this).mCustomScrollbar({
				theme:"light-thick",
				scrollbarPosition:"inside",
				scrollInertia: 100,
				mouseWheel:{ scrollAmount: 50 }
			});
		});
		$('.mini_info_nose').each(function(){
			$(this).appendTo($(this).closest('.info_mini_window'));
		});
	};

	if ($('.info_mini_wrap').length) {
		$('.info_mini_wrap').not('.small_wrap').each(function(){
			var left = window.innerWidth > 1000 ? $(this).closest('li').width()-$(this).width() : 20;
			$(this).css({'left':left/2+'px'});
		});
	};

	// Info mini windows actions

	$('#menu li').has('.info_mini_wrap').each(function(){
		$(this).click(function(e){
			$('#menu li').not($(this)).find('.info_mini_wrap').fadeOut(150);
			if ($(e.target).closest($(this).find('.info_mini_wrap')).length) return;
			$(this).find('.info_mini_wrap').fadeToggle(150);
		});
	});

	$(document).click(function(e){
		if ($(e.target).closest($('#menu li').has('.info_mini_wrap')).length) return;
		$('#menu li').find('.info_mini_wrap').fadeOut(150);
		e.stopPropagation();
	});

	// Top user menu

	$('#user_top').each(function(){
		var miniMenu = $(this).find('.user_opts');
		if (miniMenu.length) {
			$(this).hover(function(){
				$(miniMenu).stop(true).delay(350).fadeIn(100);
			}, function(){
				$(miniMenu).stop(true).delay(350).fadeOut(100);
			});
		}
	});

	// Team menu

	$('.team_item').has('.info_mini_wrap').each(function(){
		$(this).find('.ava').click(function(e){
			e.preventDefault();
			$(this).closest('.team').find('.info_mini_wrap').not($(this).siblings()).fadeOut(50);
			$(this).siblings('.info_mini_wrap').fadeToggle(50);
		});
	});

	$(document).click(function(e){
		if ($(e.target).closest($('.team_item').has('.info_mini_wrap')).length) return;
		$('.team_item').find('.info_mini_wrap').fadeOut(50);
		e.stopPropagation();
	});

	// Clamp

	(function (){
		$('.info_message_text').each(function(){
			var thisText = $(this).text(),
			removeText = thisText.substring(91, thisText.length-1),
			newText = thisText.replace(removeText, "...");
			$(this).text(newText);
		});
	}());

	// Tabs

	$('#home_tabs').tabs();
	$('#recent').tabs();
	$('#directory_tabs').tabs();
	$('#community_page').tabs();

	if (window.innerWidth > 640) {
		$('#search_tabs').tabs();
	}

	$('.gray_aside a[data-show]').each(function(){
		var dataShow = $(this).data('show'),
		thisTarget = $(this).closest('.container').find('aside[data-show="'+dataShow+'"]'),
		notATarget = $(this).closest('.container').find('aside[data-show]').not(thisTarget);
		$(this).click(function(e){
			e.preventDefault();
			$(this).closest('.c_tabs_triggers').find('li').not($(this).parent()).removeClass('active');
			$(this).parent().addClass('active');
			notATarget.removeClass('active');
			thisTarget.addClass('active');
		});
	});

	// Pop-up sign in

	$('#login').fancybox({
		padding: 0,
		type: 'html',
		content: $('#in'),
		scrolling: 'visible'
	});

	// Pop-up sign up

	$('#register').fancybox({
		padding: 0,
		type: 'html',
		content: $('#up'),
		scrolling: 'visible'
	});

	// Pop-up proposal

	$('.give_propose').fancybox({
		padding: 0,
		type: 'html',
		content: $('#proposal'),
		scrolling: 'visible'
	});

	$('.btn-message').fancybox({
		padding: 0,
		type: 'html',
		content: $('#message'),
		scrolling: 'visible'
	});

	// Deleted	message

	$('.deleted').each(function(){
		$(this).click(function(ev){
			ev.stopPropagation();
			$(this).closest('.single_message').slideUp(150);
		});
	});

	// Deleted	play row

	$('.play-deleted-ico').each(function(){
		$(this).click(function(ev){
			ev.stopPropagation();
			$(this).closest('.play_list_row').slideUp(150);
		});
	});

	// Deleted	article

	$('#community_page .deleted').each(function(){
		$(this).click(function(ev){
			ev.stopPropagation();
			$(this).closest('.my_article').slideUp(150);
		});
	});

	// Deleted	tabs

	$('.c_tabs_triggers .deleted').each(function(){
		$(this).click(function(ev){
			ev.stopPropagation();
			$(this).closest('li').slideUp(150);
		});
	});

	// Deleted	tabs

	$('.user_team .deleted').each(function(){
		$(this).click(function(ev){
			ev.stopPropagation();
			$(this).closest('.user_team').slideUp(150);
		});
	});

	//start playlist
	$('.play_pause').on('click', function() {
		$(this).toggleClass('playing');
		return false;
	});

	$('.play_checkbox').on('click', function() {
		$(this).toggleClass('completo');
		$(this).closest('.play_list_row').toggleClass('task_complete');
		return false;
	});
	//end playlist

	// DOWNLOAD files
	$('.show_files').click(function(){
		$('.hidden_table').not($(this)).removeClass('active');
		$(this).toggleClass('active');
		$('.hidden_table').not($(this).closest('.project').find('.hidden_table')).slideUp(350);
		$(this).closest('.project').find('.hidden_table').slideToggle(350);
	});

	// Pop-up messages

	$('.single_message').each(function(){
		$(this).click(function(){
			$.fancybox({
				padding: 0,
				type: 'html',
				content: $(this).find('.resize_messages'),
				scrolling: 'visible'
			});
		});
	});

	// POPOVER
	$('#myPopover').on('click', function(){
		$('.popover_text').toggleClass('active');
	});

	// See portfolio item

	$('a[data-fancybox-group]').fancybox({
		padding: 0,
		scrolling: 'visible',
		mouseWheel: false,
		arrows: false,
		nextEffect: 'fade',
		prevEffect: 'fade'
	});

	// More...

	$('.h6_see_more').fancybox({
		padding: 0,
		scrolling: 'visible',
		mouseWheel: false,
		arrows: false,
		nextEffect: 'fade',
		prevEffect: 'fade'
	});

	// New message

	$('.lets_trigger, .lets_community').fancybox({
		padding: 0,
		type: 'html',
		content: $('.add_new_message'),
		scrolling: 'visible'
	});

	// New message item

	$('.play_col_massage_link').fancybox({
		padding: 0,
		type: 'html',
		content: $('.resize_messages_item'),
		scrolling: 'visible'
	});

	$('.lets_review').fancybox({
		padding: 0,
		type: 'html',
		content: $('.add_new_review'),
		scrolling: 'visible'
	});

	// Edit task

	$('.play_col_edit_link').fancybox({
		padding: 0,
		type: 'html',
		content: $('.edit_task'),
		scrolling: 'visible'
	});

	// Ava link

	$('body').on('click', '.ava_link, .add_fav, .push_to_shop_btn', function(e){
		e.preventDefault();
		$(this).addClass('active');
	});

	// Tabs item mini-menu

	if (window.innerWidth > 640) {

		$(".tabs_drop_down").hover(function () {
			$(this).find('.drop_down_min').stop(true).delay(450).fadeIn(100);
		}, function () {
			$(this).find('.drop_down_min').stop(true).delay(450).fadeOut(100);
		});

	} else {
		$('body').on('tap', ".tabs_drop_down", function () {
			$(this).find('.drop_down_min').stop(true).delay(450).fadeToggle(100);
		});
	}

	// Transfer

	if ($('#transfer').length) {
		$(window).scroll(function(){
			if ($(this).scrollTop() >= $('#transfer').offset().top-$(window).innerHeight()/3 && $(this).scrollTop() <= $('#profy').offset().top-50) {
				$('#transfer').addClass('go_animate');
			} else {
				$('#transfer').removeClass('go_animate');
			}
		});
	}

	// Progress bars

	$('.progress_bar').each(function(){
		$(this).css({'width':$(this).data('progress')*1.5+'px'});
	});

	// Scroll top

	$('#scrolltop').click(function(){
		$('html, body').animate({'scrollTop':0}, 1250);
	});

	// Resizable

	if (window.innerWidth > 640) {
		$('.resizable').resizable();
	}

	// Figcaption ellipsis

	$('.ellipsis_text').each(function(){
		var thisText = $(this).text(),
		removeText = thisText.substring(14, thisText.length-5),
		newText = thisText.replace(removeText, "...");
		if (thisText.length > 22) {
			$(this).text(newText);
		}
	});

	// Select

	$('.search_choose').each(function(){
		var selectLi = $('.choose_select li');
		$(this).focus(function(){
			$(this).val("");
			$('.choose_select').addClass('active');
			selectLi.show();
		});
		$(this).keyup(function(){
			var inputValue = new RegExp($(this).val(), 'i');
			selectLi.each(function(){
				if (inputValue.test($(this).text())) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		});
	});

	$('.choose_select li').click(function(){
		$('.search_choose').attr('placeholder', "").val($(this).text());
		$('.choose_select').removeClass('active');
	});

	$(document).click(function(e){
		if ($(e.target).closest($('.choose_select_wrap')).length) return;
		$('.choose_select').removeClass('active');
		e.stopPropagation();
	});

	// FAQ

	$('.faq_line').click(function(){
		$('.faq_body').not($(this).parent()).removeClass('opened');
		$('.faq_list').not($(this).parent().find('.faq_list')).slideUp(250);
		$(this).parent().toggleClass('opened');
		$(this).parent().find('.faq_list').slideToggle(250);
	});

	$('.faq_list_item').each(function(){
		$(this).click(function(){
			$.fancybox({
				padding: 0,
				type: 'html',
				content: $(this).find('.faq_answer'),
				scrolling: 'visible'
			});
		});
	});

	// Filter

	$('.filter_trigger').click(function(){
		$(this).toggleClass('opened');
		$(this).siblings('.flex_hidden').slideToggle(250);
	});


	$('.flex_scroll_menu').each(function(){
		$(this).mCustomScrollbar({
			theme:"light-thick",
			scrollbarPosition:"inside",
			scrollInertia: 100,
			mouseWheel:{ scrollAmount: 50 }
		});
	});


	$('.flex_adding').has('.flex_scroll_menu_first').click(function(){
		$('.flex_adding').has('.flex_scroll_menu_first').not($(this)).removeClass('opened');
		$('.flex_scroll_menu_first').not($(this).children()).fadeOut(250);
		$(this).toggleClass('opened');
		$(this).find('.flex_scroll_menu_first').fadeToggle(250);
	});

	/* Footer */

	// function footerMove(){
	// 	if($('body').outerHeight()<$(window).innerHeight()) {
	// 		$('footer').css({'bottom':-($(window).innerHeight()-$('body').outerHeight())});
	// 	}
	// }
	// footerMove();
	// $(window).resize(footerMove);

	$('.fancy_prev').click(function(e){
		e.preventDefault();
		$.fancybox.prev();
	});

	$('.fancy_next').click(function(e){
		e.preventDefault();
		$.fancybox.next();
	});

	$('.fancy_close').click(function(e){
		e.preventDefault();
		$.fancybox.close();
	});

	$('.edit_name').click(function(){
		$(this).siblings('.comm_name_full').hide();
		$(this).siblings('.comm_name_change').show().val('').focus();
	});

	$('.comm_name_change').not('.h5 .comm_name_change, .page_head .comm_name_change').blur(function(){
		var commName = $(this).val() != "" ? $(this).val() : "Название сообщества";
		$(this).siblings('.comm_name_full').html(commName).show();
		$(this).hide();
	});

	$('.h5 .comm_name_change').blur(function(){
		var commName = $(this).val() != "" ? $(this).val() : "Название раздела";
		$(this).siblings('.comm_name_full').html(commName).show();
		$(this).hide();
	});

	$('.page_head .comm_name_change').blur(function(){
		var commName = $(this).val() != "" ? $(this).val() : "Название проекта";
		$(this).siblings('.comm_name_full').html(commName).show();
		$(this).hide();
	});

	$('.add_fav').click(function(e){
		e.preventDefault();
		$(this).addClass('active');
	});

	// Clone

	$('.clone_trigger').click(function () {
		$('.clone_wrapper').eq(0).clone().insertBefore($(this).parent()).find('input').val('');
		$('.clone').each(function(){
			var that = $(this);
			that.data('index', $(this).parent().index());
			that.siblings('.data_index').html($(this).data('index')+1+'.');
		});
		addRemover();
	});

	function addRemover() {
		$('.clone_wrapper .filter_arr_remove').click(function(){
			if ($(this).closest('.clone_wrapper').index() === 0)  {
				return;
			} else {
				$(this).closest('.clone_wrapper').remove();
				$('.clone').each(function(){
					var that = $(this);
					that.data('index', $(this).parent().index());
					that.siblings('.data_index').html($(this).data('index')+1+'.');
				});
			}
		});
	};

	addRemover();

	$('.select_styler').styler();
	$('.edit_select').styler();

	$('.show_hide').click(function(){
		$('.show_hide').not($(this)).removeClass('active');
		$(this).toggleClass('active');
		$('.show_hide_panel').not($(this).closest('.project').find('.show_hide_panel')).slideUp(350);
		$(this).closest('.project').find('.show_hide_panel').slideToggle(350);
	});


	function calcLineThrough () {
		$('.line_through').each(function(){
			var thisWidthStart = $(this).closest('.task_complete').find('.line_through_start').offset().left-5,
			thisWidthEnd = $(this).closest('.task_complete').find('.line_through_end').offset().left+$(this).closest('.task_complete').find('.line_through_end').outerWidth(),
			thisWidth = thisWidthEnd - thisWidthStart + 'px';
			$(this).css({'width':thisWidth});
		});
	};

	$('.show_hide_panel a[data-show]').each(function(){
		var dataShow = $(this).data('show'),
		thisTarget = $(this).closest('.show_hide_panel').find('div[data-show="'+dataShow+'"]'),
		notATarget = $(this).closest('.show_hide_panel').find('div[data-show]').not(thisTarget);
		$(this).click(function(e){
			e.preventDefault();
			$(this).closest('.show_hide_panel').find('a[data-show]').not($(this)).removeClass('active');
			$(this).addClass('active');
			notATarget.removeClass('active');
			thisTarget.addClass('active');
			if ($(this).index() === 2) calcLineThrough();
		});
	});

	$('option[data-color]').each(function(){
		var div = $('<div class="data_color"></div>'), dataColor = $(this).attr('data-color').toString();
		div.css('background',$(this).attr('data-color')).prependTo($(this)).clone().prependTo('li[data-color="'+dataColor+'"]');
	});

	$('.edit_select_large').find('.jq-selectbox__select-text').each(function(){
		var thisHtml = $(this).closest('.edit_select_large').find('li.sel.selected').html();
		$(this).html(thisHtml);
	});

	$('.edit_color_block').css('background',$('li[data-color].selected').data('color'));

	$('.edit_select_large select').change(function(){
		$('.edit_color_block').css('background',$('li[data-color].selected').data('color'));
		$('.indicate_text').css('background', $('li[data-color].selected').data('color'));
	});

	function indicateCSS () {

		if ($('.editing_page').length) {

			$('.indicate_top').css({
				'height':$('.editing_now .e_c_absolute').position().top+'px',
				'left':$('.editing_now .e_c_absolute').position().left+$('.editing_now .e_c_absolute').outerWidth()/2+'px'
			});
			$('.indicate_bottom').css({
				'height':$('.edit_color_bottom').offset().top-($('.editing_now .e_c_absolute').offset().top+$('.editing_now .e_c_absolute').outerHeight())+'px',
				'left':$('.editing_now .e_c_absolute').position().left+$('.editing_now .e_c_absolute').outerWidth()/2+'px'
			});
			$('.indicate_bottom_line').css({
				'width':$('.editing_now .e_c_absolute').outerWidth()+'px',
				'left':$('.editing_now .e_c_absolute').position().left+'px'
			});
			$('.indicate_right').css({
				'width':($('.edit_color_block').offset().left+$('.edit_color_block').outerWidth())-($('.editing_now .e_c_absolute').offset().left+$('.editing_now .e_c_absolute').outerWidth())+'px',
				'top':$('.editing_now .e_c_absolute').position().top+$('.editing_now .e_c_absolute').outerHeight()/2+'px'
			});
			$('.indicate_left').css({
				'width':$('.editing_now .e_c_absolute').position().left+'px',
				'top':$('.editing_now .e_c_absolute').position().top+$('.editing_now .e_c_absolute').outerHeight()/2+'px'
			});
			$('.indicate_text').css('background', $('li[data-color].selected').data('color'));
			$('.indicate_top .indicate_text').text($('.edit_select_top li.selected').text());
			$('.indicate_bottom .indicate_text').text($('.edit_select_bottom li.selected').text());
			$('.indicate_left .indicate_text').text($('.edit_select_left li.selected').text());
			$('.indicate_right .indicate_text').text($('.edit_select_right li.selected').text());

		}
	};

	function absoluteBlockCSS () {
		$('.editing_now .e_c_absolute').css({
			'top':$('.edit_select_top').find('li.selected').text(),
			'left':$('.edit_select_left').find('li.selected').text(),
			'bottom':$('.edit_select_bottom').find('li.selected').text(),
			'right':$('.edit_select_right').find('li.selected').text()
		});
	};

	absoluteBlockCSS();
	indicateCSS();

	$('.edit_select_small').change(function(){
		absoluteBlockCSS();
		indicateCSS();
	});

	if (window.innerWidth <= 640) {
		$('#menu').wrap('<div id="mask"></div>');
	};

	$('.filter_flex.flex_drop').each(function(){

		if (!$(this).find('.flex_scroll_menu').length) {
			$(this).addClass('noaftertriang');
		};

		var optElement = $('<span class="filter_arr_remove"><span class="f_a_inner"></span></span>');
		$(this).click(function(e){
			e.stopPropagation();
			$(this).clone().append(optElement).prependTo($(this).closest('.flex_hidden')).removeClass('flex_drop');
			$(this).closest('.flex_scroll_menu_first').fadeOut(250).closest('.opened').removeClass('opened');
		});

		$(this).find('.flex_scroll_menu').each(function(){
			$(this).css({'top':'-'+($(this).parent().index())*60+'px'});
		});
	});



	$('body').on('click', '.filter_box .filter_arr_remove', function(){
		$(this).parent().remove();
	});

	$('body').on('click', '.clear_filter', function(e){
		e.preventDefault();
		$(this).closest('.filter').find('.flex_hidden > .filter_flex').not('.flex_adding, .filter_trigger').not($(this)).remove();
	});

	$('.editing_now .e_c_absolute').draggable({ handle: ".move", containment: "parent" });
	$( ".editing_now .e_c_absolute" ).on( "dragstop", function( event, ui ) {
		indicateCSS();
	} );

	$('select.select_for_pay').each(function(){
		$(this).val() == 'hour' ? $(this).closest('form').removeClass('piece').addClass('hour') : $(this).closest('form').addClass('piece').removeClass('hour');
		$(this).change(function(){
			$(this).val() == 'hour' ? $(this).closest('form').removeClass('piece').addClass('hour') : $(this).closest('form').addClass('piece').removeClass('hour');
		});
	});

	$('body').on('click', '.info_mini_hide', function(e){
		$(this).closest('.info_mini_message').slideUp(150);
		if ($(this).closest('.info_mini_wrap').find('.info_mini_message:visible').length == 1){
			$(this).closest('.info_mini_wrap').addClass('rounded_corners');
		};
	});

	$('body').on('click', '.deleted', function(e){
		$(this).closest('.single_message').slideUp(150);
		// if ($(this).closest('.info_mini_wrap').find('.info_mini_message:visible').length == 1){
		// 	$(this).closest('.info_mini_wrap').addClass('rounded_corners');
		// };
	});

	$('.drop_sorting').length && $('.drop_sorting').styler();

	$('.c_tabs_add_cat').click(function(e){
		e.preventDefault();
		$(this).siblings('.c_tabs_adding_c').slideDown(150);
	});

	$('.push_cat').click(function(e){
		e.preventDefault();
		if ($(this).siblings('.bordered').val().length > 0) {
			var nuCat = $('<li><a href="">'+$(this).siblings('.bordered').val()+'</a></li>');
			nuCat.appendTo($(this).closest('.aside').find('.c_tabs_triggers'));
			$(this).siblings('.bordered').val('');
			$(this).parent().hide();
		} else {
			$(this).siblings('.bordered').val('').trigger('focus');
		}
	});

	$('.user_get_active').click(function(){
		$('.projects_all_user').hide();
		$('.projects_active_user').slideDown();
		$(this).addClass('nopoint');
	});

	$('#datepick').datepicker( $.datepicker.regional[ "ru" ] );
	$('.datepick').datepicker( $.datepicker.regional[ "ru" ] );


	$('body').on('mouseover', '.ui-datepicker-next, .ui-datepicker-prev', function(e){
		$(this).removeAttr('title');
	});

	$('#datepick, #datepick2').focus(function(e){
		e.preventDefault();
	});

	$('.toggle_ui').click(function(){
		if ($(this).hasClass('toggle_list')) {
			$('.communities_list').removeClass('unlist_view');
		} else {
			$('.communities_list').addClass('unlist_view');
		};
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	$('.oims_press').click(function(e){
		e.preventDefault();
		$('.oims_list').not($(this).siblings()).slideUp(300);
		$(this).siblings('.oims_list').fadeToggle(300);
	});

	$(document).click(function(e){
		if ($(e.target).closest('.oims_press').length) return;
		$('.oims_list').slideUp(300);
	});

	$('.pts_trigger').click(function(){
		$(this).siblings('.push_list').add('.mask_overlay').fadeToggle(350);
		$(this).closest('.push_to_shop').toggleClass('z_indexed');
	});

	$('.mask_overlay').click(function(){
		$(this).add('.push_list').fadeOut(350);
		$('.push_to_shop').removeClass('z_indexed');
	});

	$('.push_list').mCustomScrollbar({
		theme:"light-thick",
		scrollbarPosition:"outside",
		scrollInertia: 100,
		mouseWheel:{ scrollAmount: 50 }
	});

	$('.arrow').click(function(e){e.preventDefault()});

	$(document).on('tap', function(event) {
		if ($(event.target).closest('.tabs_drop_down').length) return;
		$('.drop_down_min').fadeOut();
		event.stopPropagation();
	});

	window.innerWidth <= 1140 && $('body').addClass('editing_page_on');

	// function footerMove () {
	// 	if ($(window).innerHeight() > $('body').outerHeight()) {
	// 		$('footer').css({'top':$(window).innerHeight()-$('body').outerHeight()});}
	// 	};

	// 	$(window).load(footerMove);
	// 	$(window).resize(footerMove);

	// Pop-up YES NO
	$(".window_yes_no").fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		padding : 0,
	});
		// Pop-up Successs Sent message
	$(".window_success_sent").fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		padding : 0,
	});

	// Input type number validation
	$('input[type="number"]').on('input', function() {
		if(!$(this).val().match(/^\d+$/)) {
			$(this).val('');
			$(this).parent().find('.number_alert').slideDown(250);
		} else {
			$(this).parent().find('.number_alert').hide();
		}
	});

	// OK Close click
	$('.accept').on('click', function(event) {
		event.preventDefault();
		$.fancybox.close();
	});
});

function initDoubleSelect($parentSelect, removeOld){
    var parentVal = $parentSelect.val(),
        $parentContainer = $parentSelect.parents('.jq-selectbox');

    if(removeOld){
        $parentContainer.siblings('.select_child').remove();
    }

    if(!parentVal){
        return;
    }

    var childVal = $parentSelect.data('child-val'),
        dataVar = $parentSelect.data('var-name'),
        childName = $parentSelect.data('child-name'),
        disabled = $parentSelect.attr('disabled') == 'disabled',
        childSelect = '';

    var bordered = $parentContainer.hasClass('bordered') ? 'bordered' : '';
    childSelect += '<select class="select_styler select_child ' + bordered + '" name="' + childName + '" ';
    childSelect += disabled ? ' disabled="disabled"' : '';
    childSelect += '>';
    childSelect += '<option value="">(не выбрано)</option>';
    if(typeof dataVar != 'undefined' && dataVar.length > 0 && typeof WW_DBL_SELECT == 'object'){
        if(typeof WW_DBL_SELECT[dataVar] == 'object'){
            if(typeof WW_DBL_SELECT[dataVar][parentVal] == 'object'){
                $.each(WW_DBL_SELECT[dataVar][parentVal], function(key, optionData){
                    childSelect += '<option value="' + optionData.VALUE + '"';
                    if(childVal == optionData.VALUE){
                        childSelect += ' selected="selected"';
                    }
                    childSelect += '>' + optionData.LABEL + '</option>';
                });
            }
        }
    }
    childSelect += '</select>';

    $parentContainer.after(childSelect);
    $parentContainer.siblings('.select_child').styler();
}

$('.select_parent').each(function(){
        initDoubleSelect($(this), false);
    });

    $('.select_parent').on('change', function(){
        initDoubleSelect($(this), true);
    });


// Autoresize messages
(function($){
    //pass in just the context as a $(obj) or a settings JS object
    $.fn.autogrow = function(opts) {
        var that = $(this).css({overflow: 'hidden', resize: 'none'}) //prevent scrollies
        , selector = that.selector
        , defaults = {
                context: $(document) //what to wire events to
                , animate: true //if you want the size change to animate
                , speed: 200 //speed of animation
                , fixMinHeight: true //if you don't want the box to shrink below its initial size
                , cloneClass: 'autogrowclone' //helper CSS class for clone if you need to add special rules
                , onInitialize: false //resizes the textareas when the plugin is initialized
            }
            ;
            opts = $.isPlainObject(opts) ? opts : {context: opts ? opts : $(document)};
            opts = $.extend({}, defaults, opts);
            that.each(function(i, elem){
            	var min, clone;
            	elem = $(elem);
            //if the element is "invisible", we get an incorrect height value
            //to get correct value, clone and append to the body.
            if (elem.is(':visible') || parseInt(elem.css('height'), 10) > 0) {
            	min = parseInt(elem.css('height'), 10) || elem.innerHeight();
            } else {
            	clone = elem.clone()
            	.addClass(opts.cloneClass)
            	.val(elem.val())
            	.css({
            		position: 'absolute'
            		, visibility: 'hidden'
            		, display: 'block'
            	})
            	;
            	$('body').append(clone);
            	min = clone.innerHeight();
            	clone.remove();
            }
            if (opts.fixMinHeight) {
                elem.data('autogrow-start-height', min); //set min height
            }
            elem.css('height', min);

            if (opts.onInitialize && elem.length) {
            	resize.call(elem[0]);
            }
        });
            opts.context
            .on('keyup paste', selector, resize)
            ;

            function resize (e){
            	var box = $(this)
            	, oldHeight = box.innerHeight()
            	, newHeight = this.scrollHeight
            	, minHeight = box.data('autogrow-start-height') || 0
            	, clone
            	;
            if (oldHeight < newHeight) { //user is typing
                this.scrollTop = 0; //try to reduce the top of the content hiding for a second
                opts.animate ? box.stop().animate({height: newHeight}, opts.speed) : box.innerHeight(newHeight);
            } else if (!e || e.which == 8 || e.which == 46 || (e.ctrlKey && e.which == 88)) { //user is deleting, backspacing, or cutting
                if (oldHeight > minHeight) { //shrink!
                    //this cloning part is not particularly necessary. however, it helps with animation
                    //since the only way to cleanly calculate where to shrink the box to is to incrementally
                    //reduce the height of the box until the $.innerHeight() and the scrollHeight differ.
                    //doing this on an exact clone to figure out the height first and then applying it to the
                    //actual box makes it look cleaner to the user
                    clone = box.clone()
                        //add clone class for extra css rules
                        .addClass(opts.cloneClass)
                        //make "invisible", remove height restriction potentially imposed by existing CSS
                        .css({position: 'absolute', zIndex:-10, height: ''})
                        //populate with content for consistent measuring
                        .val(box.val())
                        ;
                    box.after(clone); //append as close to the box as possible for best CSS matching for clone
                    do { //reduce height until they don't match
                    newHeight = clone[0].scrollHeight - 1;
                    clone.innerHeight(newHeight);
                } while (newHeight === clone[0].scrollHeight);
                    newHeight++; //adding one back eliminates a wiggle on deletion
                    clone.remove();
                    box.focus(); // Fix issue with Chrome losing focus from the textarea.

                    //if user selects all and deletes or holds down delete til beginning
                    //user could get here and shrink whole box
                    newHeight < minHeight && (newHeight = minHeight);
                    oldHeight > newHeight && opts.animate ? box.stop().animate({height: newHeight}, opts.speed) : box.innerHeight(newHeight);
                } else { //just set to the minHeight
                	box.innerHeight(minHeight);
                }
            }
        }
        return that;
    }
})(jQuery);
$('textarea').autogrow({onInitialize: true});


// Data for response tables
function responseTable(el) {
	 var headertext = [],
	headers = document.querySelectorAll("#"+el+" th"),
	tablerows = document.querySelectorAll("#"+el+" th"),
	tablebody = document.querySelector("#"+el+" tbody");

	for(var i = 0; i < headers.length; i++) {
	  var current = headers[i];
	  headertext.push(current.textContent.replace(/\r?\n|\r/,""));
	}
	for (var i = 0, row; row = tablebody.rows[i]; i++) {
	  for (var j = 0, col; col = row.cells[j]; j++) {
	    col.setAttribute("data-th", headertext[j]);
	  }
	}
};
$('#invoice').length && responseTable('invoice');
