import numeral from 'numeral';
import ChartCard from './ChartCard/ChartCard';
import Field from './Field/Field';
import MiniProgress from './MiniProgress';

const yuan = val => `¥ ${numeral(val).format('0,0')}`;

const Charts = {
    yuan,
    ChartCard,
    Field,
    MiniProgress
};

export {
    Charts as default,
    yuan,
    ChartCard,
    Field,
    MiniProgress
};