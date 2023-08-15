import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'main',
    repo: 'https://github.com/toastr-space/keys-band.github.io.git',
    user: {
      name: 'ssakone',
      email: 'abdramanesakone1@gmail.com',
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);
