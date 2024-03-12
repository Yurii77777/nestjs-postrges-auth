FROM node:20.9.0

LABEL version='1.0'
LABEL description='API backend server'

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
# CMD ["npm", "run", "start:prod"]
