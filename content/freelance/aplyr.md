I designed and built a platform for individuals to search for and hire a career counselor. Design, consulting, backend API and database, Android and iOS mobile app all built by myself.

**What I built:**

* Android, iOS native apps.
* Backend Nodejs API to find, hire, and communicate with a career counselor.
* Mobile app development lead working alongside group of web developers to build platform.
* Development consulting.
* Designed Android and iOS app.
* Designed and tested user experience (UX) for Android and iOS apps.

## What is Aplyr?

Aplyr is a platform to hire a personal career counselor for yourself. This career counselor is hired to help you discover your passions, find and apply for jobs on your behalf. Using Aplyr, you are able to view the marketplace of available career counselors, hire one, and communicate via email/phone/chat.

## What does the app do?

The Android and iOS apps were designed to be a companion product to the entire Aplyr platform. After creating an account and hiring a counselor on the Aplyr website, you use the mobile apps to do all of your communication with your counselor.

## What technologies, tools, libraries did you use to build the app?

iOS:

* Alamofire
* Swift programming language
* Kingfisher
* Realm mobile database
* ObjectMapper

Android:

* Realm mobile database
* Retrofit
* Glide
* Eventbus
* RxJava
* GCM for push notifications
* Dagger 2

Nodejs API:

* Expressjs
* AWS for push notifications through SNS
* Passportjs for Google and email/password login
* Postgres
* Full integration test suite via Mochajs.
* Flowjs
* ApiDoc for API documentation
* Stripe Connect to pay counselors cut of earnings

## Technically, what is impressive about the app?

* **Built product alongside web development team**

All of the backend work was done by myself along with Android and iOS native mobile apps. I worked alongside a small team of 2-4 web developers who built the Aplyr website along with the Aplyr counselor backend dashboard. The web developers built a Vuejs web app that connected to the backend API to perform all of the functionality.

Before the company ended, I was training new backend engineers to take over the backend API and database while I continued as the technical lead for the project.

* **Password-less login**

The onboarding flow of the Aplyr platform was designed from the ground up to be as efficient for the end user as possible. Because of the nature of hiring a career counselor, there were many steps to go through to hire a counselor and begin working with them.

The onboarding process went along the lines of this: Go to Aplyr website to browse counselors -> Request to hire a counselor -> Counselor accepts or denies from application if they can work with you -> If counselor denies, user gets email saying counselor cannot work with them with call to action of going back to the couselor marketplace. If the counselor accepts, user is guided to the Aplyr site to pay via credit card to hire the contractor for a monthly subscription cost (monthly subscription set by counselor) -> User instructed to download mobile app for Android or iOS -> User logs into mobile app after downloading mobile app without a password by hitting "Login" button in email.

To avoid headaches, get the user to login to the app and finish the onboarding process, we decided to go with a password-less login by sending the user a one-time use email. This is a technique used by many tech companies today as remembering passwords can be difficult. Password-less login helps the onboarding process of a user.

* **Stripe Connect to white label payment process**

Stripe Connect is a product used by companies such as Lyft to pay their drivers. Stripe Connect allows you to accept money and then distribute that money to third parties such as independent contractors while also taking a cut of the money for the company. This works great for companies such as Lyft for users to pay for a cab which then pays the cab driver and Lyft gets their cut of the cab fare. Fully automated and white labeled to your company.

We used Stripe Connect with Aplyr so when users pay for a counselor's service the Aplyr company got a cut of the earnings and the counselor got the remaining.
