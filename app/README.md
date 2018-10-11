Installation Requirements

react-native CLI
yarn

Installation

To ensure a clean build, run:
rm -rf $TMPDIR/react-*; rm -rf $TMPDIR/haste-*; rm -rf $TMPDIR/metro-*; watchman watch-del-all

Then, make sure you are in /app and run:
yarn install
react-native start (You must start the metro bundler manually due to a bug in RN v0.57.2)
In a new terminal, react-native run-ios 

