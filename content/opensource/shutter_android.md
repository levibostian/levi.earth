---
title: Shutter-Android
slogan: It's finally easy to take photos/videos via camera or get photos/videos from gallery on Android.
color: '#00a9eb'
website: https://github.com/levibostian/Shutter-Android
date: 07-21-2017
timeline: July 21, 2017 - Present
description: It's finally easy to take photos/videos via camera or get photos/videos from gallery on Android. No more dealing with ContentResolvers, Intents, Uris when taking pictures/videos or getting photos/videos in an Android app.
status: active
---

# Shutter-Android

![](/img/opensource/shutter_android/header.jpg)

[![Release](https://jitpack.io/v/levibostian/Shutter-Android.svg)](https://jitpack.io/#levibostian/Shutter-Android)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/JStumpp/awesome-android/blob/master/readme.md#utility)

## What is Shutter?

Shutter is an Android library to take photos, record videos, pick images/videos from gallery, with ease. I always have difficulty working with images/videos while developing Android apps especially since file providers were added.

## Why use Shutter?

* Less bugs. No more publishing apps and have your app crash on a user's devices because of file permission issues you did not handle or boilerplate code you forgot to include (believe me, I have done this many times).
* No more copy/paste of boilerplate code. Install lib, call Shutter, and be done across all of your apps.
* Lightweight. Check out the methods count here
* No Android runtime permissions needed. No need to ask for reading/writing files permissions.
* Java and Kotlin support. Shutter-Android is written in Kotlin :)

## How to use Shutter?

```
shutterResultListener = Shutter.with(this)
    .takePhoto()
    .usePrivateAppInternalStorage()
    .snap(object : Shutter.ShutterResultCallback {
        override fun onComplete(result: Shutter.ShutterResult) {
            result.absoluteImageFile // <--- file:// path to the image.
        }
        override fun onError(humanReadableErrorMessage: String, error: Throwable) {
            Log.d("SHUTTER_EXAMPLE_APP", "Error encountered: ${error.message}")
            Snackbar.make(findViewById(android.R.id.content), humanReadableErrorMessage, Snackbar.LENGTH_LONG).show()
        }
})
```

Pretty simple, huh? Check out the [guide](https://github.com/levibostian/Shutter-Android#take-images-easily-with-shutter) on how to use it.
