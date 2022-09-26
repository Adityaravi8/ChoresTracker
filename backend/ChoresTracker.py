from flask import Flask, render_template, request
from flask_mysqldb import MySQL
import yaml

app = Flask(__name__)
mysql = MySQL(app)

#Database Config
db = yaml.safe_load(open('dbConfig.yml'))
app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password']
app.config['MYSQL_DB'] = db['mysql_db']

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':

        #Fetch the data from the form
        userData = request.form
        name_id = userData['name_id']
        chore_id = userData['chore_id']
        date = userData['date']
        
        mycursor = mysql.connection.cursor()
        mycursor.execute("SELECT Name FROM people WHERE ID = %s", [name_id])
        name = mycursor.fetchone()
        mycursor.execute("SELECT Chore FROM chores WHERE id = %s", [chore_id])
        chore = mycursor.fetchone()
        mycursor.execute("INSERT INTO chorestracker(People_ID, Chores, Date) VALUES(%s,%s,%s)", [name, chore, date])
        mysql.connection.commit()

    return 'Success'

@app.route('/AddPeople', methods = ['GET', 'POST'])
def addPeople():

    if request.method == 'POST':

        userName = request.form
        name = userName['name']

        mycursor = mysql.connection.cursor()

        mycursor.execute("INSERT INTO people(Name) VALUES(%s)", [name])
        mysql.connection.commit()
    
    return 'Success'

@app.route('/AddChores', methods = ['GET', 'POST'])
def addChore():

    if request.method == 'POST':

        choresData = request.form
        chore = choresData['chore']

        mycursor = mysql.connection.cursor()

        mycursor.execute("INSERT INTO chores(Chore) VALUES(%s)", [chore])
        mysql.connection.commit()
    
    return 'Success'

@app.route('/ViewPeople')
def peoples():

    mycursor = mysql.connection.cursor()

    mycursor.execute("SELECT Name FROM people")

    peopleTable = mycursor.fetchall()

    
    # return render_template("people.html", peopleTable=peopleTable)
    return(peopleTable)


@app.route('/ViewChores')
def chores():


    mycursor = mysql.connection.cursor()

    mycursor.execute("SELECT Chore FROM chores")

    choresTable = mycursor.fetchall()

    return render_template("chores.html", choresTable=choresTable)


@app.route('/ViewChorestracker')
def chorestracker():

    mycursor = mysql.connection.cursor()

    mycursor.execute("SELECT * FROM chorestracker")

    chorestrackerTable = mycursor.fetchall()

    return render_template("chorestracker.html", chorestrackerTable=chorestrackerTable)

    



if __name__ == '__main__':
    app.run(debug=True)





















