FROM node:12
WORKDIR /usr/src/app


ENV HOST=$HOST \
    PORT=$PORT \
    LOGFILE=$LOGFILE

COPY package.json .
COPY server.js .

RUN npm install
RUN mkdir data


EXPOSE 8082
CMD [ "node", "server.js" ]
