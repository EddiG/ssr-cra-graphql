# Server Side Rendering + Create-React-App + Apollo GraphQL Client
This is the starting kit for using [creat-react-app](https://github.com/facebookincubator/create-react-app) and [apollo-react](http://dev.apollodata.com/react/) together on server-side.

## How to use
- `yarn install` for installing dependencies
### Backend preparing
Currently we use the endpoint created at [Codesandbox](https://codesandbox.io/s/m5j9784k8j). It goes down if it's not in use, that means you have to run it again by opening that [sandbox](https://m5j9784k8j.sse.codesandbox.io/) if you want to `start` the project. 
### Developing
- `yarn start:dev` for running the development server (without SSR support)
### Production
- `yarn build` for preparing a production version of the application
- `yarn start` for running the production server (with SSR support)
## Heroku
This package support deploying on [Heroku](https://www.heroku.com/), so just deploy it as described in [docs](https://devcenter.heroku.com/articles/git)
