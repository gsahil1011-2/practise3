let add=document.querySelector('.add');
let ul=document.querySelector('ul');
let input=document.querySelector('input');
// inputFun -> make new todo list in which value is input value
let inputFun=()=>{
    if(input.value.length>0){
        let newList=document.createElement('li');
        newList.innerText=input.value;
        let delIcon=document.createElement('span');
        delIcon.innerHTML='<i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash del-icon"></i>';
        newList.appendChild(delIcon);
        input.value='';
        ul.appendChild(newList);
    }else{
        input.classList.toggle('invisible');
    }
}
// while click on add the inputFun is called
add.addEventListener('click', inputFun);

// when click in list several changes can be done there(strike through, edit list, delete list)
document.addEventListener('click', (event)=>{
    if(event.target.className ==='fa-solid fa-pen-to-square'){
        // when click on edit then input value insert in existing list and input value reset
        if(input.value.length>0){
            let editSpan=event.target.parentNode;
            let li=editSpan.parentNode;
            li.innerText=input.value;
            let icons=document.createElement('span');
            icons.innerHTML='<i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash del-icon"></i>';
            li.appendChild(icons);//add icons in list
            input.value='';//reset input value
        }
    }else if(event.target.className==='fa-solid fa-trash del-icon'){
        //when click on delete then existing list will be invisible
        let delSpan=event.target.parentNode;
        delSpan.parentNode.classList.add('invisible');
    }else if(event.target.tagName === 'LI'){
        //when click on list text then it become grey and strike through
        event.target.classList.toggle('crossOver');
    }
});