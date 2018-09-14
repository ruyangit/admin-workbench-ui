import './index.less'
import numeral from 'numeral';
import ChartCard from './ChartCard/ChartCard';
import Field from './Field/Field';
import MiniProgress from './MiniProgress';
// import MiniBar from './MiniBar/MiniBar';
// import MiniArea from './MiniArea/MiniArea';

const yuan = val => `¥ ${numeral(val).format('0,0')}`;

export {
    yuan,
    ChartCard,
    Field,
    MiniProgress,
    // MiniBar,
    // MiniArea
};