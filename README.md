# Server Side Rendering + Create-React-App + Apollo GraphQL Client
This is the starting kit for using [creat-react-app](https://github.com/facebookincubator/create-react-app) and [apollo-react](http://dev.apollodata.com/react/) together on server-side.

## How to use
Generaly you want to work with client side only so you can do this
```bash
cd client
yarn install
yarn start
```
For using benefits from SSR you should do this
```bash
# going back to the root of project
cd ../
yarn install
yarn build
yarn start
```
## Heroku
This package support deploying on [Heroku](https://www.heroku.com/), so just deploy it as described in [docs](https://devcenter.heroku.com/articles/git)
