const input=document.getElementById('input')
const ul=document.getElementById('list')
 




function addtask(){
     if(input.value===''){
        alert('please enter something')
     }
     else{
        const li=document.createElement('li')
       
        li.textContent=input.value.trim()
        ul.appendChild(li)
        span2=document.createElement('span')
        span=document.createElement('span')
        span.style.backgroundColor='red'
        span.style.borderRadius='4px'
        span.style.color='white'
        span.textContent='delete'
        span2.innerHTML='\u2705'
        span2.style.marginLeft='14.2rem'
        span.style.marginLeft='0.7rem'
        li.appendChild(span2)
        li.appendChild(span)
       
        input.value=''
        
        
         
       

     }
     
     ul.addEventListener('click',(e)=>{
    
     
    if (e.target.textContent === '\u2705') {
      e.target.parentElement.classList.toggle('checked')
    }

    else if(e.target.textContent==='delete'){
        e.target.parentElement.remove()
    }
    
})
}
document.getElementById('add task').addEventListener('click', addtask);
document.getElementById('cleartask').addEventListener('click',(e)=>{
    
    ul.innerHTML=''

})