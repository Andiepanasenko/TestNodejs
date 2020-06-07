FROM node:12
WORKDIR /usr/src/app


ENV HOST=$HOST
ENV PORT=$PORT
ENV LOGFILE=$LOGFILE

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8082
CMD [ "node", "server.js" ]
