import req from 'express/lib/request';
import '../views/words/days';
import days from '../views/words/days';
export const dayWord = (req, res) => {
  const { id } = req.params;
  const dayWord = days[id - 1];
  return res.render('dayWord', { dayWord });
};
