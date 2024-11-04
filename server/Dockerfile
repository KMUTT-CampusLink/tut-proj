FROM node:lts-alpine3.20
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm ci
# ci means clean-install

COPY . .
CMD [ "node", "server.js" ]