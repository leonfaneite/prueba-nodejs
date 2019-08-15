FROM node:10

RUN mkdir -p /app
WORKDIR /app

ADD ./package.json .
ADD . .
RUN npm install --quiet

RUN npm install -g nodemon


EXPOSE 3000

CMD ["nodemon" , "index.js"]
