
function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet > 2500){
    return 'No can do.'
  }
  else if (feet > 2000){
    return 'I will gladly take your thirty bucks.'
  }
  else if (feet <= 400){
    return 'This one is on me!'
  }
}
//confirming  else if condition works:
console.log(scuberGreetingForFeet(199));

function ternaryCheckCity(city){
  // Write your code here!
  return (city === 'NYC')?'Ok, sounds good.':'No go.'
}
//confirming the ternary expression works:
console.log(ternaryCheckCity('NYC'))
console.log(ternaryCheckCity('LA'))

function switchOnCharmFromTip(generous){
  // Write your code here!
  switch (generous){
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.' 
      break;
    case 'thanks for everything':
      return 'Bye.'
      break     
  }
}
//confirming switch works:
console.log(switchOnCharmFromTip('not as generous'))