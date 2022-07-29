import express from 'express';
const app = express();
import routes from './routes/routes.js';

const puerto = process.env.PORT || 8080;

app.use (express.json());
app.use (express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', routes);

app.listen(puerto, () => {
    console.log(`Server running on port ${puerto}`);
});