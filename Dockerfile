FROM node:16.17.0-bullseye-slim
WORKDIR /usr/expressapp
COPY ./ ./
RUN npm install
EXPOSE 8080
CMD ["node","server.js"]