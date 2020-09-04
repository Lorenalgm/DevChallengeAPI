FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install -q

COPY . .

ENV MONGO_URL=mongodb://mongodb/devchallenge-dev
ENV PORT=3333

EXPOSE ${PORT}

ENTRYPOINT ["npm", "run", "dev"]
