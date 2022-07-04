function orderplaced()
{
    alert("Your order is accepted");
    let id;
    let sec=0;
    
    id=setInterval(function(){
        sec=sec+1
        if(sec==3)
        {
            alert("Your order is being Prepared")
        }
        if(sec==8)
        {
            alert("Your order is being packed")
        }
        if(sec==10)
        {
            alert("Your order is out for delivery ")
        }
        if(sec==12)
        {
            alert("Order delivered")
        }
        if(sec==13)
        {
            clearInterval(id)
        }
    },1000)
}