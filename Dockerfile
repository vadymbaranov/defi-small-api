FROM node:14

WORKDIR /defi-small-api

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD ["npx", "ts-node", "src/server.ts"]
