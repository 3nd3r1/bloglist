FROM node:20

WORKDIR /usr/src/app

EXPOSE 80
ENV PORT=80
ENV SECRET=secret

COPY . .

RUN npm ci

ENTRYPOINT ["npm", "run", "start"]
