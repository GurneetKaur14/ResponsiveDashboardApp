# Responsive Dashboard App - Lab 4
## Student Information
- **Name:** Gurneet Kaur
- **Student ID:** N01724218
- **Course:** CPAN 213
- **Lab:** Lab 4 - Responsive Layouts with Flexbox
- **Date:** October 6, 2025

## Project Description
This responsive dashboard application demonstrates advanced Flexbox layout techniques,
responsive design patterns, and platform-specific styling in React Native.

## Features Implemented
- Responsive grid system with breakpoint detection
- Dashboard widgets with statistics and trends
- Orientation-aware layouts
- Platform-specific styling (iOS/Android)
- Pull-to-refresh functionality
- Performance-optimized StyleSheets

## Technologies Used
- React Native 0.72+
- React Native Orientation Locker
- React Native Vector Icons
- Platform-specific APIs

## Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Install iOS pods (macOS only): `cd ios && pod install`
4. Run on Android: `npx react-native run-android`
5. Run on iOS: `npx react-native run-ios`

## Project Structure
src/
├── components/
│ ├── DashboardHeader.js
│ ├── ResponsiveGrid.js
│ └── widgets/
│        ├── BaseWidget.js
│        └── StatisticWidget.js
├── screens/
│ └── DashboardScreen.js
├── styles/
│ └── theme.js
└── utils/
  └── responsive.js

## Responsive Breakpoints
- Small phones: < 350px
- Medium phones: 350-400px
- Large phones: 400-500px
- Tablets: 500-768px
- Large tablets: > 768px

## Grid Columns by Device
- Small: 1 column
- Medium: 2 columns
- Tablet Portrait: 2 columns
- Tablet Landscape: 2-3 columns

## Performance Notes
- All animations run at 60fps
- StyleSheet.create used for all styles
- Memoization applied where necessary
- Native driver enabled for animations


## Screenshots
See `/screenshots` folder for app images on different devices.
The following images show how the layout adapts across different devices and orientations.

- **Pixel 4 (Portrait):** 1 column layout  
- **Pixel 4 (Landscape):** 1 column layout  
- **Android Tablet (Portrait):** 2 column layout  
- **Android Tablet (Landscape):** 2 column layout

## Known Issues
1. Limited testing devices: The app was only tested on the Pixel 4 and an Android tablet emulator. It was not tested on iOS devices due to hardware limitations
2. Responsive Grid Limitation: The grid layout adjusts based on width but doesn’t yet dynamically rearrange widgets smoothly during rotation — items simply re-render.

## Future Enhancements
- I want to improve my skills in writing cleaner reusable components and learning more about advanced React Native animations.
- Add smoother transitions and advanced React Native animations
- Test on both iOS and Android to ensure full platform consistency