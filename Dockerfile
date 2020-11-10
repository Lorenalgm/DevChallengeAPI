FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install
# RUN npm install --only=production

COPY . .

ENV NODE_ENV=development
# ENV NODE_ENV=production

ENV MONGO_URL=mongodb://mongodb/devchallenge-${NODE_ENV}

EXPOSE ${PORT}

ENTRYPOINT ["npm", "run", "start:dev"]
# ENTRYPOINT ["npm", "start"]
