# Stage 1 Development
FROM node as development

WORKDIR /usr/src/app

COPY package*.json .

RUN npm cache clean --force && npm cache verify

RUN npm install

COPY . ./

RUN npm run build

# Stage 2 Production
FROM nginx as production

COPY --from=development /usr/src/app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=development /usr/src/app/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
