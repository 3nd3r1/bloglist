FROM node:20 as build-stage

WORKDIR /usr/src/app

ARG REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}

COPY . .

RUN npm ci && npm run build

FROM nginx:1.21

EXPOSE 80

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
COPY --from=build-stage /usr/src/app/default.conf /etc/nginx/conf.d/default.conf


