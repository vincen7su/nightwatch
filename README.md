### Nightwatch + webdriver-manager
`yarn start` to  start selenium server  
`yarn stop` to shudwon selenium server  

### Headless Selenium Testing on Ubuntu Server
Install Xvfb (X windows virtual framebuffer)   
`sudo apt-get install xvfb`  
Add following script into package.json
```shell
xvfb-run --server-args=\"-screen 0 1920x1080x24\" webdriver-manager start
```

### Remote Control Xvfb Virtual Desktop
Install x11vnc  
`sudo apt-get install x11vnc`  

Host VNC Server
```shell
x11vnc -listen 172.30.0.71 -rfbport 5900 -noipv6 -passwd password -display :0 -forever
```

Use VNC software connect to server.  
For example, TigerVNC for Windows. http://www.tightvnc.com/
