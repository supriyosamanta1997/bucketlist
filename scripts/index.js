// Add the coffee to local storage with key "coffee"

async function getData()
{
    let url="https://masai-mock-api.herokuapp.com/coffee/menu"
    let res= await fetch(url);
    let data=await res.json();
    console.log(data.menu.data);
    append(data.menu.data)
}

getData()

function append(Data)
{
    let container=document.getElementById("menu")

    Data.forEach(function(elem) {
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
        button.setAttribute("id","add_to_bucket")
        button.innerText="Add To Busket";
        button.style.marginLeft="30%";
        button.addEventListener("click",function()
        {
            addToBusket(elem)
        })

        



        let div1=document.createElement("div");
        div1.setAttribute("id","div1");


        div1.append(imgbox,title,price,button)
        container.append(div1)
    });
}

function addToBusket(data)
{
    console.log(data)
    coffeeData.push(data);
    localStorage.setItem("coffee",JSON.stringify(coffeeData));

    window.location.reload()
    
}
let coffeeData=JSON.parse(localStorage.getItem("coffee"))||[];

let coffeeCount=document.getElementById("coffee_count");
    coffeeCount.innerText=coffeeData.length
