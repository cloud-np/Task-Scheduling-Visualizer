FROM node:18


WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

# List packages here
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        file        \
        gcc         \
        libwww-perl && \
    apt-get autoremove -y && \
    apt-get clean \
    apt-get zsh \
    apt-get vim 

# Default powerline10k theme, no plugins installed
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.2/zsh-in-docker.sh)"

ENV SHELL /usr/bin/zsh

# CMD [ "python", "./main.py"]
