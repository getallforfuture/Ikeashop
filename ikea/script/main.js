'use strict'
//day1
const btnBurger = document.querySelector('.btn-burger')
const catalog = document.querySelector('.catalog')
const btnClose = document.querySelector('.btn-close')
const subCatalog  = document.querySelector('.subcatalog')
const subcatalogHeader =document.querySelector('.subcatalog-header')
const btnReturn = document.querySelector('.btn-return')

const overlay = document.createElement('div')
overlay.classList.add('overlay')
document.body.insertAdjacentElement('beforeend',overlay)

const closeSubMenu = ()=>{
    subCatalog.classList.remove('subopen')
}

btnBurger.addEventListener('click',()=>{
    catalog.classList.add('open')
    overlay.classList.add('active')
})
btnClose.addEventListener('click',()=>{
    closeSubMenu()
    catalog.classList.remove('open')
    overlay.classList.remove('active')   
})
overlay.addEventListener('click',()=>{
    catalog.classList.remove('open')
    overlay.classList.remove('active')   
})
catalog.addEventListener('click',event=>{
    event.preventDefault();
    const itemList = event.target.closest('.catalog-list__item')
    if(itemList){
        subcatalogHeader.innerHTML=itemList.textContent
        subCatalog.classList.add('subopen')
    }
})
btnReturn.addEventListener('click',closeSubMenu) 