# How to run TypeScript code
Compile the **.ts** file using the typescript compiler **tsc**.\
<br />Below command will generate a *helloworld.js* file\
**```tsc helloworld.ts```**

Run the JavaScript code\
**```node helloworld.js```**\
<br />
By default **tsc** will still generate a **.js** file even when there are compilation errors.\
In order to prevent it, use the following command:
<br />**```tsc -noEmitOnError helloworld.ts```**
