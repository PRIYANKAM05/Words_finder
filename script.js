function count(){
    let words=document.getElementById("input").value; 
    let arr=words.split(" ")
    let ans=arr.length
    let result = document.getElementById("result")
    result.innerHTML = ans + "Words"
}
