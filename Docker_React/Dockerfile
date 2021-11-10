FROM node:latest
WORKDIR /app
COPY /Docker_React/package.json ./
RUN npm install
COPY /Docker_React ./
CMD ["npm", "start"]