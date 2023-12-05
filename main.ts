import createApplication from 'express';
import mustacheExpress from 'mustache-express';

const app = createApplication();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'html');
app.engine('html', mustacheExpress());

app.get('/', (req, res) => {
  res.render('homepage');
});

app.get('/:page', (req, res) => {
  res.render(req.params.page);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
