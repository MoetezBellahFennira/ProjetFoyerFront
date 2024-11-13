## Build Stage
FROM node:18.12 AS build

WORKDIR /app

## Copier les fichiers package.json et package-lock.json
COPY package*.json /app/

## Installer Angular CLI globalement
RUN npm install -g @angular/cli@latest

## Installer les dépendances
RUN npm install --legacy-peer-deps

## Copier le code source de l'application dans le conteneur
COPY ./ /app/

## Construire l'application Angular en mode production
RUN ng build --configuration=production --output-path=dist

## Production Stage
FROM nginx:1.21-alpine AS production-stage

## Copier le fichier de configuration personnalisé de NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

## Copier les fichiers construits à partir de l'étape précédente dans le serveur NGINX
COPY --from=build /app/dist /usr/share/nginx/html

## Exposer le port 80
EXPOSE 80

## Démarrer le serveur NGINX
CMD ["nginx", "-g", "daemon off;"]
