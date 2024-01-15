# <img src="https://user-images.githubusercontent.com/80261692/226564602-21d9c099-7c27-4ab0-80cb-295844e318de.png" width="54"> Node-RED template-projekt

Template til nye Node-RED projekter med Vue frontend.

Projekt indeholder Node-RED samt Vue.

  

# Brug af node-red-vue-template

1. ![image](https://user-images.githubusercontent.com/80261692/226566679-e7785e2b-1d03-4b43-a01f-47ecb709d3a2.png) Klik på "use this template" og vælg "create a new repository"

2. Udfyld skærmbillede med information om den nye service

3. Åbn dit nye git projekt

  

# Nyt Node-RED + Vue projekt

Nedenstående relaterer sig til et nyt Node-RED + Vue projekt der er baseret på denne template.

  

## Udvikling i et Codespace:

1. Gå til det nyoprettede repository i github.

2. Klik på den grønne <>Code knap og vælg "create codespace on master"

![Start_Codespace](https://user-images.githubusercontent.com/80261692/226568105-5b9680e4-f1bb-465a-9f10-dcd305b534a8.gif)
  
3. Kør følgende kommando for at starte  et lokalt docker-compose miljø, der bygger og starter Node-RED og en mariadb.
> docker-compose up

4. Åbn en ny konsol (CTRL + SHIFT + Æ)

5. Kør følgende kommandoer for at starte lokal server:
> cd vue
> npm install
> npm run dev


Ved byg af Node-RED kopieres følgende filer ind i containeren:
* [node-red/package.json](node-red/package.json)
* [node-red/settings.js](node-red/settings.js)
* [node-red/flows_cred.json](node-red/flows_cred.json)
* [node-red/flows.json](node-red/flows.json)