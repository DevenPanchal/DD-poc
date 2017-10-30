# DD-poc
----------

### Run
----------
To run locally -
```
node server.js
```

### Test
----------
We use the Mocha test framework for Javascript
To test -

```
mocha
```

### Run on Heroku
----------
To deploy and run on heroku, you will need your Heroku account credentials.
You will also need to install heroku cli tools as outlined here: https://devcenter.heroku.com/articles/heroku-cli#debian-ubuntu

```
heroku create
```

Note the name of the app created using the above command.
Use it in place of <APP_NAME> 
```
heroku git:remote -a <APP_NAME>
git push heroku master
heroku ps:scale web=1
heroku open
```
