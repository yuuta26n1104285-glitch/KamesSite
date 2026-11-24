let left = document.getElementById("left");
let right = document.getElementById("right");
let restartHtml = document.getElementById("restart-html");
let resultHtml = document.getElementById("result-html");
let judgeHtml = document.getElementById("judge-html");
let resultListHtml = document.getElementById("result-list-html"); 

let leftNam = 0;
let rightNam = 0;
function start(){
//左のカードを決める
leftNam = Math.floor(Math.random() * 13) + 1;;
//右のカードを決める
rightNam = Math.floor(Math.random() * 13) + 1;;
left.src = "card/1_" + leftNam + ".png";

}
function judge(isHigh){
    if(leftNam > rightNam){
        if(isHigh=== true){
            result = true;
        }else{
            result = false;
        }
    }else if(leftNam < rightNam){
        if(isHigh=== false){
            result = true;
        }else{
            result = false;
        }
    }else if(leftNam === rightNam){
        result = false;
    }
    right.src="card/2_" + rightNam + ".png";
    if(result === true){
        resultHtml.innerText = "あなたの勝ちです";
        const sound = new Audio('sakibare_01.mp3');
        sound.play();
    }else{
        resultHtml.innerText = "あなたの負けです";
        const audio = new Audio('nc246287.mp3');
        audio.play();
    }
}   
window.onload = start();
document.writeln(rightNam);