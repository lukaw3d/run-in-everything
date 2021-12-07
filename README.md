Run some JS in Node.js, Firefox, Chromium, WebKit (Safari)

```sh
yarn && yarn test
```

Output
```sh
# $ node node.mjs



==============================
Node.js v14.18.2
Run this everywhere
Error: WrappedErr: Error: err
Error: WrappedErr: Error: err
    at Timeout._onTimeout (/home/luka/oasis/rare/tmp_my/run-in-everything/run.js:10:26)
    at listOnTimeout (internal/timers.js:557:17)
    at processTimers (internal/timers.js:500:7)
Stack before async:
Error
    at run (/home/luka/oasis/rare/tmp_my/run-in-everything/run.js:5:28)
    at file:///home/luka/oasis/rare/tmp_my/run-in-everything/node.mjs:5:1
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at async Loader.import (internal/modules/esm/loader.js:178:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)



# $ playwright test --browser chromium
#
# Running 1 test using 1 worker
#
#  ✓  [chromium] › playwright.spec.mjs:4:1 › Run (300ms)



==============================
chromium 98.0.4695.0
Run this everywhere
Error: WrappedErr: Error: err
Error: WrappedErr: Error: err
    at eval (eval at evaluate (:3:2389), <anonymous>:8:26)
Stack before async:
Error
    at run (eval at evaluate (:3:2389), <anonymous>:3:28)
    at t.default.evaluate (<anonymous>:3:2412)
    at t.default.<anonymous> (<anonymous>:1:44)


#  1 passed (619ms)
# $ playwright test --browser firefox
#
# Running 1 test using 1 worker
#
#  ✓  [firefox] › playwright.spec.mjs:4:1 › Run (1s)



==============================
firefox 94.0.1
Run this everywhere
Error: WrappedErr: Error: err
run/</<@debugger eval code line 3 > eval:8:26
setTimeout handler*run/<@debugger eval code line 3 > eval:6:15
run@debugger eval code line 3 > eval:5:9
evaluate@debugger eval code:3:2412
@debugger eval code:1:44

Stack before async:
run@debugger eval code line 3 > eval:3:28
evaluate@debugger eval code:3:2412
@debugger eval code:1:44
evaluateFunction@chrome://juggler/content/content/Runtime.js:381:60
callFunction@chrome://juggler/content/content/Runtime.js:103:41
_onMessage@chrome://juggler/content/SimpleChannel.js:165:37
receiveMessage@chrome://juggler/content/SimpleChannel.js:16:42



#  1 passed (2s)
# $ playwright test --browser webkit
#
# Running 1 test using 1 worker
#
#  ✓  [webkit] › playwright.spec.mjs:4:1 › Run (440ms)



==============================
webkit 15.4
Run this everywhere
Error: WrappedErr: Error: err
@
Stack before async:
@
asyncFunctionResume@[native code]
run@
evaluate@
@
callFunctionOn@


#  1 passed (763ms)
```
