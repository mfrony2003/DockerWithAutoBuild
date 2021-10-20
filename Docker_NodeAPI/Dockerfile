FROM node:latest
WORKDIR /app
COPY /Docker_NodeAPI/package.json ./
RUN npm install
COPY /Docker_NodeAPI ./
CMD ["npm","start"]

