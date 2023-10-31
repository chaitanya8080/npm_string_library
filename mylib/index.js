



    function capitalize(givenString){
      
        
            let firstChar = givenString.charAt(0);
        
            let upperfirstChar = firstChar.toUpperCase()
        
            let remainingString = givenString.slice(1)
        
            let finalString = upperfirstChar + remainingString ;
        
            console.log("Capatalized" , finalString);
        
            return finalString;
     }


      
      
    function toTitileCase(givenString){
      
          let words = givenString.split(' ')
      
          for(let i =0  ; i<words.length ; i++){
              words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase(givenString.slice(1))
          }
      
          let finalString = words.join(" ");
          return finalString;
      
      }
      
      
     function shorten(limit, ending,givenString){
      

      
          let stringtoShow = givenString.substring(0, limit);
      
          let finalString = stringtoShow + ending;
      
          console.log("finalstring", finalString);
      
          return finalString;
      }
      
      
      
    function  countWords(givenString){
     
      
          let words = givenString.split(" ");
      
          console.log("words :" ,words.length)
      
          return words.length
      }
      
      
      function readingTime(givenString){
    
          
          let words =givenString.countWords()
      
          let speed = words/200;
      
          console.log(" speed :", speed)
      
          return speed.floor();
      }
      
      
     function maskEmail(givenmail){
         
      
          let split1 = givenmail.split("@");
      
          let firstMask = split1[0].charAt(0) + "*".repeat(split1[0].length-1) 
      
          let split2 = split1[1].split(".");
      
          let secondMask = split2[0].charAt(0) + "*".repeat(split2[0].length-1)
      
          let result = firstMask + "@" + secondMask ;
         
           console.log(result)
          return result;
      
      }
      
      
      
       function  removeWhiteSpace(givenString){
      
          let result = "";
      
         
      
         let isPreviousCharspace = false;
      
          for(let i =0 ;i<givenString.length; i++){
                
              let char = givenString[i];
      
              if(char === " "){
                    if(!isPreviousCharspace){
                      result = result + " ";
                      isPreviousCharspace = true;
                    }
              }
              else{
                     result = result + char;
                     isPreviousCharspace = false;
              }
              
          }
        
          console.log(result);
      
          return result;
          
      }
      
      
      
     function strTonum(givenString){
          
       
      
          let stringArr = givenString.toLowerCase().split(" ")
          let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
      
          let result ="";
      
          for(let i =0;i<stringArr.length ; i++){
      
               
                 result = result + String(arr.indexOf(stringArr[i]));
          }
          result = Number(result)
      
          console.log(result +" "+typeof(result));
      
          return result;
      }
      
    
    function memeMaker(givenString) {
        
        let strArray = givenString.split(" ");
    
        let result = "";
    
        for (let i = 0; i < strArray.length; i++) {
            let modifiedWord = "";
            for (let j = 0; j < strArray[i].length; j++) {
                if (Math.random() < 0.5) {
                    modifiedWord += strArray[i][j].toUpperCase();
                } else {
                    modifiedWord += strArray[i][j].toLowerCase();
                }
            }
            result += modifiedWord + " ";
        }
    
        return result.trim();
    }



    function getDaysOfWeek(givenDay) {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        givenDay = givenDay.toLowerCase();
        const startingDayIndex = daysOfWeek.findIndex(day => day.toLowerCase() === givenDay);
      
        if (startingDayIndex === -1) {
          console.log("Invalid day provided.");
          return [];
        }
      
        const daysArray = [];
        for (let i = startingDayIndex; i < daysOfWeek.length; i++) {
          daysArray.push(daysOfWeek[i]);
        }
      
        for (let i = 0; i < startingDayIndex; i++) {
          daysArray.push(daysOfWeek[i]);
        }
      
        return daysArray;
      }



      function getMonthsOfYear(givenMonth) {
        const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        givenMonth = givenMonth.toLowerCase();
        const startingMonthIndex = monthsOfYear.findIndex(month => month.toLowerCase() === givenMonth);
      
        if (startingMonthIndex === -1) {
          console.log("Invalid month provided.");
          return [];
        }
      
        const monthsArray = [];
        for (let i = startingMonthIndex; i < monthsOfYear.length; i++) {
          monthsArray.push(monthsOfYear[i]);
        }
      
        for (let i = 0; i < startingMonthIndex; i++) {
          monthsArray.push(monthsOfYear[i]);
        }
      
        return monthsArray;
      }



      export default {capitalize,getMonthsOfYear,getDaysOfWeek,memeMaker,strTonum ,removeWhiteSpace , maskEmail,countWords,shorten,toTitileCase,readingTime};


