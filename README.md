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
  
  
            

using nodejs as a proxy with a simple vanilla javascript and html page

- unfortunately the approach above will work from a browser with cors disabled but you are likely to run into problems. 
This is because the bond bridge expects http. Curl works fine with the curl examples shown on the doc site but chokes when you try from a localhost on the same network.  

So, I dusted off an old raspberry Pi and use that as a proxy server.  See the proxy2bond.js  and index4proxy.html files.


 
  
    If you are using IOS you can save the page to your homescreen (like any other website)      
          

You will find useful information at the bond api docs site:

http://docs-local.appbond.com/#section/Getting-Started/Check-Bond-Version
