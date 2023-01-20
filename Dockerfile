FROM node

WORKDIR /app

COPY package.json ./package.json
COPY index.mjs ./index.mjs
RUN npm i
EXPOSE 8080

CMD [ "npm",  "start" ]