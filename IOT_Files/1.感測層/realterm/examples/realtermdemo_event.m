function realtermdemo_event(varargin)
% Sample event handle for Realterm ActiveX control.
% The event handler displays 
%  a text message in the MATLAB command window when the event is fired.
%
%  See also registerevent unregisterevent RealtermDemo

varargin{:}  %show everything
eventname = varargin{end}
