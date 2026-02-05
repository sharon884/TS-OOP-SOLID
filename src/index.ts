function accept ( value : number | string ) : void {
  
    if ( typeof value == "number" ) {
        
         
          console.log( value.toFixed(2));
         

    }else {
      console.log(value.toUpperCase());
    }


};

accept("sharon")