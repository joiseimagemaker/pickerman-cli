const { program } = require('commander');
const { prompt } = require('inquirer');
const { picking, text } = require('./controllers/picker.controller');

program.version('0.0.1').description('A command tools for pickerman');

program.command('pick').action(async () => {
  const data = await prompt([
    {
      type: 'text',
      message: 'Set address zone',
      name: 'addressZone',
    },
    {
      type: 'text',
      message: 'What is the EAN code?',
      name: 'eanCode',
    },
    {
      type: 'number',
      message: 'Quantity products for scanner',
      name: 'quantity',
    },
    {
      type: 'text',
      message: 'Tote code, please',
      name: 'toteCode',
    },
  ]);
  picking(data);
});

program.command('text').action(async () => {
  const { value } = await prompt([
    {
      type: 'text',
      message: 'do you want send to device?',
      name: 'value',
    },
  ]);
  text(value);
});

program.command('finish').action(async () => {
  const { location, toteCode } = await prompt([
    {
      type: 'text',
      message: 'Totes into location is?',
      name: 'location',
    },
    {
      type: 'text',
      message: 'Tote code, please',
      name: 'toteCode',
    },
  ]);
  text(location);
  text(toteCode);
});

program.parse(process.argv);
