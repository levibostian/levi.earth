# levibostian.com

Personal site for Levi Bostian.

# Build

* Install Nodejs and npm on your machine.
* Install Bundler on your machine.
* `npm run init`
* `npm run dev`

# Test HTML

I use 18fgsa/html-proofer Docker container to test the HTML (test for valid links, test for alt tags on images, etc) of the site to assert it is valid.

* `npm run test-html`

# Geeky tech stack of site if you care.

* `Jekyll` to create a *fast* static site to host.
* `gulp` to take all my CSS libraries inside of `node_modules` into 1 SASS file I can then import into `css/main.scss` to extend.
* `Tachyons CSS` for designing my site in CSS.
* `Pugjs` to make my HTML template files and have them compile into valid HTML.
* `Docker` to host the static site. I use a nginx-proxy Docker image that connects to this site.
* `Travis-CI` to test, compile, and deploy site (coming soon).
* `Digital Ocean` to host my site on a VM.
