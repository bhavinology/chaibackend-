require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const gitdata = {
  login: "bhavinology",
  id: 49562726,
  node_id: "MDQ6VXNlcjQ5NTYyNzI2",
  avatar_url: "https://avatars.githubusercontent.com/u/49562726?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/bhavinology",
  html_url: "https://github.com/bhavinology",
  followers_url: "https://api.github.com/users/bhavinology/followers",
  following_url:
    "https://api.github.com/users/bhavinology/following{/other_user}",
  gists_url: "https://api.github.com/users/bhavinology/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/bhavinology/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/bhavinology/subscriptions",
  organizations_url: "https://api.github.com/users/bhavinology/orgs",
  repos_url: "https://api.github.com/users/bhavinology/repos",
  events_url: "https://api.github.com/users/bhavinology/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/bhavinology/received_events",
  type: "User",
  site_admin: false,
  name: "Bhavin Patel",
  company: null,
  blog: "",
  location: "Ahmedabad",
  email: null,
  hireable: true,
  bio: "Front-end Developer-React",
  twitter_username: "Bhavinology",
  public_repos: 18,
  public_gists: 0,
  followers: 2,
  following: 8,
  created_at: "2019-04-12T14:13:45Z",
  updated_at: "2024-08-01T08:55:45Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello Bhavin");
});

app.get("/github", (req, res) => {
  res.json(gitdata);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.Port}`);
});
