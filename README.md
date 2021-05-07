<img src="https://github.com/juliaramosguedes/juliaramosguedes/blob/main/assets/banner-social-media.gif?raw=true" width="100%">
&nbsp;

# POC GraphQL Cache
![GitHub top language](https://img.shields.io/github/languages/top/juliaramosguedes/ironhack-prework-mars-rover?style=flat-square)
![Github last commit](https://img.shields.io/github/last-commit/juliaramosguedes/ironhack-prework-mars-rover?style=flat-square)

This project is a Proof of Concept of a custom cache of GraphQL.

I want an in-memory cache of GraphQL server with custom memory consume to prevent to consume all server's memory.

Actually Apollo Server has a server side caching, but without custom memory consume's configuration. So I've done this POC to create a GraphQL server with custom cache.

The custom cache gets the method, arguments and authorization from the request and creates a unique hash as a cache key. In the first call, the result is saved in cache. 

Every call made between the interval of the first call and the cache max age with the same combination method, arguments and authorization receives the cached result.

After the cache max age expires, the cache key is invalidated. In the next call, the cache is renovated.

To control the memory consume, you can config the cache's maximum keys. 

&nbsp;

## 🚀 Technologies

![Tech: JS](https://img.shields.io/badge/-Javascript-gray?logo=javascript&style=flat-square&logoColor=white)
[![Tech: GraphQL](https://img.shields.io/badge/-GraphQL-gray?logo=graphql&style=flat-square&logoColor=white)](https://www.npmjs.com/package/graphql)
[![Tech: Express](https://img.shields.io/badge/-Express-gray?logo=express.js&style=flat-square&logoColor=white)](https://www.npmjs.com/package/express)
[![Tech: Apollo Server Express](https://img.shields.io/badge/-ApolloServerExpress-gray?logo=express.js&style=flat-square&logoColor=white)](https://www.npmjs.com/package/apollo-server-express)
[![Tech: Lodash](https://img.shields.io/badge/-Lodash-gray?logo=express.js&style=flat-square&logoColor=white)](https://www.npmjs.com/package/lodash)
[![Tech: Node Cache](https://img.shields.io/badge/-NodeCache-gray?logo=express.js&style=flat-square&logoColor=white)](https://www.npmjs.com/package/node-cache)

&nbsp;

## 🏁 Getting started
```
# Clone this repository
$ git clone https://github.com/juliaramosguedes/poc-graphql-cache.git

# Go into the repository
$ cd poc-graphql-cache

# Install dependencies
$ yarn install

# Run server
$ yarn start
```
&nbsp;

## 🔑 How to use
Englobe the callback in resolvers that you want to cache with the cache function, passing the time in seconds of cache's max age in the second argument.

Example:
```
listBooks: cache((parent, data, { dataSources }) => {
      console.log('listBooks called');
      return dataSources.book.list();
    }, 360),
    
// PS: 360 is the cache's max age
```

Set the max keys' cache at cache/index file.
```
const myCache = new NodeCache({ maxKeys: 10, checkperiod: 60, stdTTL: 0 });
```

&nbsp;

## ✨ Give a star
If you like this project or if it helped you in any way, how about giving it a star?

&nbsp;

## 👩‍💻 Author
Julia Ramos

[www.juliaramos.dev](https://www.juliaramos.dev)

[![Email: juliaramos](https://img.shields.io/badge/-Email-gray?style=flat-square&logo=Minutemailer&logoColor=white)](mailto:hi@juliaramos.dev)
[![Github: /juliaramosguedes](https://img.shields.io/badge/-Github-gray?style=flat-square&logo=Github&logoColor=white&link=https://www.github.com/juliaramosguedes/)](https://www.github.com/juliaramosguedes/)
[![Linkedin: /juliaramosguedes](https://img.shields.io/badge/-Linkedin-gray?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/juliaramosguedes/)](https://www.linkedin.com/in/juliaramosguedes/)
[![Medium: @juliaramosguedes](https://img.shields.io/badge/-Medium-gray?style=flat-square&logo=Medium&logoColor=white&link=https://juliaramosguedes.medium.com/)](https://juliaramosguedes.medium.com/)
![](https://medium.com/@juliaramosguedes/followers)
