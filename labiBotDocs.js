
console.log("LABi Bot Docs dice hola");

const BOT = require("./respuestas");

require("dotenv").config();

const DISCORD_API = require("discord.js");
const DISCORD_CLIENT = new DISCORD_API.Client();

DISCORD_CLIENT.login(process.env.TOKEN);

DISCORD_CLIENT.on("ready", () => {

    console.log("LABi Bot Docs listo para recibir ordenes");
});

DISCORD_CLIENT.on("message",catchMessage);

function catchMessage(query){

    const stringMensaje = query.content.toLowerCase();

    if((query.channel.id === BOT.RESPUESTA.config.channel_id) && (stringMensaje.includes("!labi")) && (stringMensaje.charAt(0) ==='!')){

        const COMMAND = stringMensaje.split(" ",2)[1].trim();

        console.log(COMMAND);

        query.reply(BOT.RESPUESTA[COMMAND]);
    }

    else if ((query.channel.id != BOT.RESPUESTA.channel_id) && !(query.author.bot) && (stringMensaje.includes("!labi")) && (stringMensaje.charAt(0)==='!')){

        query.delete({ timeout: 8000 });

        query.reply(BOT.RESPUESTA.wrong_channel)
            
            .then(respuestaError => {

                respuestaError.delete({ timeout: 8000 });
            }
        );
    }

    else{

        console.log("Mensaje ignorado");
    }
}

