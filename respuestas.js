
const LABI_JSON = {

    administracion: {

        legal: {

            autorizacion_retiro_objetos: `*Su pedido está listo :mailbox_with_mail:* \n\n **LABI-PL-006 - Autorización para el Retiro de Objetos** ${process.env.AUTH_OBJ}`
        }
    },
};

const RESPUESTA = {

    config:{

        channel_id: "848076981626339348",
    },
    
    wrong_channel: "¿Quién me despertó? :rage: No hay nadie venga más tarde. Atiendo solo en el canal designado :point_right_tone1: 𝙇𝘼𝘽𝙞-𝘽𝙤𝙩-📝\n\n https://raw.githubusercontent.com/ApophisXIV/LABi-Bot/master/resources/responseGifs/labiBotWrongChannel.gif",

    unknown_command: "El comando es incorrecto. Volvé a intentar",

    ping: "Pong 🏓",

    aut_retiro_obj: LABI_JSON.administracion.legal.autorizacion_retiro_objetos,

};

module.exports = {RESPUESTA};