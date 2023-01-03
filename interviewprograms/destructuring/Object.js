const obj = {
    name : "John",
    address : {
      country : "India",
      add : {
        city :{
            state:{
                district:"chittoor"
            }
        } 
      }
    }
  }
  const{address:{add:{city:{state:{district}}}}}=obj
  console.log(district) 