let grow = 0;
let btn = document.querySelector("button");
let inner = document.querySelector(".inner");
let h2 = document.querySelector("h2")

btn.addEventListener("click", function(){

    btn.style.pointerEvents = "none"

    let num = 50 + Math.floor(Math.random()*50)
    console.log(`Your file will be dowmloaded in ${num/10} seconds`)

   let int =  setInterval(()=>{
       grow++;
       inner.style.width = grow+"%"
       h2.innerHTML = grow+"%"
    }, num)


    setTimeout(()=>{
        clearInterval(int)
        btn.innerHTML = "Downloaded"
    }, num*100)
})




