*WARNING*
The plugin is still under development.
Using it will cause unexpected results.


# [accordMenu v1.0]

accordMenu is a jQuery plugin that transforms a multilevel list menu into an accordian-esque menu with immense customization options.

accordMenu works perfectly with upto 3 list levels. 

## Features

* Flexible to deploy and can be used to accomodate menu's and accordians.
* Cross-browser compatible (Chrome, Opera, Safari, Firefox 3.6+, IE7+).
* Designed with progressive enhancement in mind. Keeping room for additional features.
* CSS stylesheet attached for out of the box usability.
* Helper classes added by the plugin for easy modification.
* Delete Friendly, feel free to strip off parts you do not reqiure.


## Plugin Options / API

* colors
Default value: 2
Options: 1 | 2 | 3
Select the level of accordian colors that are applied to parent Links.

* KeepParentOpen
Default value: false
Options: false | true
Should the open root links be closed when clicked on another root link

* KeepSiblingsOpen
Default value: true
Options: false | true
Should the open sibling list be closed when clicked on a sibling link

* animation
Default value: slide
Options: slide | hide
Define custom animation for the list when closed.

* selClass
Default value: selected
Options: custom
Define custom class for selected anchor tag to apply custom styling.

* rootClass
Default value: rootLink
Options: custom
Define custom class for selected links root anchor tag to apply custom styling.

* parentClass
Default value: rootLink
Options: custom
Define custom class for selected links parent anchor tag to apply custom styling.

**Note: By default the parent anchor shares the same class as the root anchor.
If you wish to specify a different style to parent link, use colors: 3 and define custom class for parentClass.


## Contributing

Anyone and everyone is welcome to contribute towards enhancing the features of this plugin.


## Project information

* Source: http://github.com/sharmik/accordMenu
* Twitter: http://twitter.com/sharmikthakar


## License
public domain.
