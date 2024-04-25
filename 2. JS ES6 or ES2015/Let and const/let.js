var b=0; // var : can be redeclare and updated 
if(b==0){
        
        let a = "Consistency"; // by using let we can not access variable a outside the block. 
        document.write("In a block"); 
// let has block level scope
}

document.write(a);