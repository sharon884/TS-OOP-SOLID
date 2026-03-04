const myPromise = new Promise<string>((resolve, reject) => {
     let success = true;

     if (success) {
          resolve("data received");
     };


     if (!success) {
          reject(" data not recevied ");
     }
});




myPromise.then((data) => {
     console.log(data);
}).catch((error) => {
     console.log(error);
}).finally(() => {
     console.log("operation finished");
});


