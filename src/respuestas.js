
const LABI_JSON = {

    administracion: {

        legal: {

            autorizacion_retiro_objetos: `**LABI-PL-006 - Autorización para el Retiro de Objetos** ${process.env.AUTH_OBJ}`
        }
    },
};

const RESPUESTA = {

    config:{

        channel_id: process.env.CHANNEL_ID,
    },

    gifs:{

        wrong_channel: "https://raw.githubusercontent.com/ApophisXIV/LABi-Bot/master/resources/responseGifs/labiBotWrongChannel.gif",
        
        unknown_command: "https://raw.githubusercontent.com/ApophisXIV/LABi-Bot/master/resources/responseGifs/unknowCommand.gif"
    },
    
    wrong_channel: "¿Quién me despertó? :rage: No hay nadie venga más tarde. Atiendo solo en el canal designado :point_right_tone1: 𝙇𝘼𝘽𝙞-𝘽𝙤𝙩-📝",

    unknown_command: "El comando es incorrecto o todavia no se inventó. Volvé a intentar.",

    ping: "Pong 🏓",

    aut_retiro_obj: `*Su pedido está listo :mailbox_with_mail:* \n\n ${LABI_JSON.administracion.legal.autorizacion_retiro_objetos}`,

};

module.exports = {RESPUESTA};