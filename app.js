let input = document.querySelector('#todo');
let btn = document.querySelector('#btn');
let list = docment.querySelector('#list');
let el = document.getElementsByTagName('li');

btn.addEventListener('click',() => {
    let txt = input.ariaValueMax;
    if(txt === ""); {
        alert('you must write something');

    }else{
        let li = document.createElement('li)');
        li.innerHTML = text;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }

})


list.addEventListener('click', e =>){
    if (e.target.tagName == 'Li');
        e.target.classList.toggle('checked');
}