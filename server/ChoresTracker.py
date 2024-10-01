from flask import Flask, request
from flask_mysqldb import MySQL
from dotenv import load_dotenv
import os
from flask_cors import CORS

app = Flask(__name__)
mysql = MySQL(app)
CORS(app)

load_dotenv()
#Database Config
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')

@app.route('/InsertChoresTracker', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':

        #Fetch the data from the form
        userData = request.json
        name_id = userData['name_id']
        chore_id = userData['chore_id']
        date = userData['date']
        
        mycursor = mysql.connection.cursor()
        mycursor.execute("SELECT Name FROM people WHERE ID = %s", [name_id])
        name = mycursor.fetchone()
        mycursor.execute("SELECT Chore FROM chores WHERE id = %s", [chore_id])
        chore = mycursor.fetchone()
        mycursor.execute("INSERT INTO chorestracker(Person, Chores, Date) VALUES(%s,%s,%s)", [name, chore, date])
        mysql.connection.commit()

    return 'Success'

@app.route('/AddPeople', methods = ['GET', 'POST'])
def addPeople():

    if request.method == 'POST':

        userName = request.json
        name = userName['name']

        mycursor = mysql.connection.cursor()

        mycursor.execute("INSERT INTO people(Name) VALUES(%s)", [name])
        mysql.connection.commit()
    return 'Success'

@app.route('/AddChores', methods = ['GET', 'POST'])
def addChore():

    if request.method == 'POST':

        choresData = request.json
        chore = choresData['chore']

        mycursor = mysql.connection.cursor()

        mycursor.execute("INSERT INTO chores(Chore) VALUES(%s)", [chore])
        mysql.connection.commit()

    return 'Success'

@app.route('/ViewPeople')
def peoples():

    mycursor = mysql.connection.cursor()

    mycursor.execute("SELECT * FROM people")

    peopleTableEntries = mycursor.fetchall()
    peopleResults = []
    for people in peopleTableEntries:
        personEntry = {}  
        personEntry['id'] = people[0] 
        personEntry['name'] =  people[1]
        peopleResults.append(personEntry)

    return peopleResults

@app.route('/ViewChores')
def chores():


    mycursor = mysql.connection.cursor()

    mycursor.execute("SELECT * FROM chores")

    choresTableEntries = mycursor.fetchall()
    choreResults = []

    for chores in choresTableEntries:
        choreEntry = {}
        choreEntry['id'] = chores[0]
        choreEntry['chore'] = chores[1]
        choreResults.append(choreEntry)
    
    return choreResults


@app.route('/ViewChoresTracker')
def chorestracker():

    mycursor = mysql.connection.cursor()

    mycursor.execute("SELECT * FROM chorestracker")

    choresTrackerTable = mycursor.fetchall()
    chorestrackerResults = []

    for chorestracker in choresTrackerTable:
        choresTrackerEntry = {}
        choresTrackerEntry['Person'] = chorestracker[0]
        choresTrackerEntry['Chores'] = chorestracker[1]
        choresTrackerEntry['Date'] = chorestracker[2]
        chorestrackerResults.append(choresTrackerEntry)
    
    return chorestrackerResults

    



if __name__ == '__main__':
    app.run(debug=True)





















