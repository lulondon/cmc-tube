# cmc-tube
*cmc-tube* is a single-page application for displaying live Tube status information, directly from TfL's API. It is designed specifically for Loughborough University London, and has some hardcoded elements that reflect this.

## Usage
### Configuration
Access to TfL's API requires registration of the app, and use of an API key. This can be done through the [TfL API website](https://api.tfl.gov.uk/).

Once obtained, the keys should be added to the *.env* file in the project root.

*.env*:
```
TFL_API_APP_ID=<your TfL app ID here>
TFL_API_APP_KEY=<your TfL API key here>
```

### Build
First install dependencies:
```shell
yarn
```

Then create an optimised production build
```shell
yarn build
```

... or substitute the equivalent *npm* commands, if *yarn* is not available.
```shell
npm install
npm run build
```

The resulting HTML file, JavaScript bundle, and associated assets are now available in *./dist*
