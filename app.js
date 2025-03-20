const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, CI/CD with Ansible and Kubernetes!');
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app; // for testing