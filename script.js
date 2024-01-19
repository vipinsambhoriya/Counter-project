const value = document.querySelector('#value');
const bt= document.querySelector('.btn-container');
const btns = document.querySelectorAll('.btn')
let count = 0;
btns.forEach(btn =>{
    btn.addEventListener('click',function(e){
        const s= e.target.classList;
        
        if(s.contains('incr')){
            count++;
          
        }else if(s.contains('decr')){
            count--;
            
        }else{
            count=0;
        }


        if(count>0){
            value.style.color='green';
          }

        if(count<0){
            value.style.color='red';
        }

        if(count===0){
            value.style.color= 'blue';
        }

        value.textContent = count;

    })
})
