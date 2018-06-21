function [Temp,Sensors]=ReadTempLoggerFile(fname)
% ReadTempLoggerFile Read temperatures from LM75/TMP100 sensors capture file
% Reads data from a capture file produced by the I2C-2-PC adaptor from 
% Temp is an array of temps, 1 column per active sensor
% up to 24 temperature sensors, TMP100, LM75 etc.
%
% see also:

% 10:27AM 09/05/2003 SJB $Revision$ $Date$
%switch nargin
%  case 0, ReadTempLoggerFile_SelfTest; return;
%  case 1,
%  otherwise error('too many arguments')
%end % switch

MAXNUMBLOCKS=inf; % set a limit on the number of readings to process

fid=fopen(fname,'r');
if fid==0
  error('Unable to open file')
  return
end;%if

% note that if
  [D,n]=fscanf(fid,'%2d %4x',[2,inf]); %retry rest of file
if n==0 % might have been a read problem caused by a partial first line
  fgetl(fid); % read first line to discard it
  [D,n]=fscanf(fid,'%2d %4x',[2,inf]); %retry rest of file
end;%if

fclose(fid);
n;
D=D'; %make into col vectors
Channel=D(:,1);
TempCount=D(:,2); %temp number from sensor


ChannelsPresent=unique(Channel); %find channels in the data file
NumChannels=length(ChannelsPresent);

%go to start of first full block of channels

iFirstChannel=find(Channel(1:NumChannels)==ChannelsPresent(1)); %finds start of first full block
NumBlocks=floor( (length(Channel)-iFirstChannel+1) / NumChannels);
NumBlocks=min(MAXNUMBLOCKS, NumBlocks); % only process up to max
CompleteDataLength=NumChannels* NumBlocks;
LastPosInFile= iFirstChannel+CompleteDataLength; % can be used to resume reading later from this psoition

range=iFirstChannel:iFirstChannel+CompleteDataLength-1;
Channel=Channel(range);
TempCount=TempCount(range);

%put all the temepratures into a matrix 
TempCount=reshape(TempCount,NumChannels,NumBlocks)';

% Now select data for sensors which are present
TFFFF=(TempCount==65535); %missing sensors will return 0xFFFF
PresentSensors= ~all(TFFFF,1); %if all data points are 0xFFFF, (-0.0039 degrees) then sensor is missing
iPresentSensors=find(PresentSensors);

ChannelsWorking=ChannelsPresent(iPresentSensors);
NumWorkingChannels=length(ChannelsWorking);
TempCount=TempCount(:,iPresentSensors); 

Temp= TempCount2Temp(TempCount);
Sensors=ChannelsWorking;

function [Temp]=TempCount2Temp(TempCount)
% TempCount2Temp  Convert LM75/TMP100 sensor data to actual temperatures
%
% see also:

% 12:10PM 09/05/2003 SJB 

iNegativeTemps=find(TempCount>=32768);
TempCount(iNegativeTemps)=TempCount(iNegativeTemps)-65536;

kTemp= 128/32768;
Temp= TempCount * kTemp;



%<begin SelfTest>--------------------------------------------------
function ReadTempLoggerFile_SelfTest
%
%dbstop if error; %so you can inspect vars when it crashes
fprintf(1,'\n--------------Testing ReadTempLoggerFile: Tests that should work  --------------------\n');
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

fprintf(1,['-------- Seems to have worked OK',' -----------\n']);
