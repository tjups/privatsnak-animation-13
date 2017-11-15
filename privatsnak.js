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
    console.log("phoneAppear");
    $("#flash").off("animationend", phoneAppear);




    $("#phone_container").removeClass("phone_container_start");
    $("#phone_sprite").removeClass("phone_sprite_start");

    $("#phone_container").addClass("phone_container_enter");
    $("#phone_sprite").addClass("phone_sprite_enter");

    $("#phone_container").on("animationend", prepareToShare);
}

function prepareToShare() {
    console.log("prepareToShare");
    $("#phone_container").off("animationend", prepareToShare);

    $("#phone_container").removeClass("phone_container_enter");
    $("#phone_sprite").removeClass("phone_sprite_enter");

    $("#phone_container").addClass("phone_container_type");
    $("#phone_sprite").addClass("phone_sprite_type");

    $("#phone_container").on("animationend", promptAppear);



}

function promptAppear() {
    console.log("promptAppear");
    $("#phone_container").off("animationend", promptAppear);

    $("#prompt").addClass("prompt_appear");
    $("#ja").addClass("prompt_appear");
    $("#nej").addClass("prompt_appear");

}

$("#ja").on("click", ked);
$("#nej").on("click", glad);


function ked() {
    console.log("ked");

    $("#ja").off("click", ked);

    $("#prompt").addClass("prompt_disappear");
    $("#ja").addClass("prompt_disappear");
    $("#nej").addClass("prompt_disappear");

    $("#phone_container").removeClass("phone_container_type");
    $("#phone_container").addClass("phone_container_exit");


    $("#bamse_container").removeClass("kys_bamse_container");
    $("#kylling_container").removeClass("kys_kylling_container");



    $("#bamse_container").addClass("ked_bamse_container");
    $("#kylling_container").addClass("ked_kylling_container");



    $("#scene").removeClass("bg2");
    $("#scene").addClass("bg3");

    $("#phone_container").on("animationend", kedDelay1);


}

function kedDelay1() {
    console.log("kedDelay1");
    $("#phone_container").off("animationend", kedDelay1);



    setTimeout(kedDelay2, 500);
}

function kedDelay2() {
    console.log("kedDelay2");
    $("#insta1").addClass("ikon_anim_1");

    setTimeout(kedDelay3, 500);
}

function kedDelay3() {
    console.log("kedDelay3");

    $("#bamse_sprite").removeClass("flash_bamse_sprite");
    $("#kylling_sprite").removeClass("flash_kylling_sprite");

    $("#bamse_sprite").addClass("ked_bamse_sprite");
    $("#kylling_sprite").addClass("ked_kylling_sprite");

    $("#insta2").addClass("ikon_anim_2");
    setTimeout(kedDelay4, 500);
}

function kedDelay4() {
    console.log("kedDelay4");
    $("#insta3").addClass("ikon_anim_3");;
    setTimeout(kedDelay5, 500);
}

function kedDelay5() {
    console.log("kedDelay5");
    $("#snap2").addClass("ikon_anim_2")

    setTimeout(kedDelay6, 500);
}

function kedDelay6() {
    console.log("kedDelay6");
    $("#snap1").addClass("ikon_anim_1");

    setTimeout(kedDelay7, 500);
}

function kedDelay7() {
    console.log("kedDelay7");
    $("#face3").addClass("ikon_anim_3");

    setTimeout(kedDelay8, 500);
}

function kedDelay8() {
    console.log("kedDelay8");
    $("#face1").addClass("ikon_anim_1");

    setTimeout(kedDelay9, 500);
}

function kedDelay9() {
    console.log("kedDelay9");


    $("#snap3").addClass("ikon_anim_3");
    setTimeout(kedDelay10, 500);
}

function kedDelay10() {
    console.log("kedDelay10");

    $("#face2").addClass("ikon_anim_2");
    setTimeout(nederen, 500);

}

function nederen() {
    console.log("nederen");
    $("#nederen").addClass("nederen_appear");
    setTimeout(payoff1, 5000);
}

function payoff1() {
    console.log("payoff1");
    $("#nederen").removeClass("nederen_appear");
    $("#payoff1").addClass("nederen_appear");

}


function glad() {
    console.log("glad");
    $("#nej").off("click", glad);

    $("#prompt").addClass("prompt_disappear");
    $("#ja").addClass("prompt_disappear");
    $("#nej").addClass("prompt_disappear");

    $("#phone_container").removeClass("phone_container_type");
    $("#phone_container").addClass("phone_container_exit");

    $("#bamse_sprite").addClass("dans_bamse_sprite");
    $("#kylling_sprite").addClass("dans_kylling_sprite");

    $("#scene").removeClass("bg2");
    $("#scene").addClass("bg1");

    setTimeout(payoff2, 5000);

}

function payoff2() {
    console.log("payoff2");

    $("#payoff2").addClass("nederen_appear");

}
