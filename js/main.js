// main.js
window.addEventListener("load", ()=>{
// 주메뉴

const gnbMenu =  document.querySelectorAll(".gnb>ul>li");
const headerWrap = document.querySelector(".header_wrap");


for(let i=0; i<gnbMenu.length; i++){
    gnbMenu[i].addEventListener("mouseover", (e)=>{
        e.currentTarget.classList.add("on");
        let ht = e.currentTarget.children[1].offsetHeight;
        headerWrap.style.height = 70 + ht + "px";
    })

    gnbMenu[i].addEventListener("mouseout", (e)=>{
        e.currentTarget.classList.remove("on");
        headerWrap.style.height = "70px";
    })

    gnbMenu[i].children[0].addEventListener("focus", (e)=>{
        e.preventDefault();
        e.currentTarget.parentElement.classList.add("on");
        let ht = e.currentTarget.nextElementSibling.offsetHeight;
        headerWrap.style.height = 70 + ht + "px";
    })

    gnbMenu[i].addEventListener("blur", (e)=>{
        e.currentTarget.parentElement.classList.remove("on");
        headerWrap.style.height = "70px";
    })
}

// 검색박스

const srchWrap = document.querySelector(".srch_wrap");
const btnSrch = document.querySelector(".btn_srch")
const btnSrchClose = document.querySelector(".btn_srch_close")
btnSrch.addEventListener("click",(e)=>{
    e.preventDefault();
    srchWrap.classList.add("on");
})

btnSrchClose.addEventListener("click", (e) =>{
    e.preventDefault();
    srchWrap.classList.remove("on");
})

// 오토배너

const btnNext = document.querySelector(".btn_next");
const btnPrev = document.querySelector(".btn_prev");
const slide = document.querySelectorAll(".slide");


let bnnNum = 0;
const lastNum = document.querySelectorAll(".slide_wrap > li").length -1;

// next 버튼

btnNext.addEventListener("click", () =>{
    bnnNum++;
    if(bnnNum>lastNum){bnnNum=0;}
    slide.forEach((item)=>{
        item.classList.remove("active");
    })
    slide[bnnNum].classList.add("active");

    slideRoll.forEach((idx) =>{
        idx.classList.remove("on");
    })
    slideRoll[bnnNum].classList.add("on");
})
// prev버튼
btnPrev.addEventListener("click", () =>{
    bnnNum--;
    if(bnnNum<0){bnnNum=lastNum;}
    slide.forEach((item)=>{
        item.classList.remove("active");
    })
    slide[bnnNum].classList.add("active");

    slideRoll.forEach((idx) =>{
        idx.classList.remove("on");
    })
    slideRoll[bnnNum].classList.add("on");
})

// top버튼

const btnTop = document.querySelector(".btn_top");

window.addEventListener("scroll",()=>{
    const scroll = document.querySelector("html").scrollTop;
    console.log(scroll)
    if(scroll <= 0){
        btnTop.classList.remove("on","ab");
    }else if(scroll > 2700){
        btnTop.classList.add("ab");
        btnTop.classList.add("on");
    } else{
        btnTop.classList.remove("ad")
        btnTop.classList.add("on")
    }
})

// 롤링버튼클릭
const slideRoll = document.querySelectorAll(".slide_roll li");
for(let i=0; i < slideRoll.length; i++){
    slideRoll[i].addEventListener("click",(e)=>{
        e.preventDefault();
        activation(i,slide);
        activation(i,slideRoll);
    })
}
function activation(idx, list){
    for(let el of list){
        el.classList.remove("on", "active");
    }
    list[idx].classList.add("on", "active");
}


btnTop.addEventListener("click", (e)=>{
    e.preventDefault();
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth"
    });
})

// 오토배너
function nextBanner() {
    bnnNum++;
    if(bnnNum>lastNum){bnnNum=0;}
    slide.forEach((item)=>{
        item.classList.remove("active");
    })
    slide[bnnNum].classList.add("active");

    slideRoll.forEach((idx) =>{
        idx.classList.remove("on");
    })
    slideRoll[bnnNum].classList.add("on");
    autoBanner = setTimeout(nextBanner,5000) // 재귀함수
}

let autoBanner = setTimeout(nextBanner,5000) // 최초호출

// 배너 재생 멈춤 버튼
const btnPlay = document.querySelector(".btn_play");
let bl = true;

btnPlay.addEventListener("click", ()=>{
    btnPlay.classList.toggle("on")
    if(bl){
        console.log("hi")
       clearTimeout(autoBanner);
       bl = false;
    }else{
        autoBanner = setTimeout(nextBanner,5000)
        bl = true;
    }
})
})


