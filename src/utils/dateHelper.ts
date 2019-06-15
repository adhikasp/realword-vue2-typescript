import moment from 'moment';

export function toHumanDate(utc: string): string {
  return moment(utc).format('MMMM Do, YYYY');
}
