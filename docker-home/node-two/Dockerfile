FROM node

RUN mkdir -p /home/node/app-2/node_modules && chown -R node:node /home/node/app-2

WORKDIR /home/node/app-2

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8031

CMD [ "node", "app.js" ]
