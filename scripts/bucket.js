// On clicking remove button the item should be removed from DOM as well as localstorage.
let coffeeData=JSON.parse(localStorage.getItem("coffee"))||[];
append(coffeeData)
totalAmount(coffeeData)
// let totalPrice=document.getElementById("total_amount");
// let sum=0;
// sum=sum+elem.price
// totalPrice.innerText=sum;



function totalAmount(data)
{
    let totalPrice=document.getElementById("total_amount");
    let sum=0;
    data.forEach(function(elem) {
        console.log(elem)
        sum=sum+(elem.price);
        totalPrice.innerText=sum;

    });
}

function append(Data)
{
    let container=document.getElementById("bucket");

    Data.forEach(function(elem,index) {
        let img=document.createElement("img");
        img.src=elem.image;
        img.style.width="100%";
        img.style.height="100%"

        let imgbox=document.createElement("div")
        imgbox.setAttribute("id","imgbox")
        imgbox.append(img)


        let p1=document.createElement("p");
        p1.innerText=elem.title;

        let title=document.createElement("div");
        title.setAttribute("id","title");
        title.append(p1);


        let p2=document.createElement("p");
        p2.innerText=elem.price;

        let price=document.createElement("div");
        price.setAttribute("id","price");
        price.append(p2);


        let button=document.createElement("button");
        button.setAttribute("id","remove_coffee")
        button.innerText="Remove";
        button.style.marginLeft="35%";
        button.addEventListener("click",function()
        {
            Remove(elem,index)
        })

        





        


        let div1=document.createElement("div");
        div1.setAttribute("id","div1");


        div1.append(imgbox,title,price,button)
        container.append(div1,)
    });

}

function Remove(elem,index)
{
    coffeeData.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(coffeeData));
    window.location.reload()
}