const circle = document.getElementById('circle');
const body = document.getElementById('body');
const button = document.getElementById('button');
const arrow = document.getElementById('arrow');
const view = document.getElementById('luckyaround');
const background = document.getElementById('background');
const text = document.getElementById('text');

const resultgift = document.getElementById('resultgift');
const _resultgift = document.getElementById('_resultgift');
//Sound
const spin = new Audio('../sound/sound_luckywheel.mp3');
// const win = new Audio('../sound/sound_winprized.mp3');

//GetUserID From host
let hostname = window.location.search;
let userid = parseInt(hostname.slice(hostname.indexOf('=')+1));

var height = window.innerHeight;
var width = window.innerWidth;

var r = 0;
var spacecircle = 100;
var spacebutton = 20; // tinh toan ti le cua button 
var deg = 0;
var degCurrent = 0;

//gift
const gift1 = '../items/voucher_12_2509_959.png';
const gift2 = '../items/voucher_1_2509_959.png';
const gift3 = '../items/voucher_2_2509_959.png';
const gift4 = '../items/voucher_3_2509_959.png';
const gift5 = '../items/voucher_4_2509_959.png';
const gift6 = '../items/voucher_5_2509_959.png';
const gift7 = '../items/voucher_6_2509_959.png';
const gift8 = '../items/voucher_7_2509_959.png';
const gift9 = '../items/voucher_8_2509_959.png';
const gift10 = '../items/voucher_9_2509_959.png';
const gift11 = '../items/voucher_10_2509_959.png';
const gift12 = '../items/voucher_11_2509_959.png';




//Get data online

//Get data firebase

//#region 

var resultBefore = 0;
if(height>width){
    r = width;
    view.style.marginTop = `${height/2 - r/2}px`;
    resultgift.style.marginTop = `${height/2 - r/2}px`;
    
} else {
    r = height;
    view.style.marginLeft = `${width/2 - r/1.8}px`;
    resultgift.style.marginLeft = `${width/2 - r/1.8}px`;
}

//#endregion

//Reponse
//#region 
circle.style.width = `${r}px`;
circle.style.height = `${r}px`;
button.style.width = `${r}px`;
button.style.height = `${r}px`;
arrow.style.width = `${r}px`;
arrow.style.height = `${r}px`;
background.style.width = `${width}px`;
background.style.height = `${height}px`;
background.style.top = '-1px';
background.style.left = '-1px';

_resultgift.style.top = '-1px';
_resultgift.style.left = '-1px';





//#endregion

//



//Random lucky


const ResultGift=(result)=>{
    //button.style.pointerEvents = 'none';
    switch(result){
        case 1:{
            console.log('Voucher 10k');
            deg = 3720;
            resultgift.setAttribute('src',gift1);
            circle.style.animationName = 'gift1';
            break;
        }
        case 2:{
            console.log('Voucher 20k');
            deg = 3630;
            resultgift.setAttribute('src',gift2);
            circle.style.animationName = 'gift2';
            break;
        }
        case 3:{
            console.log('Voucher 30k');
            deg = 3840;
            resultgift.setAttribute('src',gift3);
            circle.style.animationName = 'gift3';
            break;
        }
        case 4:{
            console.log('Voucher 50k');
            deg = 3600;
            resultgift.setAttribute('src',gift4);
            circle.style.animationName = 'gift4';
            break;
        }
        case 5:{
            console.log('bamidou');
            deg = 3750;
            resultgift.setAttribute('src',gift5);
            circle.style.animationName = 'gift5';
            break;
        }
        case 6:{
            console.log('bamifalo');
            deg = 3660;
            resultgift.setAttribute('src',gift6);
            circle.style.animationName = 'gift6';
            break;
        }
        case 7:{
            console.log('bamiro');
            deg = 3900;
            resultgift.setAttribute('src',gift7);
            circle.style.animationName = 'gift7';
            break;
        }
        case 8:{
            console.log('Non bao hiem');
            deg = 3810;
            resultgift.setAttribute('src',gift8);
            circle.style.animationName = 'gift8';
            break;
        }
        case 9:{
            console.log('Zeromeat');
            deg = 3930;
            //resultgift.setAttribute('src',gift9);
            circle.style.animationName = 'gift9';
            break;
        }
        case 10:{
            console.log('Bo duong');
            deg = 3690;
            resultgift.setAttribute('src',gift10);
            circle.style.animationName = 'gift10';
            break;
        }
        case 11:{
            console.log('Bo toi');
            deg = 3780;
            resultgift.setAttribute('src',gift11);
            circle.style.animationName = 'gift11';
            break;
        }
    }

}

const RandomLucky=(a,b)=>{
    var luckynumber = Math.floor(Math.random()*(b-a) +a);
    var temp = luckynumber;
    for(var i = 0;i<=temp;i++){
        luckynumber = Math.floor(Math.random()*(b-a) +a);
    }
    return luckynumber;
}

var random=()=>{
    
    result = Math.floor(Math.random() * 11); 
    result+=1;
    
    if(result == resultBefore)
    {
        return random();
    }else
    {
        resultBefore = result;
    }
    
    return result;
};

//Animation circle
 const actionRound =()=>{
     spin.play();
    circle.style.transform = `rotate(${0}deg)`;
    button.style.animationName = 'buttonin';
    var result = random();

    //circle.style.animationName = 'gift11';
    ResultGift(result);
}
const actionConfirm =()=>{
    //resultgift.setAttribute('src','');
    _resultgift.hidden = true;
   // circle.style.transform = `rotate(${deg}deg)`;
    //circle.style.animationName = 'none';
   // button.style.pointerEvents = 'all';
}
//Animation listen event
button.addEventListener('animationend',()=>{
    
    button.style.pointerEvents = 'all';
    spin.play();
    
    // Sau khi quay xong, transform sẽ trả vị trí về như cũ .
    // Setting lại vị trí ban đầu
    circle.style.transform = "rotate("+deg+"deg)";

})

circle.addEventListener('animationend', ()=>{
    resultgift.hidden = false;
    _resultgift.hidden = false;
})

window.addEventListener('resize', ()=>{
    console.log('Change');
    height = window.innerHeight;
    width = window.innerWidth;
    r = 0;
    spacecircle = 100;
    spacebutton = 20; // tinh toan ti le cua button 
    deg = 0;
    if(height>width){
        r = width;
        view.style.marginTop = `${height/2 - r/2}px`;
        
    } else {
        r = height;
        view.style.marginLeft = `${width/2 - r/1.8}px`;
    }
    circle.style.width = `${r}px`;
    circle.style.height = `${r}px`;
    button.style.width = `${r}px`;
    button.style.height = `${r}px`;
    arrow.style.width = `${r}px`;
    arrow.style.height = `${r}px`;
    background.style.width = `${width}px`;
    background.style.height = `${height}px`;
    background.style.top = '-1px';
    background.style.left = '-1px';
    // resultgift.style.top = '-1px';
    // resultgift.style.left = '-1px';
});