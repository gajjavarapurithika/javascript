class Mycalci
{
    constructor()
    {
        this.a=5
        this.b=3
    }
    dispvals=()=>
    {
        console.log("Value of a=",this.a," ","b=",this.b)
    }
}
mc=new Mycalci()
mc.dispvals()