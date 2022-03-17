// let someDiv = document.createElement('div');
// // - додати йому класи wrap, collapse, alpha, beta
// someDiv.classList.add('wrap');
// someDiv.classList.add('collapse');
// someDiv.classList.add('alpha');
// someDiv.classList.add('beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// someDiv.style.background = 'silver';
// someDiv.style.color = 'red';
// someDiv.style.fontSize = '36px';
// // - додати цей блок в body.
// document.body.appendChild(someDiv);
// // - клонувати його повністю, та додати клон в body.
// document.body.appendChild(someDiv.cloneNode(true))
let coursesAndDuratArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const courses of coursesAndDuratArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = `${courses.title} ${courses.monthDuration}`;
//     document.body.appendChild(divElement);
// }
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// if (let courses of coursesAndDuratArray){
//     let divElement= document.createElement('div');
//     let h1=document.createElement('h1');
//     h1.innerText=courses.title;
//
//     let p =document.createElement('p');
//     p.innerText=courses.monthDuration;
//
//     divElement.appendChild(h1);
//     divElement.appendChild(p);
//     document.body.appendChild(divElement);
// )
// }

// for (let courses of coursesAndDuratArray) {
//     let divElement = document.createElement('div');
//     let h1 = document.createElement('h1');
//     h1.innerText = courses.title;
//
//     let p = document.createElement('p');
//     p.innerText = courses.monthDuration;
//
//
//     divElement.appendChild(h1);
//     divElement.appendChild(p);
//     document.body.appendChild(divElement);
// }




