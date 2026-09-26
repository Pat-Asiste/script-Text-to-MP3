// 'texto.txt' to '.mp3'

const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');
const path = require('path');

async function main() {
  // 1. Definir la ruta del archivo .txt en la misma carpeta
  const filePath = path.join(__dirname, 'txtAconvertir.txt');

  // Verificar si el archivo existe antes de continuar
  if (!fs.existsSync(filePath)) {
    console.error('Error: No se encontró el archivo texto.txt en este directorio.');
    return;
  }

  // 2. Leer el contenido del archivo .txt (en codificación UTF-8)
  const texto = fs.readFileSync(filePath, 'utf8').trim();

  if (!texto) {
    console.warn('El archivo texto.txt está vacío.');
    return;
  }

  // 3. Configurar el motor de voz
  const tts = new MsEdgeTTS();
  await tts.setMetadata(
    'es-PE-AlexNeural',
    OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3
  );

  // 4. Generar el audio a partir del texto leído
  console.log('Generando audio...');
  const { audioStream } = tts.toStream(texto);

  // 5. Guardar el resultado en un archivo MP3
  const fileStream = fs.createWriteStream('peru-alex.mp3');
  audioStream.pipe(fileStream);

  audioStream.on('end', () => {
    console.log('¡Audio generado con éxito en peru-alex.mp3!');
  });
}

main().catch(console.error);