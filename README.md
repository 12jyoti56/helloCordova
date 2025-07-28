
# HelloCordova – Simple iOS Mobile App using Apache Cordova

HelloCordova is a beginner-friendly mobile application built using Apache Cordova. This app demonstrates how web technologies like HTML, CSS, and JavaScript can be combined and packaged into a native iOS app using Cordova.

## Features

This app includes 10 simple interactive features:

1. Welcome message on app launch  
2. Personalized greeting based on user name input  
3. Button click counter  
4. Toggle between light and dark theme  
5. Change background color randomly  
6. Display current date  
7. Live clock updating every second  
8. Reset all fields and styles  
9. Generate random motivational quotes  
10. Display device screen width and height  

## Technologies Used

- Apache Cordova  
- HTML, CSS, JavaScript  
- iOS Simulator for testing  

## How to Run

To run this app on your machine, follow these steps:

```bash
cordova create helloCordova com.example.hello HelloCordova
cd helloCordova
cordova platform add ios
# Replace the contents of the www folder with the code in this repository
cordova run ios
