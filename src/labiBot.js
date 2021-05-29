
console.log("LABi Bot Docs dice hola");

require("dotenv").config();

const BOT = require("../src/respuestas");

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

        const COMMAND = stringMensaje.split(" ",2)[1];

        console.log(COMMAND);

        if(COMMAND != undefined){
            
            query.reply(BOT.RESPUESTA[COMMAND.trim()]);
        }

        else{

            query.delete({ timeout: 10000 });

            query.reply(BOT.RESPUESTA.unknown_command)

                .then(respuestaError => {

                    respuestaError.delete({ timeout: 10000 });
                }
            );

            query.channel.send(BOT.RESPUESTA.gifs.unknown_command)                
            
                .then(respuestaError => {

                    respuestaError.delete({ timeout: 10000 });
                }
            );

        }

    }

    else if ((query.channel.id != BOT.RESPUESTA.channel_id) && !(query.author.bot) && (stringMensaje.includes("!labi")) && (stringMensaje.charAt(0)==='!')){

        query.delete({ timeout: 10000 });

        query.reply(BOT.RESPUESTA.wrong_channel)
            
            .then(respuestaError => {

                respuestaError.delete({ timeout: 10000 });
            }
        );

        query.channel.send(BOT.RESPUESTA.gifs.wrong_channel)                
            
        .then(respuestaError => {

            respuestaError.delete({ timeout: 10000 });
        }
    );
    }

    else{

        console.log("Mensaje ignorado");
    }
}

