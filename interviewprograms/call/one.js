var userDetails ={
    name: "Priya",
    age: 100,
    role: "Software Developer",
    printDetail : function(){
      console.log(this)// this representing userDetails whole object 
    }
  }
 
  
  var userDetails2 ={
    name: "Riya",
    age: 101,
    role: "Software Developer"
  }
  
  userDetails.printDetail.call(userDetails2);