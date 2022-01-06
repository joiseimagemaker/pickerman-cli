const { execSync } = require('child_process');

const adb = `${process.env.ANDROID_TOOLS_PATH}/adb`;

const sendCommand = (value) => {
  return execSync(
    `"${adb}" shell input text $(echo "${value}" | sed 's/ /\%s/g')`
  );
};

const text = (value) => {
  sendCommand(value);
  console.log(`Text "${value}" sended to device`);
};

const picking = async ({ addressZone, eanCode, quantity, toteCode }) => {
  sendCommand(addressZone);

  for (let index = 0; index < quantity; index++) {
    sendCommand(eanCode);
  }

  sendCommand(toteCode);
  console.log('Product picked');
};

module.exports = {
  picking,
  text,
};
