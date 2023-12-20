import { publish } from "gh-pages";

publish(
  "build", // path to public directory
  {
    branch: "main",
    repo: "https://github.com/toastr-space/toastr-space.github.io",
    user: {
      name: "SatoshiSound",
      email: "satoshisound@protonmail.com",
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
