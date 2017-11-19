# ProImage
React native progressive image component.

<p align="center" >
  <img src="https://media.giphy.com/media/3ohjULahSCVAliybRe/giphy.gif" >
</p>

## Install

``` bash
$ npm i pro-image
or
$ yarn add pro-image
```

## Usage

Simple example:
``` javascript
import ProImage from 'pro-image';

const MyImageComponent = () =>
  <ProImage 
    thumbnail={{ uri: 'lorem.ipsum/thumbnail.png' }} 
    image={{ uri: 'lorem.ipsum/big-image.png' }} 
  />
```

### Properties
|Property|Is optional?|Default|Description|
|:---:|:---:|:---:|:---:|
|image|no|-|Image to render.|
|thumbnail|yes|null|The image to render with the same aspect ratio and the smallest resollution possible.|
|placeholder|yes|null|Placeholder image to render while the image is loading. <br> (Note: placeholder will not show if there's a thumbnail)|
|resizeMode|yes|cover|[Image resize mode.](https://facebook.github.io/react-native/docs/image.html#resizemode)|
|style|yes|{}|Styles for the image.|
|containerStyle|yes|{}|Styles for the image container (View).|
|duration|yes|1000 (ms)|Time in milliseconds that the fade effects lasts.|

Full example:
``` javascript
import ProImage from 'pro-image';
import placeholder from './path/to/placeholder.png';

const MyImageComponent = () =>
  <ProImage
    placeholder={placeholder}
    thumbnail={{ uri: 'lorem.ipsum/thumbnail.png' }}
    image={{ uri: 'lorem.ipsum/big-image.png' }}
    containerStyle={{ margin: 4 }}
    style={{ height: 100, width: 200 }}
    resizeMode="contain"
/>
```

## Global properties
Set global values to all the images in your app.

### Properties
|Property|Defalut|Description|
|:---:|:---:|:---:|
|duration|1000 (ms)|Time in milliseconds that the fade effects lasts.|
|placeholder|null|Placeholder image.|
|blur|1|[Blur radius](https://facebook.github.io/react-native/docs/image.html#blurradius) for the thumbnail.|
### Usage
Customize all options:
``` javascript
import ProImage from 'pro-image';
import placeholder from './path/to/placeholder.png';

ProImage.setDefaultConfig({
  duration: 500, 
  placeholder, 
  blur: 2
});
```
Changing just one value:
``` javascript
import ProImage from 'pro-image';
ProImage.setDefaultConfig({ duration: 750 });
```