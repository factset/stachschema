@echo off	

setlocal	
call :Generate docs	
call :Generate generate-examples	

echo Finished	
pause()	
exit /B %ERRORLEVEL%	

:Generate	
set folder=%~1	
echo %folder%: start	
cd %folder%	
call Generate.bat	
cd ..	
echo %folder%: end	
exit /B 0 