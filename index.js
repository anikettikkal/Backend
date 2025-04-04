const express = require('express')

require('dotenv').config()

const app = express()
const port = 3000

const githubData = {
  "login": "anikettikkal",
  "id": 113441327,
  "node_id": "U_kgDOBsL6Lw",
  "avatar_url": "https://avatars.githubusercontent.com/u/113441327?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/anikettikkal",
  "html_url": "https://github.com/anikettikkal",
  "followers_url": "https://api.github.com/users/anikettikkal/followers",
  "following_url": "https://api.github.com/users/anikettikkal/following{/other_user}",
  "gists_url": "https://api.github.com/users/anikettikkal/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/anikettikkal/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/anikettikkal/subscriptions",
  "organizations_url": "https://api.github.com/users/anikettikkal/orgs",
  "repos_url": "https://api.github.com/users/anikettikkal/repos",
  "events_url": "https://api.github.com/users/anikettikkal/events{/privacy}",
  "received_events_url": "https://api.github.com/users/anikettikkal/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Aniket Tikkal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "LiFe Is AlL aBoUt NeXt StEp 🖤🤍",
  "twitter_username": null,
  "public_repos": 47,
  "public_gists": 0,
  "followers": 21,
  "following": 34,
  "created_at": "2022-09-13T12:20:42Z",
  "updated_at": "2025-04-03T16:35:16Z"
}

app.get('/github', (req,res)=>{
  res.json(githubData)

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Hello Twitter!')
})

app.get('/login', (req, res) => {
  res.send("<h1>Please login at chai or code</h1>")
})

app.get('/youtube', (req, res) => {
  res.send("<h2>Welcome to Youtube</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})