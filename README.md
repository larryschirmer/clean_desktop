# clean_desktop

![](https://github.com/larryschirmer/clean_desktop/raw/master/clean_desktop.gif)
[HighRes Video Version - hosted on my evernote](https://www.evernote.com/l/ACUCR11Q6zxIu55jYEc6fNhy6ehR3aC1HCI)

## Project Desciption 

I often work of different projects at the same time that take the working space on my desktop. I wanted to dedicate the desktop to each project. 

## How it Works

Each project has a dedicated folder that contains:
1. A folder for all the files
2. The Node.js script
3. The Node modules

I have a shortcut setup to open a terminal window at a highlighted/selected folder

I have two commands setup right now that either move all the files off the desktop and into the selected folder's _files_ folder or copies all the files in the selected folder to the desktop. 

This is with the exception of a _Desktops_ alias that I use as Desktop Manager. When the command is called to move all of the files on the desktop, it ignores this file.

The commands:

```
$ ./l checkout
$ ./l recall
```
