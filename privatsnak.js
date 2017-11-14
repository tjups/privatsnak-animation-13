//$(window).on("load", startStory);

$("#start_knap").on("click", startKnap);

function startKnap() {
    console.log("start knap klikket");
    $("#start_knap").off("click", startKnap);
    $("#start_knap").addClass("start_knap_klik");
    $("#start_knap").on("animationend", startStory);

}


function startStory() {
    console.log("startStory");
    $("#start_knap").off("animationend", startStory);
    $("#start_knap").removeClass("start_knap_klik");
    $("#start_knap").hide();


    $("#bamse_container").removeClass("bamse_container_start_pos");
    $("#kylling_container").removeClass("kylling_container_start_pos");

    $("#bamse_container").addClass("dans_bamse_container");
    $("#kylling_container").addClass("dans_kylling_container");

    $("#bamse_sprite").addClass("dans_bamse_sprite");
    $("#kylling_sprite").addClass("dans_kylling_sprite");


    $("#bamse_container").on("animationend", kys);



}

function kys() {
    console.log("kys");
    $("#bamse_container").off("animationend", kys);

    $("#hjerte_1").addClass("hjerte_blink_1");
    $("#hjerte_2").addClass("hjerte_blink_2");
    $("#hjerte_3").addClass("hjerte_blink_3");


    $("#bamse_container").removeClass("dans_bamse_container");
    $("#kylling_container").removeClass("dans_kylling_container");

    $("#bamse_sprite").removeClass("dans_bamse_sprite");
    $("#kylling_sprite").removeClass("dans_kylling_sprite");

    $("#bamse_container").addClass("kys_bamse_container");
    $("#kylling_container").addClass("kys_kylling_container");

    $("#bamse_sprite").addClass("kys_bamse_sprite");
    $("#kylling_sprite").addClass("kys_kylling_sprite");

    $("#bamse_container").on("animationend", flash);
}

function flash() {
    console.log("flash");
    $("#bamse_container").off("animationend", flash);

    setTimeout(flashDelay, 3000);

}

function flashDelay() {
    console.log("flashDelay");

    $("#flash").addClass("flash_animation");

    $("#scene").removeClass("bg1");
    $("#scene").addClass("bg2");

    $("#bamse_sprite").removeClass("kys_bamse_sprite");
    $("#kylling_sprite").removeClass("kys_kylling_sprite");
    $("#bamse_sprite").addClass("flash_bamse_sprite");
    $("#kylling_sprite").addClass("flash_kylling_sprite");

    $("#hjerte_1").removeClass("hjerte_blink_1");
    $("#hjerte_2").removeClass("hjerte_blink_2");
    $("#hjerte_3").removeClass("hjerte_blink_3");

    $("#flash").on("animationend", phoneAppear);

}

function phoneAppear() {
    console.log("phoneAppear")
    $("#flash").off("animationend", phoneAppear);




    $("#phone_container").removeClass("phone_container_start");
    $("#phone_sprite").removeClass("phone_sprite_start");

    $("#phone_container").addClass("phone_container_enter");
    $("#phone_sprite").addClass("phone_sprite_enter");

    $("#phone_container").on("animationend", prepareToShare);
}

function prepareToShare() {
    console.log("prepareToShare")
    $("#flash").off("animationend", prepareToShare);

    $("#phone_container").removeClass("phone_container_enter");
    $("#phone_sprite").removeClass("phone_sprite_enter");

    $("#phone_container").addClass("phone_container_type");
    $("#phone_sprite").addClass("phone_sprite_type");


}








//KED KNAP//

$(".ked_btn").on("click", kedBtnHandler);

function kedBtnHandler() {
    $("#bamse_container").removeClass("kys_bamse_container");
    $("#kylling_container").removeClass("kys_kylling_container");

    $("#bamse_sprite").removeClass("kys_bamse_sprite");
    $("#kylling_sprite").removeClass("kys_kylling_sprite");

    $("#bamse_container").addClass("ked_bamse_container");
    $("#kylling_container").addClass("ked_kylling_container");

    $("#bamse_sprite").addClass("ked_bamse_sprite");
    $("#kylling_sprite").addClass("ked_kylling_sprite");
}
