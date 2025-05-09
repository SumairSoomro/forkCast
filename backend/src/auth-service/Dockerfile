FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Compile TypeScript
RUN npm run build

EXPOSE 4001
CMD ["npm", "start"]
