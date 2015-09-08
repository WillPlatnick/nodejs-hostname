cd /tmp

# try to remove the repo if it already exists
rm -rf nodejs-hostname; true

git clone https://github.com/WillPlatnick/nodejs-hostname.git

cd nodejs-hostname

npm install

nodejs .
