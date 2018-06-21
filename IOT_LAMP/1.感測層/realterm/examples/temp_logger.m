function []=Temp_logger(fname)
% Temp_logger Plot temperatures from LM75/TMP100 sensors
% Reads and plots data from a capture file produced by the I2C-2-PC adaptor from 
% up to 24 temperature sensors, TMP100, LM75 etc.
%
% see also:

% 10:27AM 09/05/2003 SJB $Revision$ $Date$
%switch nargin
%  case 0, Temp_logger_SelfTest; return;
%  case 1,
%  otherwise error('too many arguments')
%end % switch

PAUSETIME=10; %

fname='C:\l\D3\a\realterm\examples\temp_logger_data.dat';
StartTime=filedatenum(fname);
f=figure;
title('Temperatures')

while 1==1
  [Temp,Sensors]=ReadTempLoggerFile(fname);
  PlotTemp(f,Temp,Sensors);
  duration=length(Temp) * 1 * (1/24/3600); %in secs
  plotdatetime(StartTime,StartTime+duration);
  refresh(f);
  print(f,'-dpng','-r 90','temp_graph');
  % upload graph to the web server using ftp (most) 
  %beware of the amount of traffic this can generate 10k every 5 secs is 5G/month
  % ftp is standard on windows, but uses a file of commands (temp_graph_ftp.txt)
  !ftp -i -s:temp_graph_ftp.txt www-upload.quicksilver.net.nz
  %upload to sourceforge using scp 
  %!pscp -pw vermin *.png crun@realterm.sf.net:/home/groups/r/re/realterm/htdocs/
  pause(PAUSETIME);
end; %while


function []=PlotTemp(f,Temp,Sensors)
% PlotTempFile
%
% see also:

% 1:19PM 09/05/2003 SJB 

NumSensors=length(Sensors);
figure(f)
hold off;
for i=[1:NumSensors]
  plot(Temp(:,i));
  hold on;
end; %for
legend=int2str(Sensors);


%<begin SelfTest>--------------------------------------------------
%function Temp_logger_SelfTest
%
%dbstop if error; %so you can inspect vars when it crashes
%fprintf(1,'\n--------------Testing Temp_logger: Tests that should work  --------------------\n');
%if
%  warning('failed trying to  at(1)');
%  keyboard;
%end;%if
%fprintf(1,'\n-------------- Tests that SHOULD throw errors  --------------------\n');
%try

%  warning('failed with invalid state number 4');
%  keyboard;
%catch
%  fprintf(1,[lasterr,'\n^Should have errored: \n']);
%end; %try

%fprintf(1,['-------- Seems to have worked OK',' -----------\n']);
