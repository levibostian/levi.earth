I built an Android mobile app and programmed an Arduino hardware device to send data back and forth. This was built for a prototype of a new product for BeraTek Industries.

**What I built:**

* Wrote Arduino code to communicate via Bluetooth to Android app.
* Android mobile app that connected to Arduino and displayed data sent over from Arduino device.
* Mobile app development lead.
* Development consulting.

## What is BeraTek Industries?

BeraTek is a plastic injection molding company with the capabilities to manufacture just about anything out of plastic. BeraTek produces products for clients along with building and selling [their own products](https://www.beratekindustries.com/products/) they build themselves.

I worked with BeraTek to create an prototype for a potential new product of theirs. BeraTek being a physical plastic manufacturing company, I worked with physical hardware for this project (something new for myself at the time). I programmed an [Arduino hardware computer](https://www.arduino.cc/) to read data from sensors and transfer that data via Bluetooth over to an Android app where the app then used that data in the app to serve the purpose of the app for the user.

## What does the app do?

The Android mobile app (1) connected to the Arduino device via Bluetooth and (2) displayed data read from the Arduino device.

## What technologies, tools, libraries did you use to build the app?

Android:

* Realm mobile database
* Eventbus

Arduino Uno computer

## Technically, what is impressive about the app?

* **Android app communicates with a piece of hardware**

The Android app is designed to connect to a piece of hardware (in this case, an Arduino computer) and transfer data to and from the hardware to perform work and show the data to the end user. This was my first project of it's kind working with a hardware device.
