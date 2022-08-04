import returnDayDate from '../../services/date/returnDayDate';
import api from '..';

export const getAllObjecs = async () => {
  const response = await api.get(
    `?start_date=${returnDayDate.returnYear()}-${returnDayDate.returnMonth()}-${returnDayDate.returnDay()}&end_date=${returnDayDate.returnYear()}-${returnDayDate.returnMonth()}-${returnDayDate.returnDay()}&api_key=JN6NIngXhUJWTxkwxJLTyZxYZ8oDVpFbZKtOc9Af`
  );

  return response;
};
