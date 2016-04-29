/**
 * Created by grass on 16-4-18.
 */
$(document).ready(function () {
    get_active();
});
function get_active() {
    $(".block").hide();
    $(".home-page").mouseover(function () {
        $(".block").css("width", $(".home-page").width()-30);
        $(".block").css("left", $(".home-page").offset().left+15);
        $(".block").slideDown();
    });
    $(".home-page").mouseout(function () {
        $(".block").hide();
    });
    $(".case").mouseover(function () {
        $(".block").css("width", $(".case").width()-30);
        $(".block").css("left", $(".case").offset().left+15);
        $(".block").slideDown();
    });
    $(".case").mouseout(function () {
        $(".block").hide();
    });
    $(".bolg").mouseover(function () {
        $(".block").css("width", $(".bolg").width()-30);
        $(".block").css("left", $(".bolg").offset().left+15);
        $(".block").slideDown();
    });
    $(".bolg").mouseout(function () {
        $(".block").hide();
    });
    $(".Technical").mouseover(function () {
        $(".block").css("width", $(".Technical").width()-30);
        $(".block").css("left", $(".Technical").offset().left+15);
        $(".block").slideDown();
    });
    $(".Technical").mouseout(function () {
        $(".block").hide();
    });

    $(".sub").hide();
    $(".product").mouseover(function () {
        $(".sub").slideDown();
    });
    $(".product").mouseout(function () {
        $(".sub").hide();
    });
    $(".sub").mouseover(function () {
        $(".sub").show();
    });
    $(".sub").mouseout(function () {
        $(".sub").hide();
    });
    var a =document.body.clientWidth;   //获取屏幕宽度
    console.log(a);
}

