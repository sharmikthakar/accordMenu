## accordMenu v1.0

accordMenu is a jQuery plugin that transforms a multilevel list menu into an accordian and/or menu with immense customization options.

get the latest build from: http://github.com/sharmikthakar/accordMenu
watch the plugin in action on its page sharmikthakar.com/accordmenu

## Features

* Intelligently detects list heirarchy and adapts to any ordered or unordered list.
* Cross-browser compatible (Chrome, Opera, Safari, Firefox 3.6+, IE7+).
* 3 CSS styles added for out of the box use.
* Manage Selected heirarchy links for upto 3 levels by adding custom classes to root link, parent link and selected link.
* Control over closing/opening behavior of accordians children, siblings and parents.
* Slide or Hide your content with animation
* Light weight 1.5Kb when minified.
* Designed with progressive enhancement in mind. Keeping room for additional features.


## Plugin Options / API

* KeepParentOpen
Default value: false
Options: false | true
Should the open root links be closed when clicked on another root link

* KeepSiblingsOpen
Default value: true
Options: false | true
Should the open sibling list be closed when clicked on a sibling link

* retainOpen
Default value: false
Options: false | true
Retain opened lists when moving up the heirarchy or switching root links

* animation
Default value: slide
Options: slide | hide
Define custom animation for the list when closed.

* selLink
Default value: selected
Options: custom
Define custom class for selected anchor tag to apply custom styling.

* mainLink
Default value: rootLink
Options: custom
Define custom class for selected links root anchor tag to apply custom styling.

* parLink
Default value: rootLink
Options: custom
Define custom class for selected links parent anchor tag to apply custom styling.


## Contributing

Anyone and everyone is welcome to contribute towards enhancing the features of this plugin.


## Project information

* Source: http://github.com/sharmik/accordMenu
* Twitter: http://twitter.com/sharmikthakar
* Ideas / Found Bug? Log an issue at http://github.com/sharmik/accordMenu

## Next Build v2

* Autoplay features.
* Horizontal Accordian option.
* Public functions.


## License
MIT License

Copyright (c) Sharmik Thakar.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
