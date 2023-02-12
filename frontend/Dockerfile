# Stage 1 Development
FROM node:14 as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm cache clean --force && npm cache verify

RUN npm install --legacy-peer-deps

ADD . /usr/src/app

RUN npm run build

RUN npm i -g npm@latest

# Stage 2 Production
FROM nginx as production

EXPOSE 5173

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=development /usr/src/app/package*.json ./

COPY --from=development /usr/src/app/dist /usr/share/nginx/html

RUN npm install --omit=dev --legacy-peer-deps
