import csv
import json

'''
PLEASE Note: you will not actually update the content within this file. This file simply runs a script to update the content itself.
To update the content, update the files in "content_csv"
converts the contents of a csv file to a json file that can be used by the 
website
'''
def read_csv_to_json(csv_path, save_path):
    
    #dictionary with column indexes as keys and column names as values
    column_dict = {}
    
    #dictionary with column names as values and arrays as values
    json_array = []
    
    with open(csv_path) as csv_file:
        
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        
        for row in csv_reader:
            
            if line_count == 0:
                for i, column_name in enumerate(row):
                    column_dict[i] = column_name
                    
                line_count += 1
            else:
                
                element_dict = {}
                for i, val in enumerate(row):
                    element_dict[column_dict[i]] = val
                json_array.append(element_dict)
                    
    my_json = json.dumps(json_array)         
    json_file = open(save_path, 'w')
    json_file.write(my_json)
    json_file.close()
        
#file that holds events
event_csv_path = "./content_csv/events.csv"
event_json_path = "./acp-app/src/content_json/events.json"
read_csv_to_json(event_csv_path, event_json_path)

#file that holds
faces_csv_path = "./content_csv/faces_of_austin.csv"
faces_json_path = "./acp-app/src/content_json/faces_of_austin.json"
read_csv_to_json(faces_csv_path, faces_json_path)