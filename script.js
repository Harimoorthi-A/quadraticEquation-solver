function getValue(){
    var a=valueOfa.value
    var b=valueOfb.value
    var c=valueOfc.value

    var x=-b
    var discriminant=b**2-(4*a*c)
    var y=Math.sqrt(discriminant)
    var z=2*a

    var root1=(x+y)/z
    var root2=(x-y)/z

    if(discriminant<0){
        var rootValue=`<h5>The Roots are complex</h5>`
        solution.innerHTML=rootValue    
    }
    else{
        var rootValue=`<h5>The Roots are ${root1} and ${root2}</h5>`
        solution.innerHTML=rootValue    
    }
}


function reset(){
    valueOfa.value=""
    valueOfb.value=""
    valueOfc.value=""
    solution.innerHTML=""
}