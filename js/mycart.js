/* ----------------------------------------------------------------------------------------
Local Storage get items and display
---------------------------------------------------------------------------------------- */
const myar = [];
window.onload = function() {

    var v14heading = window.localStorage.getItem('heading');
    let v14desc = localStorage.getItem('desc');
    var list = localStorage.getItem('price');

    // var array = localStorage.getItem('array');
    // console.log(array);
    // var result = array.toString().split('***');
    // console.log(result[0]);
    // console.log(v14heading)
    document.getElementById('heading').innerText = v14heading;
    document.getElementById('desc').innerText = v14desc;
    document.getElementById('price').innerText = list;
    // localStorage.removeItem('array');
    let array = localStorage.getItem('array');
    // let oob = localStorage.getItem('obb');
    // myar.push(oob);

    // for (var i = 0; i < array.length; i++) {
    //     document.getElementById('heading').innerText = array[i].heading;
    //     document.getElementById('desc').innerText = v14desc;
    //     document.getElementById('price').innerText = list;
    // }
    // var temp = JSON.stringify(array);
    // console.log(temp);
    // console.log(array);
    // console.log(myar);

    // console.log(Object.values(array));
    // var moe = obj["arr[0].name"];
}