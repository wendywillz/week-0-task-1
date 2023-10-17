function classifyTemperature(temp) {}

module.exports = classifyTemperature;
function classifyTemperature(temp) {
   if (temp <= 0) {
               return "Freezing";
         } else if (temp > 0 && temp <= 10){
              return "Cold";
           } else if( temp > 10 && temp <= 20){
              return "Mild";
           } else if( temp > 20 && temp <= 30){
               return "Warm";
           } else{
              return "Hot";
           }
}
module.exports = classifyTemperature;