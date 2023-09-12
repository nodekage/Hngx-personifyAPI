# PROJECT DOCUMENTATION

## API Documentation

### OVERVIEW

This project is a simple REST API that allows CRUD (Create, Read, Update, Delete) operations on a "person" resource. It interfaces with a MongoDB database to store and retrieve person data.

### Base URL

The base URL for all API endpoints is: `http://localhost:8300/api`


### UML DIAGRAM

![UML DIAGRAM](https://github.com/nodekage/Hngx-personifyAPI/blob/main/Screenshot%20(665).png?raw=true)



## Setup Instructions

To set up and run this API locally, follow these steps:

1.  Clone the GitHub repository: [GitHub Repo Link](https://github.com/nodekage/Hngx-personifyAPI.git)
    
2.  Install Node.js and npm if not already installed.
    
3.  Install project dependencies:

    `npm install`
    
4.  Configure the MongoDB connection in `config/config.js`.
    
5.  Start the server:

     `npm start`
     
The API will be accessible at `http://localhost:8300/api`.

## Sample API Usage

### API Endpoints

#### Create a New Person

-   **Endpoint**: `POST /api/`
-   **Description**: Adds a new person to the database.
-   **Request Body**:
    -   Example:
                        `{"name": "John Doe"}`
                        
**Response**:

-   Status Code: 201 (Created)
-   Example Response:
                                      `{"_id": "person_id","name": "John Doe"}`


#### Get Person by ID

-   **Endpoint**: `GET /api/{id}`
-   **Description**: Retrieves details of a person by their unique ID.
-   **Response**:
    -   Status Code: 200 (OK)
    -   Example Response:
                                           `{"_id": "person_id","name": "John Doe"}`

-   **Status Codes**:
    -   404 (Not Found) if the person with the specified ID does not exist.

#### Update Person by ID

-   **Endpoint**: `PUT /api/{id}`
-   **Description**: Modifies details of an existing person by their unique ID.
-   **Request Body**:
    -   Example:
                         `{  "name": "Updated Name"}`
                         
**Response**:

-   Status Code: 200 (OK)
-   Example Response:
                                      `{"_id": "person_id","name": "Updated Name"}`

-   **Status Codes**:
    -   404 (Not Found) if the person with the specified ID does not exist.

#### Delete Person by ID

-   **Endpoint**: `DELETE /api/{id}`
-   **Description**: Removes a person from the database by their unique ID.
-   **Response**:
    -   Status Code: 204 (No Content)
-   **Status Codes**:
    -   404 (Not Found) if the person with the specified ID does not exist.


## Known Limitations

-   This API handles basic CRUD operations on a "person" resource and may require further enhancements for production use.
    
-   Authentication and authorization mechanisms are not included in this basic setup.
    

## Feedback and Contributions

We welcome feedback and contributions from the community. If you have any suggestions or encounter issues, please open an issue on our GitHub repository or submit a pull request.