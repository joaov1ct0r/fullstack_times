# Stage 1 Development
FROM node as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm cache clean --force && npm cache verify

RUN npm install

ADD . /usr/src/app

RUN npm run build

# Stage 2 Production
FROM nginx as production

EXPOSE 5173

COPY --from=development /usr/src/app/package*.json ./

COPY --from=development ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=development /app/dist /usr/share/nginx/html

RUN npm install --omit=dev --legacy-peer-deps
