

const stars = document.querySelectorAll(".stars a");

stars.forEach((star,clickedidx) =>{
    star.addEventListener("click",()=>{
        stars.forEach((otherstar, otheridx) =>{
            if(otheridx <= clickedidx){
                otherstar.classList.add("active");
            }
        })
    })
})