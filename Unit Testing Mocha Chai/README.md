<a href="https://github.com/tborges/JavaScript">&larr; JavaScript</a> / Unit Testing Mocha Chai
<br>
<br>
# Unit Testing using Mocha and Chai 
<small><b>[Mocha](https://mochajs.org/)</b> is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

<b>[Chai](http://www.chaijs.com/)</b> Chai is a BDD / TDD assertion library for Node.JS and the browser that can be delightfully paired with any javascript testing framework.

<b>Unit Test (one type of automated test)</b> 
A single piece of code (usually an object or a 
function) is tested, isolated from other pieces

<b>Test-Driven Development</b> 
TDD or Test-Driven Development is a process for 
when you write and run your tests.</br>
⋅⋅⋅<b>First:</b> Hand write a small test before the code<br>
⋅⋅⋅<b>Second:</b> Code the test and make the code to pass the test<br>
⋅⋅⋅<b>Third:</b> Repeat the process again with another module/part of the software

<b>Behavior-Driven Development</b>  
BDD or Behavior-Driven Development is a set of best 
practices for writing great tests. BDD can, and should be, 
used together with TDD and unit testing methods.

BDD Example:<br>
<b>Context</b> (is the "starting state” The test is written in plain English)<br>
⋅⋅⋅Given the account balance is $100<br>
⋅⋅⋅And the car is valid<br>
⋅⋅⋅And the machine contains enough money

<b>Event</b> (is the thing that the user does)<br>
⋅⋅⋅When the Account Holder requests $20

<b>Outcomes</b> (are the expected results of what the user does)<br>
⋅⋅⋅Then the ATM machine should dispense $20<br>
⋅⋅⋅And the account balance should be $80<br>
⋅⋅⋅And the card should be returned

</small>
<br>
<br>
<br>
<h4>Code below (Mocha’s BDD style functions)</h4>

![Unit Test - Basic Code](https://github.com/tborges/JavaScript/blob/master/Unit%20Testing%20Mocha%20Chai/images/basic-code.png)
<br>
<br>
<br>
<h4>Passed</h4>

![test](https://github.com/tborges/JavaScript/blob/master/Unit%20Testing%20Mocha%20Chai/images/Add-unit-test-Two-Tests-Associated-Passed.png)
<br>
<br>
<br>
<h4>Failed example</h4>

![Failed](https://github.com/tborges/JavaScript/blob/master/Unit%20Testing%20Mocha%20Chai/images/first-unit-test-failed.png)
<br>
<br>
<br>


<b>Conclusion:</b>  
Unit Testing gives you the WHAT.<br>
Test-Driven Development gives you the WHEN. <br>
Behavior Driven-Development gives you the HOW.<br>
<br>
"Although you can use each individually, you should combine them for best results as they complement each other very nicely."
