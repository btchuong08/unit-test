FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Default command runs tests
CMD ["npm", "test"] 