FROM node:18

WORKDIR /opt/app

COPY ./package.json .
RUN npm install

ENV PORT 3000

COPY ./index.mjs .
CMD ["node", "./index.mjs"]