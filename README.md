# Text to MP3 con Node.js

Script sencillo para convertir texto a audio **MP3** utilizando Node.js y la biblioteca [`msedge-tts`](https://www.npmjs.com/package/msedge-tts).

El proyecto incluye dos formas de generar el audio:

- `index.js`: lee el texto desde `txtAconvertir.txt`.
- `indexWithString.js`: convierte directamente una cadena de texto escrita en el código.

La voz configurada actualmente es **es-PE-AlexNeural**, una voz en español de Perú.

## Requisitos

Antes de ejecutar el proyecto necesitas:

- **Node.js** instalado.
- **npm**, incluido normalmente con Node.js.
- Conexión a Internet para que `msedge-tts` pueda obtener/generar el audio mediante el servicio de Microsoft Edge TTS.

Puedes comprobar la instalación con:

```bash
node --version
npm --version
```

## Instalación

1. Abre una terminal en la carpeta del proyecto.

2. Instala las dependencias:

```bash
npm install
```

La dependencia principal es:

```text
msedge-tts
```

## Uso

### Opción 1: convertir un archivo TXT

Esta es la opción principal del proyecto.

1. Abre:

```text
txtAconvertir.txt
```

2. Escribe o pega el texto que quieras convertir.

3. Guarda el archivo.

4. Ejecuta:

```bash
npm start
```

También puedes ejecutar directamente:

```bash
node index.js
```

El script:

1. Busca `txtAconvertir.txt` en la carpeta del proyecto.
2. Lee su contenido como UTF-8.
3. Comprueba que el archivo no esté vacío.
4. Configura la voz `es-PE-AlexNeural`.
5. Genera un flujo de audio MP3.
6. Guarda el resultado como:

```text
peru-alex.mp3
```

Si todo funciona correctamente, aparecerá un mensaje similar a:

```text
Generando audio...
¡Audio generado con éxito en peru-alex.mp3!
```

### Opción 2: convertir una cadena escrita en JavaScript

El archivo:

```text
indexWithString.js
```

contiene directamente el texto que se convertirá a voz.

Para ejecutarlo:

```bash
node indexWithString.js
```

Por ejemplo, actualmente contiene una cadena similar a:

```javascript
tts.toStream('¡Hola Senku Ishigami!! Esto es una prueba de texto a voz con la voz de Alex de Perú.');
```

Para utilizar otro texto, modifica esa cadena y vuelve a ejecutar el script.

El resultado también se guarda como:

```text
peru-alex.mp3
```

## Cambiar el texto del archivo TXT

No es necesario modificar `index.js` para cambiar el contenido que se convierte.

Simplemente edita:

```text
txtAconvertir.txt
```

Ejemplo:

```text
Hola. Este texto será convertido automáticamente a un archivo MP3.
```

Después ejecuta:

```bash
npm start
```

## Cambiar la voz

La voz se configura mediante:

```javascript
await tts.setMetadata(
  'es-PE-AlexNeural',
  OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3
);
```

La primera parte corresponde al identificador de la voz:

```text
es-PE-AlexNeural
```

Para utilizar otra voz compatible con `msedge-tts`, cambia ese identificador.

Por ejemplo:

```javascript
await tts.setMetadata(
  'OTRA-VOZ',
  OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3
);
```

Consulta la documentación de `msedge-tts` para conocer las voces y formatos disponibles.

## Formato de salida

El proyecto utiliza:

```javascript
OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3
```

Esto significa que el audio generado utiliza:

- MP3
- 24 kHz
- 48 kbit/s
- Mono

## Estructura del proyecto

```text
script-Text-to-MP3/
│
├── index.js
├── indexWithString.js
├── txtAconvertir.txt
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### `index.js`

Convierte el contenido de `txtAconvertir.txt` en MP3.

### `indexWithString.js`

Convierte una cadena definida directamente dentro del código.

### `txtAconvertir.txt`

Archivo de entrada utilizado por `index.js`.

### `package.json`

Contiene la configuración del proyecto, los scripts y las dependencias.

### `package-lock.json`

Registra las versiones concretas de las dependencias instaladas por npm.

### `.gitignore`

Evita que `node_modules` sea incluido en Git.

## Comandos principales

Instalar dependencias:

```bash
npm install
```

Convertir `txtAconvertir.txt`:

```bash
npm start
```

Ejecutar directamente el conversor desde TXT:

```bash
node index.js
```

Ejecutar el conversor desde una cadena:

```bash
node indexWithString.js
```

## Solución de problemas

### `npm` o `node` no se reconoce

Comprueba que Node.js esté instalado:

```bash
node --version
npm --version
```

Si alguno de los comandos no funciona, instala Node.js y vuelve a abrir la terminal.

### No se encuentra `txtAconvertir.txt`

Asegúrate de que el archivo esté en la misma carpeta que `index.js`.

La estructura mínima debe ser:

```text
proyecto/
├── index.js
└── txtAconvertir.txt
```

### El archivo TXT está vacío

`index.js` no genera un MP3 si el archivo no contiene texto.

Escribe algún contenido en `txtAconvertir.txt` y vuelve a ejecutar:

```bash
npm start
```

### Ya existe `peru-alex.mp3`

El script utiliza ese mismo nombre para el archivo de salida:

```text
peru-alex.mp3
```

Por lo tanto, una nueva ejecución está destinada a generar nuevamente ese archivo.

Si quieres conservar un audio anterior, cámbiale el nombre antes de ejecutar el script otra vez.

### Error relacionado con `msedge-tts`

Primero instala o reinstala las dependencias:

```bash
npm install
```

Después vuelve a ejecutar:

```bash
npm start
```

También comprueba que tengas conexión a Internet.

## Personalización rápida

### Cambiar el nombre del MP3

En `index.js`:

```javascript
const fileStream = fs.createWriteStream('peru-alex.mp3');
```

Puedes cambiarlo, por ejemplo, a:

```javascript
const fileStream = fs.createWriteStream('mi-audio.mp3');
```

Haz lo mismo en `indexWithString.js` si quieres aplicar el cambio allí.

### Cambiar el archivo de entrada

Actualmente `index.js` utiliza:

```javascript
const filePath = path.join(__dirname, 'txtAconvertir.txt');
```

Puedes cambiar `txtAconvertir.txt` por otro nombre de archivo.

## Dependencia principal

El proyecto utiliza:

```text
msedge-tts ^2.0.8
```

Más información:

https://www.npmjs.com/package/msedge-tts

## Licencia

El `package.json` del proyecto declara actualmente la licencia:

```text
ISC
```

## Autor

Pat

Repositorio configurado en el `package.json`:

```text
https://github.com/Pat-Asiste/script-Text-to-MP3-
```
