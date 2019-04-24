FROM node:10

WORKDIR /tmp

COPY package*.json ./

ENV CHROME_PACKAGE="google-chrome-stable_59.0.3071.115-1_amd64.deb" NODE_PATH=/usr/local/lib/node_modules:/protractor/node_modules
RUN npm install -g protractor@4.0.14 minimist@1.2.0 && \
    webdriver-manager update && \
    npm install && \
    echo "deb http://ftp.debian.org/debian jessie-backports main" >> /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y xvfb wget sudo && \
    apt-get install -y -t jessie-backports openjdk-8-jre && \
    wget https://github.com/webnicer/chrome-downloads/raw/master/x64.deb/${CHROME_PACKAGE} && \
    dpkg --unpack ${CHROME_PACKAGE} && \
    apt-get install -f -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* \
    rm ${CHROME_PACKAGE}

RUN mkdir /protractor && \
   npm install -g protractor

RUN webdriver-manager update

ADD protractor.sh /protractor.sh

ENV DBUS_SESSION_BUS_ADDRESS=/dev/null

WORKDIR /protractor

ENTRYPOINT ["/protractor.sh"]
