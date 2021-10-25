// document.querySelector('.vivobook14').addEventListener('click', function() {
//     let heading = document.querySelector('.v14').textContent;
//     let desc = document.querySelector('.v14desc').textContent;
//     let list = document.querySelector('.ulliv14').textContent
//     console.log(heading)
//     window.localStorage.setItem('v14heading', heading);
//     localStorage.setItem('v14desc', desc);
//     localStorage.setItem('v14list', list);
//     // window.location.href = "mycart.html";
//     console.log(window.localStorage.getItem('v14heading'));
// })


/* ----------------------------------------------------------------------------------------
Local Storage set items
---------------------------------------------------------------------------------------- */
let count = 0;

function buy(heading, desc, price) {

    carrier(heading, desc, price);

    window.localStorage.setItem('heading', heading);
    window.localStorage.setItem('desc', desc);
    window.localStorage.setItem('price', price);
    window.location.href = "mycart.html";
    console.log(heading, desc, price)
}

const arr = [];


function carrier(productheading, description, productprice) {

    let obj = {
        heading: productheading,
        desc: description,
        price: productprice
    };
    console.log(obj);
    // let dummy = [productheading, description, productprice, '***'];
    // let dummy = [obj];


    arr.push(obj);

    console.log(arr);

    // window.localStorage.setItem('array', JSON.stringify(arr));
    window.localStorage.setItem('array', JSON.stringify(arr));
    // window.localStorage.setItem('obb', oob);

    // console.log(productheading + " " + description + " " + productprice);
}