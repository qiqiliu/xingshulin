/**
 * Created by grass on 16-4-18.
 */
$(document).ready(function () {
    get_active();
});
function get_active() {
    $(".block").hide();
    $(".home-page").mouseover(function () {
        $(".block").css("width", $(".home-page").width() + 18);
        $(".block").css("margin-left", $(".home-page").offset().left - 753);
        $(".block").show();
    });
    $(".home-page").mouseout(function () {
        $(".block").hide();
    });
    $(".case").mouseover(function () {
        $(".block").css("width", $(".case").width() + 18);
        $(".block").css("margin-left", $(".case").offset().left - 753);
        $(".block").show();
    });
    $(".case").mouseout(function () {
        $(".block").hide();
    });
    $(".bolg").mouseover(function () {
        $(".block").css("width", $(".bolg").width() + 18);
        $(".block").css("margin-left", $(".bolg").offset().left - 753);
        $(".block").show();
    });
    $(".bolg").mouseout(function () {
        $(".block").hide();
    });
    $(".Technical").mouseover(function () {
        $(".block").css("width", $(".Technical").width() + 18);
        $(".block").css("margin-left", $(".Technical").offset().left - 753);
        $(".block").show();
    });
    $(".Technical").mouseout(function () {
        $(".block").hide();
    });

    $(".sub").hide();
    $(".product").mouseover(function () {
        $(".sub").show();
    });
    $(".sub").mouseout(function () {
        $(".sub").hide();
    });
}