/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let basisTime = 800;
      let extraTime = 500;
      let res = 0;
      if (knowsProgramming === true){

        res = Math.ceil(basisTime / config[focus]);

      } else{

        res = Math.ceil((basisTime + extraTime) / config[focus]);
      
      }

      return res;
  };
  