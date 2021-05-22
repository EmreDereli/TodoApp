import moment from 'moment';

export const getFormattedDate = date => {
  return moment(date).fromNow();
};
