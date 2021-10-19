FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm insall
COPY . ./
CMD ["npm", "start"]