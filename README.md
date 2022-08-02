# bond2somfy

using vanilla javascript and html

I wanted a very simple way to use my iphone and otther devices (ipad, laptop) as a remote control for my somfy controlled awning. I can use the "bond home" app but it requires a higher version of ios than my old iphone and it's not simple enough. (I also have Alexa and Siri controlling the somfy awning via bond bridge. They work fine but aren't convenient when I am outside.)

To use this with your own awning you need to:
(a) clone or copy this index.html
(b) change these three constants:
          1) the ip address of your bond bridge
          2) the bond token
          3) the somfy awning device id
          (all of those are obtainable from the "bond home" app you probably have installed)
          
  (c) find a simple way to host the index page. I'm obviously using github.      
    If you are using IOS you can save the page to your homescreen (like any other website)      
          

You will find useful information at the bond api docs site:

http://docs-local.appbond.com/#section/Getting-Started/Check-Bond-Version
