// code from https://linkpeek.com/blog/images-on-hover-lib.html
// worlds smallest gif image: 26 bytes
var placeholder = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
// image to display when there is an error loading image.
var errorholder = "img/error.png"

// code from https://linkpeek.com/blog/images-on-hover-lib.html
// append a image tag with placeholder src to every link using hover-lib class
jQuery("a.campaign").append(
  '<img src="'+placeholder+'" onerror="this.src=\''+errorholder+'\';" />'
);

// code from https://linkpeek.com/blog/images-on-hover-lib.html
// on mouse over switch the image src from placeholder 
// to the image specified in the links id field. 
jQuery("a.campaign").on({
    'mouseover' : function(){
        jQuery(this).children('img').attr('src', this.id);
        jQuery(this).children('img').attr('class', 'hover-lib-visible');
    }
});  

// code from https://linkpeek.com/blog/images-on-hover-lib.html
// on mouse out switch the image src back to placeholder
jQuery("a.campaign").on({
    'mouseout' : function(){
        jQuery(this).children('img').attr('src', placeholder);
        jQuery(this).children('img').attr('class', 'hover-lib-hidden');
    }
}); 