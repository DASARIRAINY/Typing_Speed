const btn= document.getElementById("btn");
const text_area= document.getElementById("text");
const msg= document.getElementById("msg");

const msg_array=["JavaScript is the world's most popular programming language.JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.",
"CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.A style sheet consists of a list of rules. Each rule or rule-set consists of one or more selectors, and a declaration block.",
"HTML is the standard markup language for Web pages.With HTML you can create your own Website.HTML is easy to learn, You will enjoy it!"
];




let startTime,endTime;
const playGame =()=>{  
    const random_number= Math.floor(Math.random()*msg_array.length);
     msg.innerHTML=msg_array[random_number];
        startTime= new Date().getTime(); 
        
        btn.innerHTML="Done";
 
}

function wordcount(words1,words2)
 {
     let count=0;

     words1.forEach((element,index) => {
        
         if(element==words2[index])
         {
             count++;
         }
     });

     return count;
 }
const endplay= ()=>{
     
    const words= text_area.value;
    text_area.disabled=true;
    endTime= new Date().getTime();

    const total= Math.floor((endTime-startTime)/1000);
    
    let words2= msg.innerHTML;
    
    const words1= words.split(" ");

    const speed = Math.round((words1.length*60)/total);
     words2= words2.split(" ");
    const count= wordcount(words1,words2);

    const finalMsg= `You Typed at speed: ${speed} words per min. Typed ${count} out of ${words2.length}  correct words and  there are ${words1.length-count} errors and ${words2.length-words1.length} missing words `;
    
    msg.innerHTML=finalMsg;

    btn.innerHTML="Start";
 text_area.value="";
    
}
btn.addEventListener("click",function (){
  
   if(this.innerText==="Start")
   {
    text_area.disabled=false;
     playGame();
   } else if(this.innerText==="Done")
   {
      endplay();

   }
 

  
})