/**
 * Created by grass on 16-4-26.
 */
$(document).ready(function () {
    get_active();
});
function get_active() {
    $(".banner").hide();
        $(".menu").click(function () {
            $(".banner").slideToggle();
            $("body").css("background","#777777");
        });
    $(".content").click(function () {
        $(".banner").hide();
        $("body").css("background","none");
    });
}