window.onload = function() {
  addLines();
  setDelay();
};

function addLines() {
  for(let i = 0; i < 360 ;i+=30) {
    let div = document.createElement("div");
    div.className = "line";
    div.style.transform = `rotate(${i}deg)`;
    document.getElementById("clock").append(div);
  }
}

function setDelay() {
  let time = new Date();
  let sec = time.getSeconds()+1;
  let min = time.getMinutes()*60;
  let hour = time.getHours()*3600;

  document.getElementById("secondClocksHand").style.animationDelay = -sec+"s";
  document.getElementById("minuteClocksHand").style.animationDelay = -min+"s";
  document.getElementById("hourClocksHand").style.animationDelay = -(hour+min)+"s";
}
