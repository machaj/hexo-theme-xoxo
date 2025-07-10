/* global hexo */
// Usage: {% picture image_name_without_JPG "Description of the image" %}
// Usage: {% picture IMG_3043 "Zbraň na letišti 2" %}

function picture (args) {
  const ctx = this;
  var src = args[0];
  var title = args[1] || '';


  return '<p><a href="'+ src +'.JPG">'+
        '<img src="/' + ctx.path + src +'_small.JPG" alt="'+ title +'" title="'+ title +'">' +
      '</a></p>' +
      '<p class="text-center picture-title">'+ title +'</p>';
}

hexo.extend.tag.register('picture', picture);
