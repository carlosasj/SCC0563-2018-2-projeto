FROM node:10

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json yarn.lock /usr/app/
RUN yarn install --production
COPY . /usr/app

CMD ["yarn", "start"]
