// 'String' to '.mp3'

const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');
const fs = require('fs');

async function main() {
  const tts = new MsEdgeTTS();

  // Set up voice and audio format
  await tts.setMetadata(
    'es-PE-AlexNeural',
    OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3
  );

  // Generate audio stream
  const { audioStream } = tts.toStream('¡Hola Senku Ishigami!! Esto es una prueba de texto a voz con la voz de Alex de Perú.');

  // Save to file
  const fileStream = fs.createWriteStream('peru-alex.mp3');
  audioStream.pipe(fileStream);

  audioStream.on('end', () => {
    console.log('¡Audio generado con éxito en peru-alex.mp3!');
  });
}

main().catch(console.error);