// const myPromise = new Promise<string>((resolve, reject) => {
//      let success = true;

//      if (success) {
//           resolve("data received");
//      };


//      if (!success) {
//           reject(" data not recevied ");
//      }
// });




// myPromise.then((data) => {
//      console.log(data);
// }).catch((error) => {
//      console.log(error);
// }).finally(() => {
//      console.log("operation finished");
// });


const practise = new Promise <number> (( resolve, reject ) => {
     let success : boolean;

       setTimeout(()=> {
           console.log("hai");
            success = true;

             if ( success ) {
          resolve(4);
       }else {
           reject(5)
       }
       },1000);

      
});


practise.then((data) => {
      console.log("resolved",data);
}).catch((error) => {
      console.log("error",error);
}).finally(()=> {
      console.log("finshed");
});


