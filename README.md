# ELOT-743-Converter
Convert from Greek to ΕΛΟΤ 743/ISO 843 Greeklish representation





# init
yarn add @types/node typescript
yarn add -D ts-node
yarn tsc --init --rootDir src --outDir ./bin --esModuleInterop --lib ES2019 --module commonjs --noImplicitAny true
mkdir src
echo “console.log(‘ok’)” > src/convert.ts

yarn tsc
node ./bin/convert.js
