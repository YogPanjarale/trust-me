import "./style.css";
import "./animation.css"
import {count as startCount} from "./countscript";
import makeText from "./makeText";
let MODE: "start" | "count" | "play" = "start";
const start = document.querySelector<HTMLDivElement>("#start")!;
const trustme = document.querySelector<HTMLDivElement>("#trustme")!;
const count = document.querySelector<HTMLDivElement>("#count")!;
const play = document.querySelector<HTMLDivElement>("#play")!;
const audio = document.querySelector<HTMLAudioElement>("#audio")!;
const start_colours = ["#383838", "#190936"];
const bg_intervel = setInterval(() => {
	start.style.backgroundColor =
		start_colours[Math.floor(Math.random() * start_colours.length)];
	// trustme.innerText= start.style.backgroundColor
}, 1500);
let hue = Math.random() * 360;
const hsl = (h: number, s: number, l: number) =>`hsl(${h},${s}%,${l}%)`
setInterval(() => {
  if (MODE === "play") {
    hue = (hue + 1) % 360;
    play.style.backgroundColor = hsl(hue, 100, 70);
  }
}, 100);
trustme.onclick = () => {
  clearInterval(bg_intervel);
	trustme.innerText = "trust me";
	MODE = "count";
	start.style.display = "none";
  startCount(count,11);
  setTimeout(()=>{
    MODE="play";
    makeText("YOG")
  },16000)
  audio.play();
};
document.onclick = () => {
  if (MODE=="count"||MODE=="play"){
    if (MODE=="play"&&audio.currentTime<=11){
      audio.currentTime=11
    }
    if (audio.paused){
      audio.play();
    }else if (MODE!="count"){
      audio.pause();
    }
  }
}
