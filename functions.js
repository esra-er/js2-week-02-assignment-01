const findTheNumberOfOddNumbers = (pArray) => {
  const oddNumbers=[];
  pArray.map(number => {
    if (number%2==1) {
      oddNumbers.push(number)
    }
  })
  return oddNumbers.length
};

//----------------------------------------------------

const getIndexOfFalseItem = (pArray) => {
  let IndexOfFalse= pArray.indexOf(false)
  return IndexOfFalse
 };
 
//-----------------------------------------------------

const filterNumbers = (pArray) => {
  const numbers=[];
  pArray.map((value) => {
    if(typeof value == "number"){
      numbers.push(value)
    }
  })
   return numbers
  };

//----------------------------------------------------

const generateEmailAddress = (pOldMails) => {
  let newMails = [];
  pOldMails.map((value)=>{
    newMails.push(value.toLowerCase()+"@gmail.com")
  })
  return newMails
};

export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};
