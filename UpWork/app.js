let flag = true;
const text = document.getElementsByTagName('div');
const para = document.createElement('p');
let frag = document.createDocumentFragment();
para.id = 'para';
const stopValue = text[0].innerHTML.length;
frag.appendChild(para);
const choices = [];
let currSpan;
const span = document.createElement('span');
currSpan = span;
let n = 0;

for(let i = 0; i < stopValue-1 ; i++) {     
     if(text[0].innerHTML[i] == ':' && text[0].innerHTML[i-1] == ':' && Boolean(text[0].innerHTML[i+1]) == true && flag) {
          let choice1 = '', choice2 = '', choice3 = '';
          let x, y, z;
          for(x = i+1; text[0].innerHTML[x] != '/' ; x++) {
               choice1 += text[0].innerHTML[x];
               console.log(choice1);
          }
          for(y = x+1; text[0].innerHTML[y] != '/'; y++) {
               choice2 += text[0].innerHTML[y];
               console.log(choice2);
          }
          for(z = y+1; text[0].innerHTML[z] != ':'; z++) {
               choice3 += text[0].innerHTML[z];
               console.log(choice3);
          }
          i = z;
          const dropDown = document.createElement('select');
          dropDown.className = `choices ${i}`;
          choices.push(choice3);
          choices.push(choice2);
          choices.push(choice1);
          
          for (const choice of choices) {
               var option = document.createElement("option");
               option.value = choice;
               option.text = choice.charAt(0).toUpperCase() + choice.slice(1);
               dropDown.appendChild(option);
             }
          //    dropDown.style.display = 'none';
             choices.pop();
             choices.pop();
             choices.pop();
          
          frag.getElementById('para').appendChild(dropDown);
          flag = false;
     } else if(!flag) {
          i = i+1;
          flag = true;
     }     
     // if(text[0].innerHTML[i] != ':') {
          para.innerHTML += text[0].innerHTML[i];
          frag.appendChild(para);
     // } else if (span.innerHTML != '::') {
     //      currSpan.innerHTML += ':';
     // } else {
     //      currSpan.addEventListener('click', () => {
     //           dropDown.style.display = '';
     //      });          
     //      para.appendChild(currSpan);
     //      window['span' + n] = document.createElement('span');
     //      currSpan = window['span' + n];
     //      n++;
     // }
}
console.log(para.innerHTML);
document.body.innerText = '';
document.body.appendChild(frag);
