@echo off	

setlocal	
call :Generate docs	
call :Generate dotnet	
call :Generate go	
call :Generate java	
call :Generate js	
call :Generate python	
call :Generate r	

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