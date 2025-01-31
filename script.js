let noButtonState = 0; // Estado del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

// Función para manejar el clic en el botón "Sí"
document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar los gifs tristes y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones y mostrar el mensaje
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Oh Siii! jajaja';

    // Mostrar otros gifs después de intervalos
    setTimeout(() => {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);
    setTimeout(() => {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(() => {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);

    // Después de 5 segundos, mostrar el mensaje "Espere un momento..."
    setTimeout(() => {
        document.getElementById('messageContainer').innerHTML = 'Espere un momento...';
    }, 5000);

    // Después de 7 segundos, redirigir a otra página
    setTimeout(() => {
        window.location.href = 'page/index.html'; 
    }, 7000);
});

// Función para manejar el clic en el botón "No"
document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';
            document.getElementById('noBtn').innerHTML = '¡Oh no! ¿Estás seguro?';
            noButtonState++;
            break;
        case 1:
            document.getElementById('noBtn').innerHTML = '¡¿Realmente estás seguro?!';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';
            noButtonState++;
            break;
        case 2:
            document.getElementById('noBtn').innerHTML = 'Estás seguro de verdad, ¿eh?';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';
            noButtonState++;
            break;
        case 3:
            document.getElementById('noBtn').innerHTML = '¿Eres positivo?';
            noButtonState++;
            break;
        case 4:
            document.getElementById('noBtn').innerHTML = 'Di que sí, por favor.';
            noButtonState++;
            break;
        case 5:
            document.getElementById('noBtn').innerHTML = 'Solo piensa en ello.';
            noButtonState++;
            break;
        case 6:
            document.getElementById('noBtn').innerHTML = 'Si dices que no, estaré muy triste.';
            noButtonState++;
            break;
        case 7:
            document.getElementById('noBtn').innerHTML = 'Estaré muy triste.';
            noButtonState++;
            break;
        case 8:
            document.getElementById('noBtn').innerHTML = 'Estaré muy muy triste.';
            noButtonState++;
            break;
        case 9:
            document.getElementById('noBtn').innerHTML = 'Vale, ya dejaré de preguntar...';
            noButtonState++;
            break;
        case 10:
            document.getElementById('noBtn').innerHTML = 'Es broma, POR FAVOR DI SÍ.';
            noButtonState++;
            break;
        case 11:
            document.getElementById('noBtn').innerHTML = 'Estás rompiendo mi corazón :(';
            noButtonState++;
            break;
        case 12:
            document.getElementById('noBtn').innerHTML = 'NO... ya di que sí.';
            noButtonState++;
            break;
        case 13:
            document.getElementById('noBtn').innerHTML = 'Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii.';
            noButtonState++;
            break;
        case 14:
            document.getElementById('noBtn').innerHTML = 'Por favooooooor.';
            noButtonState = 0; // Reiniciar el estado
            break;
        default:
            break;
    }
});
