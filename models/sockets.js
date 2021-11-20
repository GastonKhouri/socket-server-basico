
class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();

    }

    socketEvents() {

        // On connection
        this.io.on( 'connection', ( socket ) => {

            socket.on('msg-to-server', ({ texto }) => {
        
                this.io.emit('msg-from-server', { texto });
        
            })
        
        } );

    }    

}

module.exports = Sockets;