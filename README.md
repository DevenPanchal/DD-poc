# DD-poc
----------


### Required Installations
----------
You will need nodejs (> v8) and npm (> v5) installed on your machine.

If you don't want to do this and want a containerized application, skip this and jump to Run in a docker container instructions. The docker container comes with the correct versions of node and npm installed.


### Run on a local machine
----------
To run locally -
```
npm start
```
or
```
node server.js
``` 


### Test on a local machine
----------
We use the Mocha test framework for Javascript
First run the server using the above instructions. 
To test -
```
npm test
```
or
```
mocha
```


### Run in a docker container
----------
For this you will need docker installed. Refer to https://docs.docker.com/engine/installation/ for instructions.
This repository contains a Dockerfile that can be used to build a docker image.
If you want to try out with a prebuilt latest stable image (This is autobuilt with the latest code. Not waiting for Jenkins CI passes), follow instructions below:
```
git pull devendocker/dd-poc:latest
docker run -it -p 8010:8081 devendocker/dd-poc:latest
```
The app server runs on port 8081. This port is exposed in the dockerfile. We need to map it to an appropriate port on the host. In this case, 8010, but you can choose what you want. If you are using docker on Virtualbox or Vmware, make sure have port forwarding set up for 8010.

#### Other useful commands:

If you want to start the container with a bash process:
Note: This will override the default container behviour. And you will have to manually run the application.
```
docker run -it -p 8010:8081 devendocker/dd-poc:latest
```

If you want to attach to the already running container:
```
docker attach <CONTAINER_NAME>
```


### Run on Heroku ( a cloud Application Platform)
----------
To deploy and run on heroku, you will need your Heroku account credentials.
You will also need to install heroku cli tools as outlined here: https://devcenter.heroku.com/articles/heroku-cli#debian-ubuntu

```
heroku create
```
Note the name of the app created using the above command.

You can also give a custom name you desire for your app. Use the below commnd instead if you want this.
```
heroku create your_app's_unique_name
```

In either case, use the app name in place of <APP_NAME> in the next command. 
```
heroku git:remote -a <APP_NAME>
git push heroku master
heroku ps:scale web=1
heroku open
```

#### Here is my app on heroku:  https://dd-poc.herokuapp.com/. This is autobuilt with the latest code. (Not waiting for Jenkins CI passes.)


### CI/CD infrastructure (internal)
----------
Jenkins
Heroku
Docker
