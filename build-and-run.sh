# build frontend
cd frontend
yarn install
yarn build

# build node app
cd ../node
yarn install

# start express, socket.io, and react frontend
cd ../node
node index.js
