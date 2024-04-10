const app = require('./app');

const PORT = process.env.PORT || 3012;

app.listen(PORT, () => console.log(`Running at ${PORT}`));