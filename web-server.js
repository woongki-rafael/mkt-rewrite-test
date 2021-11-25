const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const axios = require('axios');

let fakeUserInfo = [
  {
    id: 1,
    name: 'Woongki Kim',
    mail: 'woongki@dable.io',
    team: 'AP',
    phone: '010-0000-0000',
  },
  {
    id: 2,
    name: 'Jeesoo Hong',
    mail: 'jeesoo@dable.io',
    team: 'AP',
    phone: '010-1234-5678',
  },
  {
    id: 3,
    name: 'Yujin Min',
    mail: 'yujin@dable.io',
    team: 'AP',
    phone: '010-9999-1111',
  },
  {
    id: 4,
    name: 'Yoonji Oh',
    mail: 'yoonji@dable.io',
    team: 'AP',
    phone: '010-4455-4511',
  }
];

const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeUserInfo);
    }, 100);
  });
};

const getUsersById = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = fakeUserInfo.find((val) => val.id === Number(userId));
      resolve(user);
    }, 100);
  });
};

const setUserById = (userId, userInfo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = fakeUserInfo.find(val => val.id === Number(userId));
      user.name = userInfo.name;
      user.mail = userInfo.mail;
      resolve(user);
    }, 100);
  });
};

app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/todos', async (req, res, next) => {
  console.info('todo request occured', new Date());
  const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const todosList = result.data.slice(0, 10);
  return res.json(todosList);
});

app.get('/users', async (req, res, next) => {
  console.info('all user data request occured', new Date());
  const userList = await getUsers();
  return res.json(userList);
});

app.get('/user/:id', async (req, res, next) => {
  console.info('user request occured', new Date());
  const userId = req.params.id;
  const userInfo = await getUsersById(userId);
  return res.json(userInfo);
});

app.post('/user/:id', async (req, res, next) => {
  console.info('user post request occured', new Date());
  const userId = req.params.id;
  const userInfo = req.body;
  const newUser = await setUserById(userId, userInfo);
  return res.json(newUser);
});

app.listen(4000, () => {
  console.info('fake json api response server start');
});

