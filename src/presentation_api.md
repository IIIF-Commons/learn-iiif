---
layout: page
title: Presentation API
permalink: /presentation-api/
---

The IIIF Presentation API gives us a specification for "presenting" images. A common example to think about this is a book.

If you want to display a group of images that represent pages in a book, you first need to know a few things about that book. Likely you will want to know the title of the book. You need to know what pages are in the book and the order of those pages. Perhaps you also want to show the book two pages at a time, with the pages facing the correct directions. This and much more can be accomplished using the [IIIF Presentation API](http://iiif.io/api/presentation/2.1/).

## Core concepts

The Presentation API consists of a JSON-LD server response that specifies how resources (images) should be presented. To accomplish this the API response consists of several different resources that inform the presentation. This are [base concepts](http://iiif.io/api/presentation/2.1/#resource-type-overview) that are used throughout the IIIF documentation and community and are important to understand.

### Manifest

A manifest represents the overall description of the "thing" (object) to presented. This could be a book, a photograph, or an image of a tree.

#### Example
{% highlight json %}
{
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@type": "sc:Manifest",
  "@id": "http://example.org/iiif/book1/manifest",

  "label": "Book 1",
  "metadata": [
    {"label": "Author", "value": "Anne Author"},
    {"label": "Published", "value": [
        {"@value": "Paris, circa 1400", "@language": "en"},
        {"@value": "Paris, environ 14eme siecle", "@language": "fr"}
        ]
    }
  ],
  "description": "A longer description of this example book. It should give some real information.",
  "navDate": "1856-01-01T00:00:00Z",

  "license": "https://creativecommons.org/publicdomain/zero/1.0/",
  "attribution": "Provided by Example Organization",
  "service": {
    "@context": "http://example.org/ns/jsonld/context.json",
    "@id": "http://example.org/service/example",
    "profile": "http://example.org/docs/example-service.html"
  },
...
  "sequences": [
...
{% endhighlight %}

### Sequence

The next key concept, is a sequence. A sequence defines the order of view of the object. A manifest can have more than one valid sequence if for some reason it has been reordered.

#### Example
{% highlight json %}
...
  "sequences": [
    {
      "@id": "http://example.org/iiif/book1/sequence/normal",
      "@type": "sc:Sequence",
      "label": "Current Page Order",
      "viewingDirection": "left-to-right",
      "viewingHint": "paged",
      "canvases": [
...
{% endhighlight %}

### Canvas
Canvases are used as a container for adding content to it. For instance, a canvas could contain both an image of a book page and associated transcriptions for that page.

#### Example
{% highlight json %}
...
  "canvases": [
    {
      "@id": "http://example.org/iiif/book1/canvas/p1",
      "@type": "sc:Canvas",
      "label": "p. 1",
      "height":1000,
      "width":750,
      "images": [
...
{% endhighlight %}

### Content
Content is used to describe viewable resources that can be placed on a canvas. These could be images that represent a book page, transcription text, or annotation notes.

{% highlight json %}
...
"images": [
  {
    "@type": "oa:Annotation",
    "motivation": "sc:painting",
    "resource":{
      "@id": "http://example.org/iiif/book1/res/page1.jpg",
      "@type": "dctypes:Image",
      "format": "image/jpeg",
      "service": {
        "@context": "http://iiif.io/api/image/2/context.json",
        "@id": "http://example.org/images/book1-page1",
        "profile": "http://iiif.io/api/image/2/level1.json"
      },
      "height":2000,
      "width":1500
    },
    "on": "http://example.org/iiif/book1/canvas/p1"
  }
],
...
{% endhighlight %}

There are some [more resource types](http://iiif.io/api/presentation/2.1/#additional-types) used in the IIIF Presentation API but lets just focus on these now.

## Back to the example

Now that we have somewhat of an idea of what these types are, lets relate them back to our example of the book.

 - Manifest - Basic information about the book, including whether or not the images should be [viewed as pages](http://iiif.io/api/presentation/2.1/#viewinghint)
 - Sequence - Order of the "pages" of the book
 - Canvas - Virtual container of the "page" of each book
 - Content - Image of each page, to be added to the canvas

A IIIF client consuming this response would now know how to display the book, associated metadata for the book, and what images represent the pages and their order.
