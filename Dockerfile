FROM node  
WORKDIR /usr/src/app

COPY wait-for-it.sh . 
RUN chmod +x ./wait-for-it.sh

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["/bin/bash", "-c", "/usr/src/app/wait-for-it.sh postgres:5432 -- npm run dev"]