FROM node:18-alpine3.17

ENV NODE_ENV development
ENV SKIP_ENV_VALIDATION false
ENV POSTGRES_CONNECTION postgres://ecomm:ecomm@localhost:5432/postgres
ENV MIGRATIONS_FOLDER drizzle

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
