// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//
// require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
(function ($) {

    $(window).on("load orientationchange resize", function() {
        var title_width = $('.folder-title').width();
        var title_width_all = $('.folder-top').width();
        var title_width_diff = title_width_all - title_width;

        if( title_width_all > title_width) {
            $('.folder-top--over').css('width', title_width_diff + 'px');
        }
    });

    $(function($){
        $('.tab').click(function(){
            $('.is-active').removeClass('is-active');
            $(this).addClass('is-active');
            $('.is-show').removeClass('is-show');
            const index = $(this).index();
            $('.folder-content__wrap').eq(index).addClass('is-show');
        });
    });

    // プロフィールメニュー表示
    $(function($){
        $('.nav-menu .user__icon').click(function() {
            $('.nav-menu__wrap').css('display', 'block');
        });
        
        $('.nav-menu__wrap .close-btn').click(function() {
            $('.nav-menu__wrap').css('display', 'none');
        });
    });

    // プロフィール内容変更
    $(function($){
        $('.name-modify-btn').click(function() {
            var index = $('.name-modify-btn').index(this);
            $('.user__name .name').eq(index).css('display', 'none');
            $('.user-name-modify').eq(index).css('display', 'block');
        });
        
        $('.user-modify-close-btn').click(function() {
            var index = $('.user-modify-close-btn').index(this);
            $('.user-name-modify').eq(index).css('display', 'none');
            $('.user__name .name').eq(index).css('display', 'block');
        });
    });

    // プロフィール画像のモーダルデザイン
    $(function(){
        $("input[type='file']").on('change',function(){
           var file = $(this).prop('files')[0];
           if(!($(".filename").length)){
             $(".form-area__item").append('<span class="filename"></span>');
           }
           $("#input-label").addClass('changed');
           $(".filename").html(file.name);
        });
    });

    // プロフィールモーダル
    $(function($){
        $('.img-modify-btn').click(function() {
            $('.img-modify-modal').css('display', 'block');
            $('.name-modify-btn').css('display', 'none');
        });
        
        $('.user-img-close-btn').click(function() {
            $('.img-modify-modal').css('display', 'none');
            $('.name-modify-btn').css('display', 'inline');
        });
    });
    
    // カテゴリー作成
    $(function($){
        $('.cat-create-btn').click(function() {
            $('.cat-create-modal').css('display', 'block');
        });

        $('.create-item.cat-create').click(function() {
            $('.cat-create-modal').css('display', 'block');
        });
        
        $('.close-btn').click(function() {
            $('.cat-create-modal').css('display', 'none');
        });
    });

    // カテゴリー編集
    $(function($){
        $('.modify-btn').click(function() {
            var index = $('.modify-btn').index(this);
            $('.delete-cat').eq(index).css('display', 'none');
            $('.cat-modify').eq(index).css('display', 'block');
        });
        
        $('.cat-modify-close-btn').click(function() {
            var index = $('.cat-modify-close-btn').index(this);
            $('.cat-modify').eq(index).css('display', 'none');
            $('.delete-cat').eq(index).css('display', 'block');
        });
    });
    
    // カテゴリー削除
    $(function($){
        $('.cat-delete-btn').click(function() {
            $('.cat-delete-modal').css('display', 'block');
        });

        $('.create-item.cat-modify').click(function() {
            $('.cat-delete-modal').css('display', 'block');
        });
        
        $('.close-btn').click(function() {
            $('.cat-delete-modal').css('display', 'none');
        });
    });
    
    // アイデア追加
    $(function($){
        $('.add-idea__btn').click(function() {
            $('.add-idea__form').css('display', 'block');
        });

        $('.create-item.idea-create').click(function() {
            $('.add-idea__form').css('display', 'block');
        });
        
        $('.close-btn').click(function() {
            $('.add-idea__form').css('display', 'none');
        });
    });

    // SP アイデア追加ボタン
    $(function($){
        $('.sp-idea-create-btn').on('click', function() {
            $('.sp-idea-create-btn').toggleClass('close-button');
            $('.sp-idea-create-wrap').toggleClass('show');
        });
    });
    
    // コメントモーダル
    $(function($){
        $('.item.comment-btn').click(function() {
            var index = $('.item.comment-btn').index(this);
    		$('.comment-modal').css('display','none');
    		$('.comment-modal').eq(index).css('display','block');
    		$('.item.comment-btn').removeClass('active');
    		$(this).addClass('active');
        });

        $('.folder-item__content').click(function() {
            var index = $('.folder-item__content').index(this);
    		$('.comment-modal').css('display','none');
    		$('.comment-modal').eq(index).css('display','block');
    		$('.folder-item__content').removeClass('active');
    		$(this).addClass('active');
        });

        
        $('.close-btn').click(function() {
            $('.comment-modal').css('display', 'none');
        });
    });
    
    // コメント編集
    $(function($){
        $('.comment-update-btn').click(function() {
            var index = $('.comment-update-btn').index(this);
            $('.current-user-comment-wrap').eq(index).css('display', 'none');
            $('.current-user-comment-update-wrap').eq(index).css('display', 'block');
        });
        
        $('.comment-update-close-btn').click(function() {
            var index = $('.comment-update-close-btn').index(this);
            $('.current-user-comment-update-wrap').eq(index).css('display', 'none');
            $('.current-user-comment-wrap').eq(index).css('display', 'block');
        });
    });


    
    // 編集モーダル出しわけ
    $(function($){
    	$('.item.modify-btn').click(function() {
    		var index = $('.item.modify-btn').index(this);
    		$('.folder-item__modify-modal').css('display','none');
    		$('.folder-item__modify-modal').eq(index).css('display','block');
    		$('.item.modify-btn').removeClass('active');
    		$(this).addClass('active');
    	});
    	
    	$('.close-btn').click(function() {
            $('.folder-item__modify-modal').css('display', 'none');
        });
    });
    
    
    $(window).on('load',function(){
        $('#category:first-child').addClass('is-active');
        $('.folder-content__wrap:first-child').addClass('is-show');
    });

    $(function($){
    	$('.alert').click(function(){
            $('.alert').fadeOut();
        });
    });
    
})(jQuery);





