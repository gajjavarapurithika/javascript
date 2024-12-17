class Mycalci
{
    constructor(a,b)
    {
        this.a=a
        this.b=b
    }
    dispvals=()=>
    {
        console.log("Value of a=",this.a," ","b=",this.b)
    }
}
mc=new Mycalci(20,10)
mc.dispvals()