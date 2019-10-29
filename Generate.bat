@echo off

cd java
call mvn install
cd ..

cd js
call Generate.bat
cd ..

cd dotnet
call Generate.bat
cd ..

cd python
call Generate.bat
cd ..

cd r
call Generate.bat
cd ..

echo Finished
pause()