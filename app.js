const express = require('express');
const path = require('path');
const app = express();

// Vue.js 애플리케이션 정적 파일 제공
app.use(express.static(path.join(__dirname, 'src')));

// API 엔드포인트
app.get('/api/data', (req, res) => {
  // API 로직 구현
  res.json({ message: 'Hello from backend!' });
});

// Vue.js 애플리케이션으로 모든 요청을 보냄
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'App.vue'));
});

const PORT = process.env.PORT || 60020;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});