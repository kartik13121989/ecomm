FROM node:14.17.3
WORKDIR /usr/app/e-comm
COPY package.json ./
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]