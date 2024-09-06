let obj1;
let obj2;
async function nam() {
    let a = await fetch('http://localhost:3000/getamazon');
    let b = await a.json();
    let c = await fetch('http://localhost:3000/getflipkart');
    let d = await c.json();
    // console.log(d)
    // console.log(b)
    obj1 = b;
    obj2 = d;
    console.table(obj1);
    console.table(obj2);
    document.getElementById('flip').innerHTML = "price on Flipkart : "  + obj2.Price;
    document.getElementById('ama').innerHTML = "price on Amazon : "  + obj1.price;
}
document.getElementById('find').addEventListener('click', nam);