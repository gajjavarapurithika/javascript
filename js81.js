class Icecream
{
    melt=()=>
    {
        console.log("It melts at room temperature")
    }
    billiant=(price,quantity)=>
    {
        price=price
        quantity=quantity
        return price*quantity
    }
}
vanilla=new Icecream()
vanilla.melt()
console.log("Bill Amount=",vanilla.billiant(20,10))