import {Subject} from "../subject.model";
import {User} from "../user.model";
import {Assignment} from "../assignment.model";

const userList: User[] = [{
  "_id": "1",
  "role": "T",
  "username": "btodarini0@smugmug.com",
  "name": "Bernadette Todarini"
},
  {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"},
  {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
  {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
  {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"}];

const subjectList: Subject[] = [{
  "_id": "1",
  "title": "BMW",
  "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
  "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
},
  {
    "_id": "2",
    "title": "Mazda",
    "image": "http://dummyimage.com/172x100.png/dddddd/000000",
    "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
  }];
const assignmentList: Assignment[] = [{
  "_id": "1",
  "title": "Fliptune",
  "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
  "subject": {
    "_id": "1",
    "title": "BMW",
    "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
    "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
  },
  "score": 20,
  "remark": "Mitsubishi",
  "confirm": false,
  "dateSending": new Date("11/9/2023")
},
  {
    "_id": "2",
    "title": "Miboo",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 16,
    "remark": "Dodge",
    "confirm": false,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "3",
    "title": "Yambee",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 11,
    "remark": "Kia",
    "confirm": true,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "4",
    "title": "Brightdog",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 14,
    "remark": "GMC",
    "confirm": false,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "5",
    "title": "Centizu",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 18,
    "remark": "Pontiac",
    "confirm": false,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "6",
    "title": "Jazzy",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 12,
    "remark": "Toyota",
    "confirm": true,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "7",
    "title": "Feedfire",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 16,
    "remark": "Volvo",
    "confirm": false,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "8",
    "title": "Zooxo",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 17,
    "remark": "Eagle",
    "confirm": false,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "9",
    "title": "Tambee",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 11,
    "remark": "Jaguar",
    "confirm": false,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "10",
    "title": "Tagcat",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 10,
    "remark": "Ford",
    "confirm": false,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "11",
    "title": "Yata",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 13,
    "remark": "Land Rover",
    "confirm": false,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "12",
    "title": "Realfire",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 12,
    "remark": "Dodge",
    "confirm": false,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "13",
    "title": "BlogXS",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 10,
    "remark": "Lotus",
    "confirm": true,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "14",
    "title": "Fatz",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 15,
    "remark": "Scion",
    "confirm": true,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "15",
    "title": "Buzzbean",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 14,
    "remark": "Acura",
    "confirm": true,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "16",
    "title": "Tazz",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 16,
    "remark": "BMW",
    "confirm": true,
    "dateSending": new Date("11/9/2023")
  },
  {
    "_id": "17",
    "title": "Skajo",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 14,
    "remark": "Eagle",
    "confirm": true,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "18",
    "title": "Quatz",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 18,
    "remark": "Land Rover",
    "confirm": false,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "19",
    "title": "Geba",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 12,
    "remark": "Toyota",
    "confirm": true,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "20",
    "title": "Bubblebox",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 17,
    "remark": "Ford",
    "confirm": false,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "21",
    "title": "Quimba",
    "student": {"_id": "3", "role": "S", "username": "gmingotti2@arstechnica.com", "name": "Garner Mingotti"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 13,
    "remark": "Mercury",
    "confirm": false,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "22",
    "title": "Feedfire",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 14,
    "remark": "Dodge",
    "confirm": false,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "23",
    "title": "Wikivu",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 14,
    "remark": "Hummer",
    "confirm": false,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "24",
    "title": "Yodo",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 17,
    "remark": "Audi",
    "confirm": true,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "25",
    "title": "Dabvine",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 18,
    "remark": "Mitsubishi",
    "confirm": true,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "26",
    "title": "Jatri",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 14,
    "remark": "Ford",
    "confirm": true,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "27",
    "title": "Realblab",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 17,
    "remark": "BMW",
    "confirm": false,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "28",
    "title": "Eimbee",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 19,
    "remark": "Aston Martin",
    "confirm": false,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "29",
    "title": "Skinte",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 16,
    "remark": "BMW",
    "confirm": true,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "30",
    "title": "Jabbercube",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "1",
      "title": "BMW",
      "image": "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
      "teacher": {"_id": "1", "role": "T", "username": "btodarini0@smugmug.com", "name": "Bernadette Todarini"}
    },
    "score": 18,
    "remark": "Subaru",
    "confirm": false,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "31",
    "title": "Brainsphere",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 11,
    "remark": "Mitsubishi",
    "confirm": false,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "32",
    "title": "Brightbean",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 12,
    "remark": "Acura",
    "confirm": false,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "33",
    "title": "Zoomcast",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 20,
    "remark": "Dodge",
    "confirm": false,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "34",
    "title": "Eazzy",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 16,
    "remark": "Ford",
    "confirm": false,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "35",
    "title": "Yodo",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 14,
    "remark": "Audi",
    "confirm": true,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "36",
    "title": "Edgepulse",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 19,
    "remark": "Mazda",
    "confirm": true,
    "dateSending": new Date("6/30/2023")
  },
  {
    "_id": "37",
    "title": "Photobug",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 13,
    "remark": "Mazda",
    "confirm": false,
    "dateSending": new Date("12/17/2023")
  },
  {
    "_id": "38",
    "title": "Skinix",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 13,
    "remark": "GMC",
    "confirm": false,
    "dateSending": new Date("12/17/2023")
  },
  {
    "_id": "39",
    "title": "Cogilith",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 10,
    "remark": "Suzuki",
    "confirm": true,
    "dateSending": new Date("12/17/2023")
  },
  {
    "_id": "40",
    "title": "Thoughtblab",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 14,
    "remark": "Daewoo",
    "confirm": false,
    "dateSending": new Date("12/17/2023")
  },
  {
    "_id": "41",
    "title": "Mymm",
    "student": {"_id": "4", "role": "S", "username": "wlindroos3@cnn.com", "name": "Wren Lindroos"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 11,
    "remark": "Toyota",
    "confirm": false,
    "dateSending": new Date("12/17/2023")
  },
  {
    "_id": "42",
    "title": "Feedfire",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 17,
    "remark": "Dodge",
    "confirm": true,
    "dateSending": new Date("12/17/2023")
  },
  {
    "_id": "43",
    "title": "Zazio",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 13,
    "remark": "Land Rover",
    "confirm": false,
    "dateSending": new Date("12/17/2023")
  },
  {
    "_id": "44",
    "title": "Omba",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 14,
    "remark": "Chevrolet",
    "confirm": true,
    "dateSending": new Date("12/17/2023")
  },
  {
    "_id": "45",
    "title": "Youspan",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 15,
    "remark": "Mercury",
    "confirm": true,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "46",
    "title": "Oyoloo",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 11,
    "remark": "Volkswagen",
    "confirm": false,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "47",
    "title": "Roomm",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 13,
    "remark": "Lexus",
    "confirm": false,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "48",
    "title": "Jayo",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 16,
    "remark": "Citroën",
    "confirm": false,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "49",
    "title": "Edgewire",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 17,
    "remark": "Land Rover",
    "confirm": true,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "50",
    "title": "Gabtype",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 10,
    "remark": "Audi",
    "confirm": true,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "51",
    "title": "Realbuzz",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 19,
    "remark": "Toyota",
    "confirm": false,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "52",
    "title": "Zoonder",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 12,
    "remark": "Dodge",
    "confirm": false,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "53",
    "title": "Tambee",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 16,
    "remark": "Toyota",
    "confirm": true,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "54",
    "title": "Fadeo",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 16,
    "remark": "Dodge",
    "confirm": false,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "55",
    "title": "Kwimbee",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 20,
    "remark": "Infiniti",
    "confirm": true,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "56",
    "title": "Babbleopia",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 19,
    "remark": "Mercedes-Benz",
    "confirm": false,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "57",
    "title": "Teklist",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 17,
    "remark": "Lincoln",
    "confirm": true,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "58",
    "title": "Tagcat",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 15,
    "remark": "Mercedes-Benz",
    "confirm": true,
    "dateSending": new Date("7/1/2023")
  },
  {
    "_id": "59",
    "title": "Kwideo",
    "student": {"_id": "5", "role": "S", "username": "fgabbott4@tripadvisor.com", "name": "Federico Gabbott"},
    "subject": {
      "_id": "2",
      "title": "Mazda",
      "image": "http://dummyimage.com/172x100.png/dddddd/000000",
      "teacher": {"_id": "2", "role": "T", "username": "dburnall1@wikia.com", "name": "Dietrich Burnall"}
    },
    "score": 11,
    "remark": "Lotus",
    "confirm": true,
    "dateSending": new Date("7/1/2023")
  },
]


export {assignmentList, userList, subjectList};
