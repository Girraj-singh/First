

 
const getData=async(url)=>{
    try{
      var response=await fetch(`${url}`)
      var result=await response.json()  
      return(result)

    }catch(e){
        return(null)
    }

}

 export {getData}