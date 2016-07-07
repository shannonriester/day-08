```JavaScript
  1  console.log(String(undefined));
  2  console.log(String(null));
  3  console.log(String(true));
  4  console.log(String(false));
  5  console.log(String(""));
  6  console.log(String("1.2"));
  7  console.log(String("one"));
  8  console.log(String(0));
  9  console.log(String(-0));
  10  console.log(String(NaN));
  11  console.log(String(Infinity));
  12  console.log(String(-Infinity));
  13  console.log(String(1));
  14  console.log(String({}));
  15  console.log(String([]));
  16  console.log(String(12));
  17  console.log(String('something'));
  18  console.log(String(function(){}));
```
1. undefined
2. null
3. true
4. false
5.
6. 1.2 (as a string)
7. one (as a string)
8. 0 (as a string)
9. 0 (as a string)
10. NaN (string)
11. Infinity (string)
12. -Infinity (string)
13. 1 (string)
14. [object Object]
15. undefined
16. 12 (string)
17. something (string)
18. function () {} (string)

  ```JavaScript
    1  console.log(Number(undefined));
    2  console.log(Number(null));
    3  console.log(Number(true));
    4  console.log(Number(false));
    5  console.log(Number(""));
    6  console.log(Number("1.2"));
    7  console.log(Number("one"));
    8  console.log(Number(0));
    9  console.log(Number(-0));
    10  console.log(Number(NaN));
    11  console.log(Number(Infinity));
    12  console.log(Number(-Infinity));
    13  console.log(Number(1));
    14  console.log(Number({}));
    15  console.log(Number([]));
    16  console.log(Number(12));
    17  console.log(Number('something'));
    18  console.log(Number(function(){}));
  ```
  1. NaN (as a number)
  2. 0
  3. 1
  4. 0
  5. 0
  6. 1.2 (as a number)
  7. NaN
  8. 0
  9. -0
  10. NaN (number)
  11. Infinity (number)
  12. -Infinity (number)
  13. 1 (number)
  14. Nan (number)
  15. 0
  16. 12 (number)
  17. NaN (number)
  18. NaN (number)

  ```JavaScript
    1  console.log(Boolean(undefined));
    2  console.log(Boolean(null));
    3  console.log(Boolean(true));
    4  console.log(Boolean(false));
    5  console.log(Boolean(""));
    6  console.log(Boolean("1.2"));
    7  console.log(Boolean("one"));
    8  console.log(Boolean(0));
    9  console.log(Boolean(-0));
    10  console.log(Boolean(NaN));
    11  console.log(Boolean(Infinity));
    12  console.log(Boolean(-Infinity));
    13  console.log(Boolean(1));
    14  console.log(Boolean({}));
    15  console.log(Boolean([]));
    16  console.log(Boolean(12));
    17  console.log(Boolean('something'));
    18  console.log(Boolean(function(){}));
  ```

  1. false
  2. false
  3. true
  4. false
  5. false
  6. true
  7. true
  8. false
  9. false
  10. false
  11. true
  12. true
  13. true
  14. true
  15. true
  16. true
  17. true
  18. true
