module.exports = function createDreamTeam(members) {
  if(members == undefined || members == null || typeof(members) == 'number'){
    return false;
}
  let nameTeam = [];
  for(let i = 0; i < members.length; i++){
    if(typeof(members[i]) != 'string' || typeof(members[i]) == 'object'){
      continue;
    }
    
    let trimMember = members[i].trim();//delete whitespaces
    nameTeam.push(trimMember[0].toLowerCase());
  } 

  nameTeam = nameTeam.sort();
  return nameTeam.join('').toUpperCase();
};