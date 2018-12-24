#!/usr/bin/env node
const chalk = require('chalk');
const yel = chalk.yellow.bind(chalk);
const red = chalk.red.bind(chalk);
const bol = chalk.bold.bind(chalk);
const whi = chalk.white.bind(chalk);

console.log(`

  ${yel(`***********************************************`)}
  ${yel(`**                                           **`)}
  ${yel(`**                                           **`)}
  ${yel(`**               ${whi(bol(`Ryan Stevens`))}                **`)}
  ${yel(`**                                           **`)}
  ${yel(`**                                           **`)}
  ${yel(`***********************************************`)}


  ${yel(`Website       `)}${whi(bol(`https://ryanstevens.me/`))}
  ${yel(`Twitter       `)}${whi(bol(`https://twitter.com/@ryan_stevens`))}
  ${yel(`Github        `)}${whi(bol(`https://github.com/ryanstevens`))}
  ${yel(`LinkedIn      `)}${whi(bol(`https://www.linkedin.com/in/ryanstevens/`))}

  ${yel(`Company        `)}${whi(bol(`DynaBlocks.io`))}
  ${yel(`Talk to me     `)}${whi(bol(`Twitter DM`))}


`);