function []=RealtermDemo()
% RealtermDemo: Simple test and demo of Realterm
% http://realterm.sourceforge.net
% This demo uses the I2C2PC adaptor to read temperature from TMP100 sensor
% chip, or many other I2C temperature sensors.
% see http://www.i2cchip.com   (for adaptor)
% http://www.ti.com  (for TMP100 chip)
% see also:

% 8:19PM 07/11/2003 SJB $Revision: 1.0 $ $Date: 2003-07-11 21:56:44+12 $

hrealterm=actxserver('realterm.realtermintf'); % start Realterm as a server
% recent ML documents also refer to actxGetRunningServer to connect to a
% running instance. This does not exist in R2006a.
 
%-------------------------
% Only use these lines to see what properties and methods realterm has.....
fprintf(1,'\nProperties of Realterm\n\n');
get(hrealterm) %List all properties. Properties are used by assignment property=value

try
    %In early versions of ML, you write a number to enumerations. In later versions you have to assign a string with the value. 
    set(hrealterm) %In later versions of matlab, this will show you what possible values the enumerations can take
catch
end
 
fprintf(1,'\n\nMethods of Realterm\n\n');
invoke(hrealterm) %List all methods so the user can see them. Methods are used with "INVOKE" 


%Events working from V2.0.0.45 Check changelog for current status of Events.
fprintf(1,'\n\nEvents of Realterm\n\n');
hrealterm.events   %list the events of Realterm
%hrealterm.registerevent('realtermdemo_event')
%hrealterm.eventlisteners   %show what they are linked to...

%note that most events have a property that disables them. Mostly they are
%disabled by default!
if 1==0 %lets not try callbacks yet.....
hrealterm.TimerPeriod=3000; %period in ms
hrealterm.EnableTimerCallbacks=1
hrealterm.CaptureCountForCallback=50  
hrealterm.EnableCaptureCallbacks=1
end
%------------------------------
 
%--- Now set up the port values to what you want
% Note that ports can be remote telnet devices to access hardware over the
% net, or to make testing easier
hrealterm.baud=57600;
hrealterm.flowcontrol=2; %RTS/CTS handshaking best for I2C2PC adaptor
hrealterm.PortOpen=1; %open the comm port
is_open=(hrealterm.PortOpen~=0); %check that it opened OK

%---- And fiddle about with the Realterm window to suit your needs
hrealterm.caption='Matlab Realterm Server';

hrealterm.LinefeedIsNewline=1; %tidier display
hrealterm.HalfDuplex=1;  %want to see what we send on screen for easy debugging
%hrealterm.displayas=2; %show hex in terminal window
%hrealterm.windowstate=1; %minimized
hrealterm.CaptureFile='c:\temp\matlab_data.dat'

%----- It is useful to pre-load some common strings into the SEND tab
invoke(hrealterm,'AddCannedSendString','This is added to the 1st SendString Dropdown',1)
invoke(hrealterm,'AddCannedSendString','This is also added to the 1st SendString Dropdown',1)
invoke(hrealterm,'AddCannedSendString','This is added to the 2nd SendString Dropdown',2)

%-------------

invoke(hrealterm,'startcapture'); %start capture
%now send some commands....
invoke(hrealterm,'putstring','S 90 01 60 W 00 P'); %Init the TMP100. I2C Command=[Start][Add 0x90][point to config register][set config for max resolution][move point to temperature register]
invoke(hrealterm,'newlineterminal'); %make screen neater

CharsBeforeRequest=hrealterm.charcount;
invoke(hrealterm,'putstring','S 91 02 P'); % read the 2 byte temperature from TMP100 (25degC will return the hex string 1910)
pause(0.1); %wait for chars to return from adaptor
CharsReceived=hrealterm.charcount-CharsBeforeRequest;
%-------------------
% Converting numbers to Hex:
% The I2C2PC adaptor uses hex values. To convert numbers to hex use these
% commands
%value=11;
%sprintf('%02X',value); %For single byte values
%sprintf('%04X',value); %For two byte values
%-------------------
%Now you could read the data from the capture file, and convert it to a
%temperature. Note that Matlab happily reads data from an open file, so you
%can keep adding data to the file and reading the new data at the end. This
%makes datalogging easy

%do what you want here
fprintf(1,'\n\nTry what you want here. Type RETURN to end demo and close realterm\n')
keyboard

%Now close down in an orderly fashion
invoke(hrealterm,'stopcapture');

try %try to close any we can in case they are faulty.
  invoke(hrealterm,'close'); 
  delete(hrealterm);
catch
  fprintf('unable to close realterm')
end; %try





