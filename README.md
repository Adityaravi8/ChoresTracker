# ChoresTracker

Keep track of your chores. In order to use this application, you must install react and install the list of python packages used in this program.

Flask Api Setup:

Python Dependencies "requirements.txt":
click==8.1.3
colorama==0.4.6
Flask==2.2.2
Flask-MySQLdb==1.0.1
itsdangerous==2.1.2
Jinja2==3.1.2
MarkupSafe==2.1.1
mysql-connector-python==8.0.31
mysqlclient==2.1.1
Werkzeug==2.2.2

Install Packages using pip from the same directory as the requirements.txt file:

pip install -r requirements.txt

Change into the server directory and use the following command to run the api:

python ChoresTracker.py

Run Frontend:

Change into the client directory and use the command below to start the react app:

npm start

You will need to setup a mysql database and connect the API to the database. The sql folder contains the file to create the database called CreateDB and another file that creates the table used in this application called CreateTables. The ChoresTracker.py file contains the database configuration. Change the host,user,password to the host,user and password you created in your local drive.
