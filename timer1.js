const alarmTime = process.argv.slice(2);
if (alarmTime.length > 0) {
  for (let time of alarmTime) {
    if (!isNaN(time) && time >= 0) {
      setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
  }
}
}