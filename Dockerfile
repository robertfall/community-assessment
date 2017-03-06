FROM node:7.7.0-alpine

RUN apk add --no-cache --virtual .build-deps \
	make gcc g++ python linux-headers paxctl gnupg \
  && yarn global add pouchdb-server \
  && apk del .build-deps  

CMD ["pouchdb-server","--sqlite"]

