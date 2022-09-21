## Pseudocode for Mind Reader

### Assumptions:
  - Are there any assumptions?


### INIT: Define Variables
```
2. MAIN MOTOR UNIT = motorUnit
    - Motorized device that operates/pulls the door open.  
```


### FUNCTION:
 
```js
FUNCTION checkDoorStatus:
  IF door = open
    THEN
      do not accept passcode
        END
  ELSE 
    door = closed
      THEN
        accept passcode
          END
        
FUNCTION checkControlPanel
  IF controlPanel = not paired to motorUnit
    THEN
      END
  ELSE 
    controlPanel = paired to motorUnit
      accept passcode
        END

 FUNCTION checkPasscode:
  IF passcode entered = correct
    THEN
      open door motorUnit and clearMemory     
  ELSE 
    passcode entered = wrong  
      THEN
        alert user and clearMemory
          END
          
FUNCTION clearMemory
  IF wrong passcode is entered OR door has been opened
    THEN
      clearMemory
        END

 ```
 
 
 ### START:
 ```
 checkDoorStatus
 checkControlPanel
 checkPasscode
 
 controlPanel
 motorUnit
 ```
 
 
 ### END:
 ```
 clearMemory
 ```
![image](https://user-images.githubusercontent.com/101759410/191522587-49119355-1747-4173-bf3a-b0dbf96a8089.png)
