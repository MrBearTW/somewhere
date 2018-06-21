RealTerm: Serial Terminal Program

Subscribe to the RSS Newsfeed for development releases: http://realterm.sf.net/rss.xml
This is the primary notification of changes

F1 Key brings up help and links

Help information, and downloads http://realterm.sourceforge.net

Development versions are be available from: http://www.i2cchip.com/realterm

See CHANGE_LOG.TXT for revision history
See EXAMPLES directory for applications and usage from various languages

Use the tooltips to get hints about what everything does
F1 for help. Right-click menu for some special functions.

Join the mailing list from the sourceforge project page to be notified of
updates.
---------------------------------------------------------------------------
Realterm defaults to NO HANDSHAKING or Flow Control.
This is the best option if you are trying to get something/anything to
happen. Once you can talk to your device it is nore common to use some sort
of handshaking such as RTS/CTS. This can be set on the port tab, or from
the command line.
---------------------------------------------------------------------------
How do I save settings?

You don't. 
You create a new shortcut, and edit the commandline. Most everything can be
set from the commandline, this is quick and easy. 
Look at the properties of the example shortcuts.

---------------------------------------------------------------------------
The installer should register the automation server, and install the special
hex fonts for you. If you need to do these manually:

Registering the activeX interface:
Start->Run->
realterm /regserver
(Nothing happens)

you can unregister with
realterm /unregserver

If it all goes wrong, or when we change the activex interface you might need 
to unregister, then re-register, before the new functions are visible.

---------------------------------------------------------------------------
The special fonts "Terminal Hex" are very useful fonts for editors. They 
contain every 8 bit char, so you can see the hidden control codes that can
create havoc in files, and go undetected.

The hex font file is in the Realterm directory, and can be installed from
start->settings->controlpanel->fonts
---------------------------------------------------------------------------
Using the BEL PIC Programmer Interface:

Unless you are going to use this you can ignore this section....
To use this you need the DLPortIO drivers. For win9X the drivers just run.
For NT/2K/XP the driver has to be installed. 
Run INSTALL.EXE in the realterm source dir. See DLPORTIO.PDF for more info
---------------------------------------------------------------------------


Known issues:

You have to click on the terminal window, or the keystrokes go to the 
tabcontrols  (obvious really)

When dumping a file to a port the EOF char (0x1A) is swallowed (also obvious)
