FROM node:16-alpine

WORKDIR /

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start"]