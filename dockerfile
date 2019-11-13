FROM node:4.4
EXPOSE 9999
COPY server.js .
CMD node server.js
