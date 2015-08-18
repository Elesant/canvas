/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */
import push from 'git-push';

const remote = {
  name: 'origin',
  url: 'https://github.com/Elesant/canvas',
  branch: 'gh-pages'
};

export default async () => {
  await require('./build')();
  await new Promise(resolve => push('./build', remote, resolve));
};
