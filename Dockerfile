FROM node:20.11.0-slim

RUN apt-get update && \
    apt-get install -y locales git procps vim tmux curl
RUN locale-gen ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP
RUN yarn global add htpasswd@2.4.6
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo
WORKDIR /app
COPY . /app
CMD ["sh", "run.sh"]