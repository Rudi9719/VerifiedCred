#Verified Credentials Prototype

This prototype project built around the concepts of the W3C Verified Credentials system. This project can be broken down into the following key parts:

- Digital Wallet (PWA with Offline support)
- Simple Validator Web Application
- Simple Issuers Web Application

To properly run the service worker code in the local enviornment, update the your Chrome/Brave browser shortcut to inlcude:

```
 --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://wallet.localhost:3000
```