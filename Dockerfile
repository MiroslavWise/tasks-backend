# Определение базового образа
FROM node:18.16.0-alpine AS deps

# Создание и установка директории приложения
WORKDIR /usr/src/app

# Установка зависимостей
COPY package*.json ./
RUN npm install

# Копирование исходного кода приложения
COPY . .

# Сборка приложения
ARG TARGET
RUN npm run build

# Открытие порта для приложения NestJS
EXPOSE 5000

# Запуск приложения
CMD [ "npm", "run", "start:dev" ]