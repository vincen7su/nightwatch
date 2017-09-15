### Nightwatch + webdriver-manager
`yarn start` to  start selenium server  
`yarn stop` to shudwon selenium server  

### Headless Selenium Testing on Ubuntu Server
Install Xvfb (X windows virtual framebuffer)   
Add following script into package.json
```shell
xvfb-run --server-args=\"-screen 0 1920x1080x24\" webdriver-manager start
```
