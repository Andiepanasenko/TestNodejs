# Test Nodejs in Docker

1.
```
git clone git@github.com:Andiepanasenko/TestNodejs.git
```
2.
```
npm install
```
3.Create .env file in project directory
```
HOST=<host>
PORT=<port>
LOGFILE=log.txt
```
4.Build the image
```
docker build -t nodejs-server
```
5.Run the container
```
docker run -d --name nodejs-server -v $(pwd):/usr/src/app -env .env -p 8082:8082 nodejs-server
```
6.Check the result 
```
nano log.txt
```
