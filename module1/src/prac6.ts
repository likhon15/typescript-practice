{
  // nullable types

  const search = (value: string | null) => {
    if(value) {
      console.log("searching");
    }else{
      console.log("There is nothing to search");
    }
  }
 search(null);

 const getSpeed = (value : unknown) => {
    if(typeof value === "number") {
      const converted = (value * 1000) / 3600;
      console.log({converted});
    }else if(typeof value === "string") {
      const [result, unit] = value.split("");
      const convertedSpeed = (parseFloat(result)*1000) / 3600;
      console.log(convertedSpeed);
    }else{
     console.log("wrong input");
    }
 }

 getSpeed("1000 km^-1");

 // never type

 const throwError = (msg: string) : never => {
   throw new Error(msg);
 }
 throwError("lol");
}

