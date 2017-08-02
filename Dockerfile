FROM mhart/alpine-node:7
MAINTAINER briangonzalez

RUN apk add --update curl

# Create app directory
RUN mkdir -p /app

# Expose the app port
EXPOSE 3000

# Copy files.
COPY . /app
WORKDIR /app
RUN npm install
RUN mkdir -p node_modules/node-sass/vendor/linux_musl-x64-51
RUN curl -L https://github.com/sass/node-sass/releases/download/v4.5.3/linux_musl-x64-51_binding.node -o node_modules/node-sass/vendor/linux_musl-x64-51/binding.node
RUN npm install
RUN npm rebuild node-sass
RUN ./node_modules/.bin/nuxt build

CMD ["/app/node_modules/.bin/nuxt", "start"]
