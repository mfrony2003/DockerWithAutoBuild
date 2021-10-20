FROM node:latest
WORKDIR /app
COPY /Docker_React/package.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]