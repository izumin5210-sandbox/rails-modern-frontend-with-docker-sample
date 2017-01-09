FROM node:6.9.4-alpine

ENV APP /app
WORKDIR $APP
ENV PATH /root/.yarn/bin:$PATH

RUN apk --update add --virtual build-deps \
    bash \
    curl \
    tar \
  && curl -o- -L https://yarnpkg.com/install.sh \
  | bash -s -- --version 0.18.1 \
  && apk del build-deps \
  && rm -rf /var/cache/apk/*

COPY \
  package.json \
  yarn.lock \
  $APP/

RUN yarn install

COPY . $APP
