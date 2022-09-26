import mysql.connector
import yaml

db = yaml.safe_load(open('dbConfig.yml'))

trackerdb = mysql.connector.connect(host=db['mysql_host'], user=db['mysql_user'], password=db['mysql_password'], database=db['mysql_db'])

mycursor = trackerdb.cursor()

# mycursor.execute("CREATE TABLE ChoresTracker(Chores varchar(200), Completed int(10))")



# ChoresTracker = [("Walking dog", 2), ("Washing dishes", 5), ("Vaccuming floor", 3), ("Shopping", 5), ("Watering plants", 6), ("Cooking", 9)]

# mycursor.executemany("INSERT INTO ChoresTracker(Chores, Completed) VALUES(%s, %s)", ChoresTracker)

# trackerdb.commit()



# mycursor.execute("SELECT Chores FROM ChoresTracker")

# result = mycursor.fetchone()

# result = mycursor.fetchall()




# mycursor.execute("UPDATE ChoresTracker SET Chores = 'Dusting house' WHERE Chores = 'Dusting House'") 

# trackerdb.commit()


chore = input("Chore: ")

choreComp = int(input("Completed: "))

ChoresTracker = [(chore, choreComp)]

mycursor.executemany("INSERT INTO ChoresTracker(Chores, Completed) VALUES(%s, %s)", ChoresTracker)

trackerdb.commit()











