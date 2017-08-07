FROM mhart/alpine-node:latest
RUN apk update && apk add bash

ADD package.json /tmp/client/package.json
ADD server/package.json /tmp/server/package.json
RUN cd /tmp/client && npm install
RUN cd /tmp/server && npm install
RUN mkdir -p /opt/app && cp -a /tmp/client/node_modules /opt/app/
RUN mkdir -p /opt/app/server && cp -a /tmp/server/node_modules /opt/app/server/

WORKDIR /opt/app
ADD . /opt/app

EXPOSE 3001
EXPOSE 3000

#RUN cd server && npm run startServer &
#RUN cd ..
#CMD ["npm", "start"]
CMD ["sudo", "chmod", "+x", "/opt/app/run.sh"]
CMD ["/opt/app/run.sh"]