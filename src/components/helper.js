
export const getTemp = (t) => {
    let tem = Math.round(t*(9/5)-459.67) + String.fromCharCode(176);
    return tem;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export const getTime = (t) => {
  var ts = new Date(t * 1000);
  var hours = ts.getHours() - 12;
  var minutes = addZero(ts.getMinutes());
  var time =  hours + ":" + minutes;
  return time;
}

export const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const meterToMile = meters => {
  return (meters * 0.0006213711).toFixed(1);
};

export const windDegree = degree => {
  const WindDirection = ['N','NNE','NE', 'ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];
  // if(degree >= 337 || degree <= 23) {
  //   return "wi wi-direction-up";
  // } else if (degree >= 24 || degree <= 68)
  //   return "wi wi-direction-up-right";
  // } else if (degree >= 69 || degree <= 112)
  //   return "wi wi-direction-right";
  // } else if (degree >= 113 || degree <= 158) {
  //   return "wi wi-direction-down-right";
  // } else if (degree >= 159 || degree <= 203) {
  //   return "wi wi-direction-down";
  // } else if (degree >= 204 || degree <= 248) {
  //   return "wi wi-direction-down-left";
  // }
  const value = Math.floor((degree / 22.5) + 0.5);
  return WindDirection[value % 16];
}
