let box = document.querySelector('.box');

let arr = `
8 0 0 2 0 0 0 4 6
0 0 7 9 0 0 0 0 0
1 0 0 0 0 0 5 0 0
0 0 0 5 0 0 0 3 2
4 0 8 0 0 0 7 0 1
3 2 0 0 0 7 0 0 0
0 0 6 0 0 0 0 0 9
0 0 0 0 0 3 2 0 0
2 8 0 0 0 6 0 0 3
`;


// console.log(arr[7])
// for(let i )


function newclass(i, j) {

    if (i < 3) {

        if (j < 3) {
            return 'z1';
        }
        else if (j < 6) {
            return 'z2';
        }
        else {
            return 'z3';
        }

    }
    else if (i < 6) {

        if (j < 3) {
            return 'z4';
        }
        else if (j < 6) {
            return 'z5';
        }
        else {
            return 'z6';
        }

    }
    else {

        if (j < 3) {
            return 'z7';
        }
        else if (j < 6) {
            return 'z8';
        }
        else {
            return 'z9';
        }

    }

}



function draw() {
    let outbag = '';
    let k = 1;
    let innertxt = '';
    let color = false;

    // console.log(arr[k + 15])
    for (let i = 0; i < 9; i++) {
        let bag = '';
        for (let j = 0; j < 9; j++) {

            if(arr[k] == 0) {
                innertxt = '';
                color = false;
            }
            else {
                innertxt = arr[k];
                color = true;
            }




            bag += `<div class="inner ${color? 'red': 'empty'} ${'x' + (i + 1)} ${'y' + (j + 1)} ${newclass(i, j)} ">${innertxt}</div>`;

            k = k + 2;

        }

        outbag += `<div class="outer">${bag}</div>`;
    }
    box.innerHTML = outbag;
}

draw();

function solver() {
    let k = 1;
    let empty = document.getElementsByClassName('empty');

    // for(let i = 0; i<empty.length; i++) {
    //     console.log(empty[i].innerHTML)
    // }

    // console.log(empty[0].classList)
    // empty[0].classList.forEach(e => {
    //     console.log(e)
    // })

    //*********hard code */

    // let x = document.getElementsByClassName(empty[0].classList[2]);
    // let y = document.getElementsByClassName(empty[0].classList[3]);
    // let z = document.getElementsByClassName(empty[0].classList[4]);
    
    // let arr = [...x, ...y, ...z];
    // ans = 1;
    // console.log(empty[0].innerText == '')
    // // console.log(arr)
    // for(let j = 0; j<arr.length ; j++) {
    //     if(arr[j].innerText == ans) {
    //         ans = ans + 1;
    //         j = 0; 
    //     }
    // }
    // empty[0].innerText = ans;
    

    // hard code end ****************//


   for(let i = 0; i<empty.length; i++) {

    let flag = true;


    let x = document.getElementsByClassName(empty[i].classList[2]);
    let y = document.getElementsByClassName(empty[i].classList[3]);
    let z = document.getElementsByClassName(empty[i].classList[4]);
    
    let arr = [...x, ...y, ...z];

    if(empty[i].innerText == '') {
        ans = 1;

    }
    else {
        ans = Number(empty[i].innerText);
    }


    // console.log(empty[i].innerText == '')
    // console.log(arr)
    for(let j = 0; j<arr.length ; j++) {
        if(arr[j].innerText == ans) {
            ans = ans + 1;
            if(ans == 10) {
                flag = false;
             empty[i].innerText = '';
                i = i - 2;
                break;
            }
            j = 0; 
        }


        
    }

    if(flag) {
        empty[i].innerText = ans;

    }



   
   

    // let ans = 1;
    // let arr = [];
    // let ele = empty[i].classList;

    // let xele = document.getElementsByClassName(ele[2]);
    // let yele = document.getElementsByClassName(ele[3]);
    // let zele = document.getElementsByClassName(ele[4]);

    // arr = [...xele, ...yele, ...zele]

    // arr.forEach( (e) => {
    //     if(ans == ele.innerText) {
    //         ans++;
    //     }
    //     else {

    //         empty[i].innerText = ans;

    //     }
    // })

    
   }





    // document.querySelectorAll('.x1').forEach((ele) => {
    //     console.log(ele)
    // })
    
}

document.addEventListener('DOMContentLoaded', solver)

// solver();