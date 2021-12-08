
class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();

    }

    socketEvents() {

        console.log( 'cliente' );

        // On connection
        this.io.on( 'connection', ( socket ) => {

            console.log( 'cliente conectado' );

        } );

    }

}

module.exports = Sockets;