---
layout: page
title: Image API Playground
---

The IIIF Image API makes requests to images using a specified URI syntax which changes what image is requested. The syntax consists of a way to identify the image to be requested, as well as additional parameters that can be used to modify the way the image comes back. These request parameters can modify the region of the image, its size, rotation, quality, and the image format. See the [API documentation](http://iiif.io/api/image/2.1/#image-request-parameters) for parameter options you can use.

{% raw %}

    {scheme}://{server}{/prefix}/{identifier}/{region}/{size}/{rotation}/{quality}.{format}

{% endraw %}

In the form below, try changing some of the parameters around to see what happens. First perhaps try changing size to `pct:10`. Then change region to `full`. Hopefully you will start to see how the IIIF Image API can be used to make image requests.

<div id='image-api-playground'> </div>

Above is the [Image Information](http://iiif.io/api/image/2.1/#image-information) response from the IIIF Image server. This response is used by IIIF Image API clients to determine what types of image requests it can make.

Now that we have learned the basics of requesting images, we need to figure out how to request images that are grouped together.

<div class='d-flex justify-content-around'>
  <a class="btn btn-secondary" href="{{'presentation-api' | relative_url }}">
    <span class='next-continue'>Continue :arrow_right:</span>
    <span class='next-title'>Presentation API</span>
  </a>
</div>
