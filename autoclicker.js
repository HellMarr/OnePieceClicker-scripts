// ==UserScript==
// @name        [One Piece Clicker] Enhanced Auto Clicker
// @namespace   One Piece Clicker Scripts
// @match       https://www.onepiececlicker.com/
// @grant       none
// @version     1.1
// @downloadURL https://github.com/HellMarr/OnePieceClicker-scripts/blob/main/autoclicker.js
// @author      HellMarr
// @description AutoClick for OnePieceClicker.com, works both in dungeons and normal fight
// ==/UserScript==

function autoClick(){

  if(document.getElementsByClassName("ClickerStyles__CharacterImage-sc-1capclj-2 lihpOl").length>0){
      let clickZone = document.getElementsByClassName("ClickerStyles__CharacterImage-sc-1capclj-2 lihpOl")[0]
      clickZone.click();
  }
}

window.onload=function(){

  setInterval(autoClick,1);
}();
