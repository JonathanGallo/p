var score;

// Clase Retry, donde se crean los botones, el logo y el fondo del menú derrota
export class victoria extends Phaser.Scene {
    constructor() {
     super("victoria");
    }

    init(data) {
      // recupera el valor SCORE enviado como dato al inicio de la escena
      score = data.score;
    }

    create() {
       // Fondo del menú derrota
       this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"victoriaim").setScale(1);
      // Texto que muestra el puntaje maximo alcanzado
       this.add.text(this.cameras.main.centerX,this.cameras.main.centerY,`Puntaje alcanzado: ${score}`).setOrigin(0.5);
       // Boton para volver a jugar
       var botonre = this.add.image(150, 560, 'botonreset').setScale(0.5)
       .setInteractive()
       .on('pointerover', () => this.add.image(150, 560, 'botonreset2').setScale(0.5))
       .on('pointerout', () => this.add.image(150, 560, 'botonreset').setScale(0.5))
       .on('pointerdown', () => this.botonreset())
       // Boton para volver al mapa
       var botonmapa = this.add.image(280, 560, 'botonmapa').setScale(0.5)
       .setInteractive()
       .on('pointerover', () => this.add.image(280, 560, 'botonmapa2').setScale(0.5))
       .on('pointerout', () => this.add.image(280, 560, 'botonmapa').setScale(0.5))
       .on('pointerdown', () => this.botonmapa())
    }

    botonreset(){
      this.scene.start('Play1');
    }

    botonmapa(){
      this.scene.start('mapa');
    }
  
}