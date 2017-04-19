FROM ruby:2.4.0-alpine

ENV APP /app
WORKDIR $APP

RUN apk --update add \
    build-base \
    postgresql-dev \
    tzdata \
  && apk add --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ \
    entrykit \
  && rm -rf /var/cache/apk/* \
  && cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

RUN mkdir -p $APP/tmp/cache \
  && mkdir -p $APP/tmp/pids \
  && mkdir -p $APP/tmp/sockets

ENTRYPOINT [ \
  "prehook", "ruby -v", \
  "prehook", "bundle install --jobs 4 --quiet --path vendor/bundle", \
  "--" \
]
