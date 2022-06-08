import req from 'express/lib/request';
import '../views/words/days';
import days from '../views/words/days';
export const home = (req, res) => {
  const wordLists = days;
  return res.render('home', { wordLists });
};
