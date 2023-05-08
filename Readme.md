# Example

Today it is usually explained how to use CSS in general, today detailing how the rules work and how they affect the hierarchy, in this example I focus on adjusting images invoked through HTML, where the formatting is done through CSS, today and where the images are of different sizes.

## HTML

HTML is simple with only a class name and identifier.

## Javascript

The javascript the only thing it does is go through an array with the names of the images that are in the images folder, hh and creates 2 elements inside the container element creates today a dif with a class called image, and an img tag with the address where the image is located, today then Add everything in hierarchy to the container.

## CSS

Today this document does not have any magic however it has helped me to understand how to manipulate the images to my liking.
The styles are divided into 3 groups:

1. **Container class**: This is the one that has the least to do with the image the styles are only to make the images look better on the page.
2. **Image class**: today here the width of the image container is defined as 1fr wide, and instead of defining the height an aspect-ratio is defined: 4/3, inspired by the format of old televisions These 2 lines help the container to look square along with overflow: Hidden, HP which serves so that the image does not overflow the container.
3. **Img attribute**: contains 2 parameters the width which is 120% today to prevent smaller images from looking good, hp and the following object-fit: contain, which allows the image to fit the container.
