FROM node:20

WORKDIR /usr/src/app

EXPOSE 3000
ENV PORT=3000
ENV SECRET=secret

COPY . .

RUN npm ci

ENTRYPOINT ["npm", "run", "start"]
