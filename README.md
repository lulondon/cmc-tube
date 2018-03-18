# cmc-tube
*cmc-tube* is a single-page application for displaying live Tube status information, directly from TfL's API.

## Usage
### Configuration

*cmc-tube*'s configuration options are stored in *config/config.json*.

#### Example *config.json*
```JSON
{
  "TflAppId": "xxxxxxxx",
  "TflApiKey": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```


##### TflAppId, TflApiKey
Access to TfL's API requires registration of the app, and use of an API key. This can be done through the [TfL API website](https://api.tfl.gov.uk/). These should then be entered into *config.json* as above.

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
