/*Calculation formula 
          result = ln(MODERN_ACTIVITY / sampleActivity) / k;
          k = 0.693 / HALF_LIFE_PERIOD;
*/
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;
  if (typeof sampleActivity !== "string") {
    return false;
  }
  //create dot for check amount '.'
  let dot = 0;

  let activityNumber = [];
  for (let i = 0; i < sampleActivity.length; i++) {
    if (sampleActivity[i] === ".") {
      dot++;
    }
    if (dot > 1) {
      dot--;
      continue;
    }
    activityNumber.push(sampleActivity[i]);
  }
  activityNumber = Number(activityNumber.join(""));
  if (isNaN(activityNumber) || activityNumber <= 0 || activityNumber > 15) {
    return false;
  }
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / activityNumber) / k);
  return result;
};
