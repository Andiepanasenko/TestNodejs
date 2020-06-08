# Test Nodejs in Docker

1.Install NPM and Express Framework
```
mkdir TestNodejs
cd TestNodejs
npm init
npm install --save express
```
2.Create files the app and the environment
```
nano server.js  #add values
nano .env  #add values
```
3.Create  Dockerfila
```
nano Dockerfile #add values  
```
4.Clone GitRepo on our remote environment
```
git clone git@github.com:Andiepanasenko/TestNodejs.git
```
5.Build the image
```
docker build -t nodejs-server .
```
6.Run the container
```
docker run -d --name nodejs-server -v $(pwd)/data:/usr/src/app/data --env .env -p 8082:8082 nodejs-server
```
