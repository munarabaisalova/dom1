let body = document.body
console.log(body);
let a = document.body.firstElementChild




const change = ()=>{
    
   
    document.getElementById("bd").style.backgroundImage="url(https://as1.ftcdn.net/v2/jpg/06/10/50/94/1000_F_610509440_Pj6ul1cdQDqanMEqsJjQzaS82LLRwv0J.jpg)"

   
} 
const change1 = ()=>{
    
   
    document.getElementById("bd").style.backgroundImage="url(https://img.freepik.com/premium-photo/sunset-over-the-sea-created-with-generative-ai-tools_732031-3451.jpg?w=996)"

   
} 
const change2 = ()=>{
    
   
    document.getElementById("bd").style.backgroundImage="url(https://img.freepik.com/free-photo/free-photo-flowers-blossom-floral-bouquet-decoration-colorful-beautiful-background-garden-flowers-plant-pattern_1340-26150.jpg?w=996&t=st=1692411562~exp=1692412162~hmac=44973b57d6484ec23202826a0640ca0b99b8ea9fb1c85292fbf769c4cc5a04fa)"

   
} 
const change3 = ()=>{
    
   
    document.getElementById("bd").style.backgroundImage="url(https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg?w=1380&t=st=1692411613~exp=1692412213~hmac=51341fc39b9c527e314d4c27967bddfca44588b5fad0426671204e19dbaf0e09)"

   
} 



//////////
const images1 =()=>{
    document.getElementById("bd").style.background="Chartreuse"

} 
const images2 =()=>{
    document.getElementById("bd").style.background="#FF0000"    
} 
const changeRed =()=>{
    document.getElementById("bd").style.background="#20B2AA"
}


setTimeout(()=>{
    change()
    
},2000)
setTimeout(()=>{
    change1()
    
},4000)
setTimeout(()=>{
    change2()
    
},6000)
setTimeout(()=>{
    change3()
},8000)


