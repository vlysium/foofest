export function scheduleLogic(scheduleData, bandsData, type) {
  // index of array
  const i = 0;

  // get act
  const act = scheduleData.Midgard ? scheduleData.Midgard.mon[i].act : null;

  // get period
  const period = `${scheduleData.Midgard ? scheduleData.Midgard.mon[i].start : null} - ${
    scheduleData.Midgard ? scheduleData.Midgard.mon[i].end : null
  }`;

  // find the correct band in /bands
  const obj = bandsData.filter((item) => item.name === act)[0];

  console.log(act);
  //console.log(obj);

  switch (type) {
    case "bandname":
      return obj ? obj.name : null;

    case "genre":
      return obj ? obj.genre : null;

    case "period":
      return period;
  }
}
