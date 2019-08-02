FROM node:12.7.0

COPY ./ /app
WORKDIR /app
RUN npm install &&  npm run build

EXPOSE 5000

CMD ["npx", "serve", "-s", "build"]