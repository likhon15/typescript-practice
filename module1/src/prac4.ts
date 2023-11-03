{
  // union
  
   type FrontendDev = 'faki' | 'jr';
   type FullStackDev = 'fr' | 'bk';
   const newDev : FrontendDev = 'jr';
 
   
   type User = {
     name : string;
     email : string;
     gender : "m" | "f";
     bloodGroup : "O+" | "a+" | "ab+"
   }
   const user1 : User = {
     name : 'likhon',
     email : "lkn6dec@gmail.com",
     gender : 'm',
     bloodGroup : "O+"
   }
 console.log(user1);



  type FrontDev = {
   skills : string[];
   rank1 : 'fr';
  }
  type BackendDev = {
   skills : string[];
   rank2 : 'bk';
  }

  type FullStack = FrontDev & BackendDev;

  const fullstackdeveloper : FullStack = {
    skills : ['html','css'],
    rank1: 'fr',
    rank2 : 'bk'
  }
  console.log(fullstackdeveloper);

  }