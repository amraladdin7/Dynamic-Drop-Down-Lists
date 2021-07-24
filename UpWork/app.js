let flag = true;
const text = document.getElementsByTagName('body');
const para = document.createElement('p');
para.id = 'para';
const stopValue = text[0].innerText.length;
document.body.appendChild(para);
let choices = [];
let currSpan;
const span = document.createElement('span');
currSpan = span;
let n = 0;

for (let i = 0; i < stopValue - 1; i++) {
     if (text[0].innerHTML[i] == ':' && text[0].innerHTML[i - 1] == ':' && Boolean(text[0].innerHTML[i + 1]) == true && flag) {
          let choice1 = '', choice2 = '', choice3 = '';
          let x, y, z;
          for (x = i + 1; text[0].innerHTML[x] != '/'; x++) {
               choice1 += text[0].innerHTML[x];
               // console.log(choice1);
          }
          for (y = x + 1; text[0].innerHTML[y] != '/'; y++) {
               choice2 += text[0].innerHTML[y];
               // console.log(choice2);
          }
          for (z = y + 1; text[0].innerHTML[z] != ':'; z++) {
               choice3 += text[0].innerHTML[z];
               // console.log(choice3);
          }
          i = z;
          const dropDown = document.createElement('select');
          dropDown.id = `select${n}`;
          dropDown.style.cursor = 'pointer';
          choices.push(choice3);
          choices.push(choice2);
          choices.push(choice1);
          choices = choices.sort(() => Math.random() - 0.5);

          let def = document.createElement('option');
          def.value = "select answer";
          def.text = "--Select Answer--";
          dropDown.appendChild(def);

          for (const choice of choices) {
               let option = document.createElement("option");
               option.value = choice;
               option.text = choice.charAt(0).toUpperCase() + choice.slice(1);
               dropDown.appendChild(option);
          }
          //    dropDown.style.display = 'none';
          choices.pop();
          choices.pop();
          choices.pop();

          document.getElementById('para').appendChild(dropDown);
          document.querySelector(`#select${n}`).addEventListener('change', () => {
               if (this.value == choice1) {
                    this.style.backgroundColor = '#F00';
               }
          });
          flag = false;
          n++;
     } else if (!flag) {
          i = i + 1;
          flag = true;
     }
     // if(text[0].innerHTML[i] != ':') {
     para.innerHTML += text[0].innerHTML[i];
     // debugger;

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
// console.log(para.innerHTML);
document.body.innerText = '';
document.body.appendChild(para);
