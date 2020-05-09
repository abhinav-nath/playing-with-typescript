# How to run TypeScript code
Compile the **.ts** file using the typescript compiler **tsc**.\
<br />Below command will generate a *helloworld.js* file\
**```tsc helloworld.ts```**

Run the JavaScript code\
**```node helloworld.js```**\
<br />
By default **tsc** will still generate a **.js** file even when there are compilation errors.\
In order to prevent it, use the following command:
<br />**```tsc --noEmitOnError helloworld.ts```**

**get** and **set** **accessors** are available from **ES5** and higher, in order to compile for **ES5** and above use following command:
<br />**```tsc --target es5 --noEmitOnError helloworld.ts```**

Instead of providing various flags to the **tsc** command, we can create a **tsconfig.json** file which contains all the configurations.\
<br />
In order to create the **tsconfig.json** file, run following command:
<br />**```tsc --init```**

A sample **tsconfig.json** file will be created in which you can specify the configurations that you need.