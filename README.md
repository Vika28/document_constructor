# document_constructor
## To run project on your computer, type in terminal:

1. git clone https://github.com/Vika28/document_constructor.git

### To run the frontend part in terminal:
(For running frontend part you have to be sure that you have installed Node.js - for this project I am using nodejs v16.13.2)
2. cd frontend
3. npm install
4. npm start

### To run the backend part in terminal:
(For this project I am using jdk 17)
For running backend
5. open directly in Intellij IDEA folder backend
6. Click on button Run in your IDE

## !Important! 
You can get problem with CORS policy running backend part and frontend part locally, so you are not able to get response after request. That's why actual version of code on github will make request to temporary deployed server with backend code. So, it means that you need to run locally only frontend part(options 1-4). 

FYI:Link for making request is in the frontend folder, folder src, file URL.ts. So, you can change link to requested server there(there is a commented link to a local host).  
For developing I use localhost, but I avoid the CORS policy by typing next command in Terminal:
open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security

So, in this way you can use URL localhost for making request from frontend part 
