FROM node:lts-alpine3.16

WORKDIR /app

COPY package.json ./package.json
COPY index.mjs ./index.mjs
RUN npm i
EXPOSE 8080

CMD [ "npm",  "start" ]