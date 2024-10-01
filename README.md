# ChoresTracker

# Keep track of your chores. In order to use this application, you must install react and install the list of python packages used in this program.

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
python-dotenv==1.0.1

Install Packages using pip from the same directory as the requirements.txt file:

`pip install -r requirements.txt`

# Create a database in MySQL

## Connect database to api

1. Create a .env file in the server directory containing the following code and replace the placeholders with the corresponding details of your database:

`MYSQL_HOST=<Database Host>`
`MYSQL_USER=<Database User>`
`MYSQL_PASSWORD=<Database Password>`
`MYSQL_DB=<Database Name>`

2. Create a .env file in the client directory containing the following code and replace the placeholder with the actual URL of the flask API:

`REACT_APP_API_URL=http://<API URL>`

# Change into the server directory and use the following command to run the api:

`python ChoresTracker.py`

Run Frontend:

# Change into the client directory to install and run the program:

1. `npm install`
2. `npm start`
