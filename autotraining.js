// ==UserScript==
// @name        [One Piece Clicker] Auto training
// @namespace   One Piece Clicker Scripts
// @match       https://www.onepiececlicker.com/
// @grant       none
// @version     1.0
// @author      HellMar
// @description auto training on XP and rayleigh boost / only when the training page is open
// ==/UserScript==

function addXPToSlot(slot){
    //console.log("We have a free XP slot, we click on it and we add a card")
    slot.click();
    document.getElementsByClassName("SelectUnitModal__ImageWrapper-sc-nimvit-0 gqyPyj")[Math.floor(Math.random() * 3)].click();
}

function addRayleighToSlot(slot){
    //console.log("We have a free rayleigh slot, we click on it and we add a card")
    slot.click();
    document.getElementsByClassName("SelectUnitModal__ImageWrapper-sc-nimvit-0 gqyPyj")[Math.floor(Math.random() * 3)].click();
}

function checkRemoval(){
    let isOnDiv = false;
    //console.log(document.getElementsByClassName("ModalStyles__ModalStyled-sc-16m5vlf-1 dqACda")[0])
    document.getElementsByClassName("ModalStyles__ModalStyled-sc-16m5vlf-1 dqACda")[0].addEventListener("mouseover", function() {isOnDiv=true;});
    //document.getElementsByClassName("ModalStyles__ModalStyled-sc-16m5vlf-1 dqACda")[0].addEventListener("mouseout", function() {isOnDiv=false;});
    //console.log(isOnDiv)
    let slots = document.getElementsByClassName("Training__InsideTrainingSpot-sc-1vqumdj-7 cYtrDi")
    for(let i=0;i<3;i++){
        if (slots[i].firstChild.textContent == "Free Slot"){
            addXPToSlot(slots[i])
        } else {
            let text = document.getElementsByClassName("Training__LevelText-sc-1vqumdj-8 feKjDm")
            if (text[i].textContent == "Lvl. 100"){
                //console.log("we have a lvl 100, we remove him")
                //removeFromSlot("xp",i)
                let crossbox = document.getElementsByClassName("Training__RemoveButton-sc-1vqumdj-5 gkNyhj")
                crossbox[i].style = "display:block"
                let rect = document.getElementsByClassName("Training__TrainingSpot-sc-1vqumdj-6 ipWzaJ")[i].getBoundingClientRect();
                //console.log(rect)
                document.elementFromPoint(rect.right, rect.top).click();
            }
        }
    }
    let boostbuttons = document.getElementsByClassName("Training__BoostButton-sc-1vqumdj-10 lcdhmW")
    if(boostbuttons.length>0){
        for(let i=0;i<boostbuttons.length;i++){
            boostbuttons[i].click();
        }
    }
    for(let i=3;i<6;i++){
        if (slots[i].firstChild.textContent == "Free Slot"){
            addRayleighToSlot(slots[i])
            return;
        }
    }
}

window.onload=function(){

    setInterval(checkRemoval,100);
}();
