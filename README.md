# Virtual-CR-Backend

Virtual CR is a web-based app for CRship management. This is the backend for the app. 

Until now It provides with class routine data through a simple HTTP fetch request in JSON format. Obviously More will be added later. 

## Getting Started

### Prerequisites

Before running the Virtual-CR-Backend on your local machine, make sure you have the following installed:

1. [Node.js](https://nodejs.org/) - JavaScript runtime environment

### Installation

1. Clone this repository to your local machine or download the zip file.

2. Open the project folder in your preferred code editor (e.g., VSCode).

3. In the terminal, navigate to the project directory.

4. Install the dependencies by running the following command:

```
$bash npm install
```
or
```
$npm install
```


### Usage

#### Fetching Routine Data:

> To access the class routine data, open your browser and use the following URL:

1. To get routines for all periods of the five working days of a week:
    > http://localhost:2000/api/routine
2. To get routines for a specific day of the week (e.g., Sunday):
    > http://localhost:2000/api/routine/sunday

### API Endpoints

> /api/routine: Get routines for all periods of the five working days of a week.

> /api/routine/:day: Get routines for a specific day of the week (e.g., /api/routine/sunday).

### Contact

For any suggestions or feedback, feel free to reach out to: moon2007093@stud.kuet.ac.bd

### Author
Iqbal Mahamud Moon

KUET, CSE

Student ID: 2007093
