function input(val){
    document.getElementById("input").value+=val
}

function clr(){
    console.log("clear")
    document.getElementById("input").value=""
}

function equals(){
        var text=document.getElementById("input").value
        var result=eval(text)
        document.getElementById("input").value=result
}