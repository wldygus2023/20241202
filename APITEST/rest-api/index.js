const express = require('express');
const app = express();
require('dotenv').config(); // 환경 변수 로드 

// 기본 라우트
app.get('/',(req,res)=> {
    res.send('Express!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Sever Running on port ${PORT}`);
});

const todos = require('./data');

// get: 모든 todo 조회

app.get('/api/todos', (req,res) => {
    res.json(todos);
});
// 새로운 todo 추가
app.post('/api/todos',(req,res)=>{
    const newTodo={
      id: todos.length +1,
      title:req.body.title,
      completed:false  
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT: 특정 Todo 수정
app.put('/api/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).send('Todo not found.')
    todo.title = req.body.title;
    todo.completed = req.body.completed;
    res.json(todo);
})
// DELETE: 특정 Todo 삭제
app.delete('/api/todos/:id', (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Todo not found.')
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo);
});