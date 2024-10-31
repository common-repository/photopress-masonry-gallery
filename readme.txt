=== PhotoPress - Masonry Gallery ===
Contributors: padams
Donate link: http://www.photopressdev.com
Tags: photos, images, gallery, photopress, masonry, tiled
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl.html
Requires at least: 3.9
Tested up to: 4.9.3
Stable tag: 1.2.8

Extends the [gallery] shortcode to add a masonry style display option.

== Description ==

This plugin allows you to apply a masonry style display to a gallery of images. The plugin extends the core [gallery] shortcode by adding a "type" attribute so that you can choose this masonry presentation on a gallery by gallery basis.

= Features include: =

* Adds *"type"* attribute and "masonry" value to gallery shortcode

= Premium Support =
The PhotoPress team does not provide support for this plugin on the WordPress.org forums. One on one email support is available to users that purchase one of our [Premium Support Plans](http://www.photopressdev.com).

= Other PhotoPress Plugins =
* [PhotoPress Image Taxonomies](http://wordpress.org/plugins/photo-tools-image-taxonomies/)
* [PhotoPress Gallery](http://wordpress.org/plugins/photopress-gallery/)
* [PhotoPress Paypal Shopping Cart](http://wordpress.org/plugins/photopress-paypal-shopping-cart/)
* [PhotoPress Masonry Gallery](http://wordpress.org/plugins/photopress-masonry-gallery/)
* [PhotoPress Sideways Gallery](http://wordpress.org/plugins/photopress-sideways-gallery/)
* [PhotoPress Latest Images](http://wordpress.org/plugins/photopress-latest-images/)

= The Guide To WordPress For Photographers =
For more information on ways to use PhotoPress and other plugins to build a photpgraphy website check out the [WordPress For Photographers e-Book](http://wpphotog.com/product/the-guide-to-wordpress-for-photographers/ "WordPress For Photographers").

== Example Usage ==

Display a gallery of images in a masonry style:

`[gallery type="masonry"]`

== Installation ==

1. Upload the plugin folder to your `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' page in the WordPress admin interface
1. Install and activate the [PhotoPress Gallery](http://wordpress.org/plugins/photopress-gallery/) plugin which this plugin depends on.
1. Add the "type" parameter to the gallery shortcode in your page/post like so `[gallery type="masonry"]`.

== Frequently Asked Questions ==

= Why do I need this plugin? =

You need this plugin if you want to display an image gallery using a masonry style on a case by case basis.
 
== Changelog ==

= 1.2.8 =

Hide galery images while they are loading so that bricks don't jump around.

= 1.2.7 = 

Fixing rendering bug on Safari.

= 1.2.6 =

Overwriting WP default imageLoaded script.

= 1.2.5 =

Fixing bugs with imagesLoaded lib that would cause images to stack.

= 1.2.4 =

Adding check for web page to be ready before calculating masonry.

= 1.2.3 =

Added proper centering and item padding

= 1.2.2 =

fixes image loading race condition

= 1.2 =

Clarifying install instructions so that it's clear thatthis plugin is dependant on [PhotoPress Gallery](http://wordpress.org/plugins/photopress-gallery/).

= 1.1 = 

Removing duplicate masonry js file as plugin comes standard as of WP 3.9.

= 1.0 =

Initial version of plugin.