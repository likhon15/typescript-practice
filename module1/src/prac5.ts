{

  // ternary , optional chaining and nullish
 let age = 12;
  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({isAdult});

  // for null and undefined

  const isAuth = null;
  const res = isAuth ?? "guest"; // nullish operator only works for null and undefined
  console.log({res});

  const isAu = undefined;

  const res2 = isAu ? isAu : "guest";
  console.log({res2});
  
  type User = {
     name : string;
     address : {
       city : string;
       road : string;
       permanentAddress? : string;
     } 
  }

  const user : User = {
     name : "likhon",
     address : {
       city : "dhaka",
       road : "soronika"
     }
  }

  const per = user?.address?.permanentAddress ?? 'no permanent address';
  console.log({per});


}