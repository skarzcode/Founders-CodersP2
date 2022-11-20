const toggle = document.querySelectorAll(".Toggle");
const description = document.querySelectorAll(".projDescription");

toggle.forEach((btn => {
    btn.addEventListener("click", function(){
        if(btn.innerHTML == "Description" && btn.id == 0){
            description[0].classList.add("description");
            btn.innerHTML = "X";
        }
        else if(btn.innerHTML == "Description" && btn.id == 1){
            description[1].classList.add("description");
            btn.innerHTML = "X";
        } 
        else if(btn.innerHTML == "Description" && btn.id == 2){
            description[2].classList.add("description");
            btn.innerHTML = "X";
        } 
        else if(btn.innerHTML == "Description" && btn.id == 3){
            description[3].classList.add("description");
            btn.innerHTML = "X";
        }
        else if(btn.innerHTML == "Description" && btn.id == 4){
            description[4].classList.add("description");
            btn.innerHTML = "X";
        }
        else if(btn.innerHTML == "Description" && btn.id == 5){
            description[5].classList.add("description");
            btn.innerHTML = "X";
        }
        
        else{
            description.forEach((curr => {
                curr.classList.remove("description");
                toggle.forEach((currBtn => {
                    currBtn.innerHTML = "Description"
                })) 
            })) 
        }
    })
}))