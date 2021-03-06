// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype property "getUTCMinutes" has { DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.21/S15.9.5.21_A1_T3.js
 * @description Checking DontEnum attribute
 */

if (Date.prototype.propertyIsEnumerable('getUTCMinutes')) {
  $ERROR('#1: The Date.prototype.getUTCMinutes property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "getUTCMinutes") {
    $ERROR('#2: The Date.prototype.getUTCMinutes has the attribute DontEnum');
  }
}


