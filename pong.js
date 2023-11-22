window.onload = () => {
    const svg = document.querySelector('svg');
    const jugador1 = document.getElementById('jugador1');
    const jugador2 = document.getElementById('jugador2');
    const pelota = document.getElementById('pelota');

    const velocidadPaleta = 5;
    const velocidadPelotaX = 5;
    const velocidadPelotaY = 2;

    let posYJugador1 = 150;
    let posYJugador2 = 150;
    let posXPelota = 400;
    let posYPelota = 200;
    let direccionVelocidadXPelota = 1;
    let direccionVelocidadYPelota = 1;

    function actualizarPosicionesPaletas() {
      jugador1.setAttribute('y', posYJugador1);
      jugador2.setAttribute('y', posYJugador2);
    }

    function actualizarPosicionPelota() {
      posXPelota += velocidadPelotaX * direccionVelocidadXPelota;
      posYPelota += velocidadPelotaY * direccionVelocidadYPelota;

      if (posYPelota <= 0 || posYPelota >= 390) {
        direccionVelocidadYPelota *= -1;
      }

      if (posXPelota <= 10 && posYPelota >= posYJugador1 && posYPelota <= posYJugador1 + 100) {
        direccionVelocidadXPelota *= -1;
      }

      if (posXPelota >= 790 && posYPelota >= posYJugador2 && posYPelota <= posYJugador2 + 100) {
        direccionVelocidadXPelota *= -1;
      }

      if (posXPelota <= 0 || posXPelota >= 800) {
        posXPelota = 400;
        posYPelota = 200;
        direccionVelocidadXPelota = -1;
        direccionVelocidadYPelota = 1;
      }

      pelota.setAttribute('cx', posXPelota);
      pelota.setAttribute('cy', posYPelota);
    }

    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'w' && posYJugador1 > 0) {
        posYJugador1 -= velocidadPaleta;
      }

      if (evento.key === 's' && posYJugador1 < 300) {
        posYJugador1 += velocidadPaleta;
      }

      if (evento.key === 'ArrowUp' && posYJugador2 > 0) {
        posYJugador2 -= velocidadPaleta;
      }

      if (evento.key === 'ArrowDown' && posYJugador2 < 300) {
        posYJugador2 += velocidadPaleta;
      }

      actualizarPosicionesPaletas();
    });

    setInterval(actualizarPosicionPelota, 20);
    actualizarPosicionesPaletas();
}
