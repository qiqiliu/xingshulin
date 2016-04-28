/**
 * Created by grass on 16-4-18.
 */
$(document).ready(function () {
    get_active();
});
function get_active() {
    $(".block").hide();
    $(".home-page").mouseover(function () {
        $(".block").css("width", $(".home-page").width());
        $(".block").css("left", $(".home-page").offset().left);
        $(".block").slideDown();
    });
    $(".home-page").mouseout(function () {
        $(".block").hide();
    });
    $(".case").mouseover(function () {
        $(".block").css("width", $(".case").width());
        $(".block").css("left", $(".case").offset().left);
        $(".block").slideDown();
    });
    $(".case").mouseout(function () {
        $(".block").hide();
    });
    $(".bolg").mouseover(function () {
        $(".block").css("width", $(".bolg").width());
        $(".block").css("left", $(".bolg").offset().left);
        $(".block").slideDown();
    });
    $(".bolg").mouseout(function () {
        $(".block").hide();
    });
    $(".Technical").mouseover(function () {
        $(".block").css("width", $(".Technical").width());
        $(".block").css("left", $(".Technical").offset().left);
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

}