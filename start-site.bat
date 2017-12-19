start cmd /k "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
start cmd /k "cd client & ng serve"
choice /C X /T 5 /D X > nul
start cmd /k nodemon


