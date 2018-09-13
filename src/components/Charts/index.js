import numeral from 'numeral';
import ChartCard from './ChartCard/ChartCard';
import Field from './Field/Field';

const yuan = val => `¥ ${numeral(val).format('0,0')}`;

const Charts = {
    yuan,
    ChartCard,
    Field
};

export {
    Charts as default,
    yuan,
    ChartCard,
    Field
};