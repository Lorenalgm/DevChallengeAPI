FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_URL=mongodb://mongodb/dev-challenge-dev
ENV PORT=3333

EXPOSE ${PORT}

ENTRYPOINT ["npm", "run", "dev"]
